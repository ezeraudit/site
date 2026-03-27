# Frontend Call Example V1

## Scope

本文件给前端一份可直接联调的最小调用方式。

目标：

- 正确创建任务
- 正确订阅 SSE 流
- 正确读取最终结果

非目标：

- 不描述底层模型 key
- 不描述内部模型编排细节

## Verified Endpoint

已验证可用的公网入口：

- `https://api.ezer.cc/api/tasks`
- `https://api.ezer.cc/api/tasks/{task_id}/stream`
- `https://api.ezer.cc/api/tasks/{task_id}/result`

注意：

- 不要调用 `GET /api/tasks`
- 不要调用 `/api/tasks/test`
- 不要调用 `/api/tasks/health`
- 必须带 `Authorization: Bearer <token>`

## Request Body

```json
{
  "code": "300750",
  "period": "FY",
  "year": 2023,
  "lang": "zh-CN"
}
```

字段说明：

- `code`: 股票代码，支持如 `300750`、`300750.SZ`、`000725.sz`
- `period`: `FY | Q1 | Q2 | Q3 | H1`
- `year`: 四位年份
- `lang`: `zh-CN | en`

## Create Task

```ts
const API_BASE = "https://api.ezer.cc";
const TOKEN = "<YOUR_BEARER_TOKEN>";

export async function createEzerTask() {
  const resp = await fetch(`${API_BASE}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      code: "300750",
      period: "FY",
      year: 2023,
      lang: "zh-CN",
    }),
  });

  if (!resp.ok) {
    throw new Error(`create task failed: ${resp.status} ${await resp.text()}`);
  }

  return resp.json();
}
```

成功返回示例：

```json
{
  "task_id": "task_300750_2023FY_54532415",
  "status": "accepted",
  "stream_url": "/api/tasks/task_300750_2023FY_54532415/stream",
  "result_url": "/api/tasks/task_300750_2023FY_54532415/result"
}
```

## Read Stream

前端不要直接依赖原生 `EventSource`，因为 `EventSource` 不适合稳定携带 `Authorization` header。

建议使用 `fetch + ReadableStream`：

```ts
export async function readEzerStream(
  taskId: string,
  onEvent: (evt: any) => void,
) {
  const resp = await fetch(`${API_BASE}/api/tasks/${taskId}/stream`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Accept": "text/event-stream",
    },
  });

  if (!resp.ok || !resp.body) {
    throw new Error(`stream failed: ${resp.status} ${await resp.text()}`);
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    while (true) {
      const boundary = buffer.indexOf("\\n\\n");
      if (boundary === -1) break;

      const rawEvent = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);

      for (const line of rawEvent.split("\\n")) {
        if (!line.startsWith("data: ")) continue;
        const jsonText = line.slice(6);
        try {
          onEvent(JSON.parse(jsonText));
        } catch (err) {
          console.error("bad sse payload", jsonText, err);
        }
      }
    }
  }
}
```

## Read Final Result

```ts
export async function getEzerResult(taskId: string) {
  const resp = await fetch(`${API_BASE}/api/tasks/${taskId}/result`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
    },
  });

  const text = await resp.text();
  if (!resp.ok) {
    throw new Error(`result failed: ${resp.status} ${text}`);
  }

  return JSON.parse(text);
}
```

## Frontend Parsing Notes

当前返回结构不变：

- 顶层 `task`
- 顶层 `stream`
- 顶层 `final_payload`

前端最终结果读取路径：

- `final_payload.normalized`
- `final_payload.analysis.cards`
- `final_payload.audit`

不要误读成顶层 `analysis` 或顶层 `audit`。

## Main Stream Events

当前可见的核心事件包括：

- `task_started`
- `a_normalized`
- `b_raw_delta`
- `b_progress`
- `b_card`
- `b_done`
- `c_raw_delta`
- `c_progress`
- `c_challenge`
- `c_resolved`
- `c_done`
- `final_summary`
- `final_result`
- `error`

推荐渲染方式：

- `a_normalized`: 覆盖标准化数据面板
- `b_raw_delta`: 仅作为实时感知，可不落库
- `b_card`: 追加到分析卡片列表
- `c_challenge`: 追加到审计挑战列表
- `c_resolved`: 追加到审计通过列表
- `final_result`: 覆盖最终结论区

## Verified Example

已验证的公网任务样例：

- `task_300750_2023FY_54532415`

已验证行为：

- `POST /api/tasks` 返回 `202`
- 任务目录已落盘
- `b_stream.jsonl` 已生成

## Debug Checklist

如果前端“没有反应”，优先检查：

- 是否误用了 `GET /api/tasks`
- 是否误用了 `/api/tasks/test`
- 是否没有带 `Authorization`
- 是否先创建任务再去连接 `/stream`
- 是否前端读取的是 `final_payload.analysis.cards`
