export const sampleData = [
  {
    "event": "task_started",
    "producer": "SYSTEM",
    "role": "orchestrator",
    "data": {
      "task_id": "task_601899.SH_2024FY_039dceba",
      "request": {
        "code": "601899.SH",
        "period": "FY",
        "year": 2024,
        "lang": "zh-CN"
      }
    }
  },
  {
    "event": "a_normalized",
    "producer": "A",
    "role": "normalizer",
    "data": {
      "company": {
        "name": "紫金矿业",
        "ticker": "601899.SH",
        "reporting_period": "2024FY"
      },
      "report": {
        "type": "FY",
        "release_date": "2025-03-22"
      },
      "income_statement": {
        "revenue": 303639957153,
        "net_profit": 32050602437,
        "gross_margin": 20.374060382583
      },
      "balance_sheet": {
        "total_assets": 396610730026,
        "total_liabilities": 218880000963,
        "cash_equivalents": null
      },
      "cashflow_statement": {
        "operating_cashflow": 48860346839,
        "investing_cashflow": -32238447068,
        "financing_cashflow": -4428870908
      },
      "key_ratios": {
        "roe": 25.89,
        "roa": null,
        "debt_to_asset": 55.1876145531
      },
      "source_refs": [
        {
          "field": "company.name",
          "source": "SECURITY_NAME_ABBR"
        },
        {
          "field": "company.ticker",
          "source": "SECUCODE"
        },
        {
          "field": "company.reporting_period",
          "source": "year+period"
        },
        {
          "field": "report.type",
          "source": "request.period"
        },
        {
          "field": "report.release_date",
          "source": "NOTICE_DATE"
        },
        {
          "field": "income_statement.revenue",
          "source": "TOTALOPERATEREVE"
        },
        {
          "field": "income_statement.net_profit",
          "source": "PARENTNETPROFIT"
        },
        {
          "field": "income_statement.gross_margin",
          "source": "XSMLL"
        },
        {
          "field": "balance_sheet.total_assets",
          "source": "TOTAL_ASSETS_PK"
        },
        {
          "field": "balance_sheet.total_liabilities",
          "source": "LIABILITY"
        },
        {
          "field": "balance_sheet.cash_equivalents",
          "source": "MONETARYFUNDS"
        },
        {
          "field": "cashflow_statement.operating_cashflow",
          "source": "NETCASH_OPERATE_PK"
        },
        {
          "field": "cashflow_statement.investing_cashflow",
          "source": "NETCASH_INVEST_PK"
        },
        {
          "field": "cashflow_statement.financing_cashflow",
          "source": "NETCASH_FINANCE_PK"
        },
        {
          "field": "key_ratios.roe",
          "source": "ROEJQ"
        },
        {
          "field": "key_ratios.roa",
          "source": "ROATJ"
        },
        {
          "field": "key_ratios.debt_to_asset",
          "source": "ZCFZL"
        }
      ],
      "history_12q": [
        {
          "reporting_period": "2024Q4",
          "source_report_period": "2024FY",
          "report_date": "2024-12-31",
          "release_date": "2025-03-22",
          "revenue": 73243477134,
          "net_profit": 7693143516,
          "operating_cashflow": 12751309573,
          "gross_margin": 20.374060382583,
          "gross_margin_basis": "cumulative_ytd",
          "debt_to_asset": 55.1876145531,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2024Q3",
          "source_report_period": "2024Q3",
          "report_date": "2024-09-30",
          "release_date": "2024-10-19",
          "revenue": 79979965562,
          "net_profit": 9273073263,
          "operating_cashflow": 15662207432,
          "gross_margin": 19.53155418012,
          "gross_margin_basis": "cumulative_ytd",
          "debt_to_asset": 55.3830479151,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2024Q2",
          "source_report_period": "2024Q2",
          "report_date": "2024-06-30",
          "release_date": "2024-08-24",
          "revenue": 75639893065,
          "net_profit": 8823542385,
          "operating_cashflow": 12274755604,
          "gross_margin": 19.152661854318,
          "gross_margin_basis": "cumulative_ytd",
          "debt_to_asset": 56.6541305619,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2024Q1",
          "source_report_period": "2024Q1",
          "report_date": "2024-03-31",
          "release_date": "2024-04-23",
          "revenue": 74776621392,
          "net_profit": 6260843273,
          "operating_cashflow": 8172074230,
          "gross_margin": 16.605051233738,
          "gross_margin_basis": "single_quarter",
          "debt_to_asset": 58.2950728064,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2023Q4",
          "source_report_period": "2023FY",
          "report_date": "2023-12-31",
          "release_date": "2024-03-23",
          "revenue": 68395481629,
          "net_profit": 4954498280,
          "operating_cashflow": 11136877492,
          "gross_margin": 15.807315523873,
          "gross_margin_basis": "cumulative_ytd",
          "debt_to_asset": 59.6616633797,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2023Q3",
          "source_report_period": "2023Q3",
          "report_date": "2023-09-30",
          "release_date": "2023-10-28",
          "revenue": 74674065415,
          "net_profit": 5862769747,
          "operating_cashflow": 9695481246,
          "gross_margin": 15.15822446598,
          "gross_margin_basis": "cumulative_ytd",
          "debt_to_asset": 59.0247016007,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2023Q2",
          "source_report_period": "2023Q2",
          "report_date": "2023-06-30",
          "release_date": "2023-08-26",
          "revenue": 75388710599,
          "net_profit": 4860317327,
          "operating_cashflow": 8198653437,
          "gross_margin": 14.65064670087,
          "gross_margin_basis": "cumulative_ytd",
          "debt_to_asset": 58.9400737297,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2023Q1",
          "source_report_period": "2023Q1",
          "report_date": "2023-03-31",
          "release_date": "2023-04-28",
          "revenue": 74944985235,
          "net_profit": 5441834217,
          "operating_cashflow": 7829053840,
          "gross_margin": 15.529270113946,
          "gross_margin_basis": "single_quarter",
          "debt_to_asset": 58.5111957634,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2022Q4",
          "source_report_period": "2022FY",
          "report_date": "2022-12-31",
          "release_date": "2023-03-25",
          "revenue": 66137853750,
          "net_profit": 3374921429,
          "operating_cashflow": 6730054799,
          "gross_margin": 15.738125071496,
          "gross_margin_basis": "cumulative_ytd",
          "debt_to_asset": 59.3341516944,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2022Q3",
          "source_report_period": "2022Q3",
          "report_date": "2022-09-30",
          "release_date": "2022-10-22",
          "revenue": 71733616578,
          "net_profit": 4037091451,
          "operating_cashflow": 6372678036,
          "gross_margin": 15.598414391766,
          "gross_margin_basis": "cumulative_ytd",
          "debt_to_asset": 58.2937823863,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2022Q2",
          "source_report_period": "2022Q2",
          "report_date": "2022-06-30",
          "release_date": "2022-08-13",
          "revenue": 67686782585,
          "net_profit": 6506227828,
          "operating_cashflow": 8147906996,
          "gross_margin": 17.135276147199,
          "gross_margin_basis": "cumulative_ytd",
          "debt_to_asset": 59.1051515927,
          "flow_basis": "single_quarter"
        },
        {
          "reporting_period": "2022Q1",
          "source_report_period": "2022Q1",
          "report_date": "2022-03-31",
          "release_date": "2022-04-12",
          "revenue": 64770745546,
          "net_profit": 6123805269,
          "operating_cashflow": 7427862529,
          "gross_margin": 17.318382890982,
          "gross_margin_basis": "single_quarter",
          "debt_to_asset": 56.5551691389,
          "flow_basis": "single_quarter"
        }
      ],
      "market_context": [
        {
          "title": "紫金矿业(601899.SH)的资产负债率、销售毛利率",
          "entity_name": "紫金矿业(601899.SH)",
          "points": [
            "资产负债率: 55.19%",
            "销售毛利率: 20.37%"
          ],
          "source": "mx_searchData"
        },
        {
          "title": "紫金矿业(02899.HK)业务数据(2024-12-31)",
          "entity_name": "业务名称",
          "points": [
            "产量:黄金产品: 期末值 | 68275 | 千克",
            "产量:加工金: 期末值 | 228152 | 千克",
            "产量:矿山产金: 期末值 | 68275 | 千克",
            "产量:矿山产铜: 期末值 | 837570 | 吨",
            "产量:矿山产银: 期末值 | 428684 | 千克",
            "产量:铁精矿: 期末值 | 658500 | 吨"
          ],
          "source": "mx_searchData"
        },
        {
          "title": "紫金矿业(02899.HK)业务数据(2024-09-30)",
          "entity_name": "业务名称",
          "points": [
            "产量:矿山产金: 期末值 | 54265 | 千克",
            "产量:矿山产铜: 期末值 | 789459 | 吨",
            "产量:矿山产银: 期末值 | 331114 | 千克",
            "产量:冶炼产铜: 期末值 | 574772 | 吨",
            "销售量:矿山产金: 期末值 | 50918 | 千克",
            "销售量:矿山产铜: 期末值 | 619495 | 吨"
          ],
          "source": "mx_searchData"
        }
      ],
      "data_gaps": [
        "期末现金及现金等价物缺失",
        "总资产收益率ROA缺失"
      ]
    }
  },
  {
    "event": "b_progress",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "step": "解析核心财务数据与补充材料",
      "percentage": 10
    }
  },
  {
    "event": "b_progress",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "step": "生成财务概览",
      "percentage": 20
    }
  },
  {
    "event": "b_card",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "card_id": "overview",
      "title": "整体业绩概览",
      "conclusion": "2024财年公司业绩强劲，营业总收入平稳增长，归母净利润同比大幅增长超50%，盈利能力显著提升。",
      "evidence": [
        "营业收入",
        "归母净利润",
        "业务与市场补充上下文"
      ],
      "cross_checks": [
        "营业收入微增(3.49%)与归母净利润大增(51.76%)的映射，印证了公司核心产品毛利的扩张。"
      ],
      "counterpoints": [
        "数据缺口清单中缺失期末现金及现金等价物，无法直接确认公司账面流动性充裕度。"
      ],
      "investor_implication": "利润释放弹性远超营收扩张，表明公司核心矿产（金、铜）正处于高景气周期，基本面极其稳健。"
    }
  },
  {
    "event": "b_progress",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "step": "检查趋势与拐点",
      "percentage": 40
    }
  },
  {
    "event": "b_card",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "card_id": "trend_and_turning_points",
      "title": "趋势与拐点",
      "conclusion": "净利润和毛利率在2024年实现明显中枢抬升，且四季度单季利润维持高增。",
      "evidence": [
        "近12个季度历史序列",
        "销售毛利率"
      ],
      "cross_checks": [
        "2024全年累计销售毛利率(20.37%)明显高于2023年全年(15.80%)；单季度归属母公司股东的净利润在24Q4同比大增55.28%。"
      ],
      "counterpoints": [
        "近12个季度历史序列显示，24Q4单季度营业收入及归母净利润环比24Q3有所回落，需关注大宗商品价格波动带来的季度性扰动。"
      ],
      "investor_implication": "公司业绩步入高释放期，重点关注核心资产产能释放与宏观价格周期的共振是否能在后续季度延续。"
    }
  },
  {
    "event": "b_progress",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "step": "分析增长质量",
      "percentage": 50
    }
  },
  {
    "event": "b_card",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "card_id": "growth_quality",
      "title": "增长质量分析",
      "conclusion": "收入增长由高规模的矿产实物量支撑，属高质量的内生性增长。",
      "evidence": [
        "营业收入",
        "业务与市场补充上下文"
      ],
      "cross_checks": [
        "2024年末矿山产铜(83.76万吨)、矿山产金(6.83万公斤)的庞大实物量与3036亿元的营业总收入规模形成坚实的实物量映射。"
      ],
      "counterpoints": [
        "业务与市场补充上下文中未提供往年同期具体产量对比，难以精准拆分业绩增长中‘量增’与‘价涨’的具体贡献比例。"
      ],
      "investor_implication": "业务由核心矿产资源主导，增长实心度高，但高度依赖全球金属宏观定价。"
    }
  },
  {
    "event": "b_progress",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "step": "评估盈利质量",
      "percentage": 60
    }
  },
  {
    "event": "b_card",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "card_id": "profitability_quality",
      "title": "盈利能力质量",
      "conclusion": "盈利能力大幅增强，ROE达到超高水平，资本回报优异。",
      "evidence": [
        "销售毛利率",
        "净资产收益率ROE"
      ],
      "cross_checks": [
        "销售毛利率突破20%与高达25.89%的净资产收益率ROE相互印证，显示出企业获取超额利润的强劲能力。"
      ],
      "counterpoints": [
        "数据缺口清单中总资产收益率ROA缺失，导致无法精确评估剔除财务杠杆影响后的总资产纯粹盈利效率。"
      ],
      "investor_implication": "在当前的周期 position，公司具有强大的资本回报能力，对长线价值投资者具有很强吸引力。"
    }
  },
  {
    "event": "b_progress",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "step": "校验利润与现金流匹配度",
      "percentage": 70
    }
  },
  {
    "event": "b_card",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "card_id": "profit_cash_consistency",
      "title": "利润与现金流一致性",
      "conclusion": "利润与现金流匹配度极佳，经营现金净流入远超净利润，显现‘强现金牛’特征。",
      "evidence": [
        "经营活动现金流净额",
        "归母净利润",
        "近12个季度历史序列"
      ],
      "cross_checks": [
        "全年经营活动现金流净额(488.6亿元)约为归母净利润(320.5亿元)的1.5倍；近12个季度历史序列中单季度经营现金流稳定在80-150亿区间，趋势高度吻合。"
      ],
      "counterpoints": [
        "投资活动现金流净额常年呈现巨额流出(2024FY为-322.4亿元)，表明维持增长需消耗大量现金，警惕资本开支对自由现金流的侵蚀。"
      ],
      "investor_implication": "报表利润具备扎实的‘真金白银’支撑，分红潜力大；但高额的重资产投入期尚未结束，需持续关注资本支出的转化效率。"
    }
  },
  {
    "event": "b_progress",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "step": "评估资产负债表压力",
      "percentage": 85
    }
  },
  {
    "event": "b_card",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "card_id": "balance_sheet_pressure",
      "title": "资产负债表压力",
      "conclusion": "负债水平稳中有降，杠杆率收缩，整体资产负债表健康。",
      "evidence": [
        "资产负债率",
        "总资产",
        "筹资活动现金流净额"
      ],
      "cross_checks": [
        "近12个季度历史序列显示资产负债率从23Q4的59.66%一路下行至24Q4的55.19%，与筹资活动现金流净额呈现流出(-44.3亿元)相契合，反映了债务的实质性偿还与压降。"
      ],
      "counterpoints": [
        "因期末现金及现金等价物数据缺失，无法测算长短期债务分布和账面速动比率，无法完全排除局部或短期的流动性周转压力。"
      ],
      "investor_implication": "杠杆率的稳步收缩提升了财务安全边际，为公司未来抗击可能的金属周期下行提供了更厚的护城河。"
    }
  },
  {
    "event": "b_progress",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "step": "整理未知与数据边界",
      "percentage": 95
    }
  },
  {
    "event": "b_card",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "card_id": "unknowns_and_limits",
      "title": "未知领域与分析局限",
      "conclusion": "受限于部分关键资产和回报率数据缺失，现金安全性和无杠杆收益率难以全面确诊。",
      "evidence": [
        "数据缺口清单",
        "期末现金及现金等价物",
        "总资产收益率ROA缺失"
      ],
      "cross_checks": [
        "投资活动现金流净额高达数百亿的流出与期末现金存量的缺失，共同构成了资产负债表流动性的分析盲区。"
      ],
      "counterpoints": [
        "虽然当期及过去12个季度的利润表和经营现金流证实了公司的强劲，但由于缺少成本拆分和具体的未来资本开支指引，历史序列不足以完全验证长期盈利高位的绝对持续性。"
      ],
      "investor_implication": "投资者需通过公司业绩说明会或详细财报附注，补足现金储备水位、资本开支规划以及矿权成本趋势的信息拼图。"
    }
  },
  {
    "event": "b_done",
    "producer": "B",
    "role": "analyzer",
    "data": {
      "status": "success",
      "total_cards": 7
    }
  },
  {
    "event": "c_progress",
    "producer": "C",
    "role": "auditor",
    "data": {
      "step": "复核并挑战 growth_quality",
      "percentage": 20
    }
  },
  {
    "event": "c_challenge",
    "producer": "C",
    "role": "auditor",
    "data": {
      "target_card_id": "growth_quality",
      "issue": "结论宣称‘收入增长由高规模的矿产实物量支撑，属高质量的内生性增长’，但证据中仅包含当期实物产量，缺乏往年同期产量对比。在没有量价拆解的情况下，无法排除业绩增长完全由大宗商品‘价涨’驱动的可能性，该归因存在明显的逻辑跳跃。",
      "severity": "HIGH"
    }
  },
  {
    "event": "c_progress",
    "producer": "C",
    "role": "auditor",
    "data": {
      "step": "复核并挑战 profit_cash_consistency",
      "percentage": 40
    }
  },
  {
    "event": "c_challenge",
    "producer": "C",
    "role": "auditor",
    "data": {
      "target_card_id": "profit_cash_consistency",
      "issue": "在得出‘强现金牛’结论时，虽然提示了投资活动现金流流出，但在核心结论中过度强调了经营活动现金流的充裕度，未能在结论层合并考量超322亿投资流出对最终自由现金流量的实质性侵蚀，导致对长期分红潜力的研判可能偏于乐观。",
      "severity": "MEDIUM"
    }
  },
  {
    "event": "c_progress",
    "producer": "C",
    "role": "auditor",
    "data": {
      "step": "复核通过 overview",
      "percentage": 60
    }
  },
  {
    "event": "c_resolved",
    "producer": "C",
    "role": "auditor",
    "data": {
      "target_card_id": "overview",
      "rationale": "准确提取了补充数据中的单季与全年同比增速（归母净利润大增51.76%），并与营业收入微增相映射，正确推导了毛利扩张的逻辑。"
    }
  },
  {
    "event": "c_progress",
    "producer": "C",
    "role": "auditor",
    "data": {
      "step": "复核通过 trend_and_turning_points",
      "percentage": 80
    }
  },
  {
    "event": "c_resolved",
    "producer": "C",
    "role": "auditor",
    "data": {
      "target_card_id": "trend_and_turning_points",
      "rationale": "准确捕捉了24Q4单季度利润环比24Q3出现回落的事实，没有盲目线性外推，具备较好的客观性。"
    }
  },
  {
    "event": "c_progress",
    "producer": "C",
    "role": "auditor",
    "data": {
      "step": "复核通过 balance_sheet_pressure",
      "percentage": 100
    }
  },
  {
    "event": "c_resolved",
    "producer": "C",
    "role": "auditor",
    "data": {
      "target_card_id": "balance_sheet_pressure",
      "rationale": "历史序列查证准确，证实资产负债率从23Q4的59.66%逐季下行至55.19%，结合筹资现金流出，去杠杆逻辑成立。"
    }
  },
  {
    "event": "c_done",
    "producer": "C",
    "role": "auditor",
    "data": {
      "final_status": "PASS_WITH_WARNINGS"
    }
  },
  {
    "event": "final_summary",
    "producer": "C",
    "role": "auditor",
    "data": {
      "final_status": "PASS_WITH_WARNINGS",
      "summary": "分析整体逻辑自洽，数据引用准确，且能充分利用补充结构化数据交叉验证（如净利润同比增速51.76%等）。但部分结论在归因上存在逻辑跳跃：特别是在缺乏往期实物产量对比的情况下，直接将业绩增长归因为‘实物量支撑’缺乏充足证据；此外，对巨额资本开支带来的自由现金流压力有所淡化。建议降低主观定性评价的绝对性。"
    }
  },
  {
    "event": "final_result",
    "producer": "C",
    "role": "auditor",
    "data": {
      "final_status": "PASS_WITH_WARNINGS",
      "summary": "分析整体逻辑自洽，数据引用准确，且能充分利用补充结构化数据交叉验证（如净利润同比增速51.76%等）。但部分结论在归因上存在逻辑跳跃：特别是在缺乏往期实物产量对比的情况下，直接将业绩增长归因为‘实物量支撑’缺乏充足证据；此外，对巨额资本开支带来的自由现金流压力有所淡化。建议降低主观定性评价的绝对性。",
      "challenge_points": [
        {
          "target_card_id": "growth_quality",
          "issue": "结论宣称‘收入增长由高规模的矿产实物量支撑，属高质量的内生性增长’，但证据中仅包含当期实物产量，缺乏往年同期产量对比。在没有量价拆解的情况下，无法排除业绩增长完全由大宗商品‘价涨’驱动的可能性，该归因存在明显的逻辑跳跃。",
          "severity": "HIGH"
        },
        {
          "target_card_id": "profit_cash_consistency",
          "issue": "在得出‘强现金牛’结论时，虽然提示了投资活动现金流流出，但在核心结论中过度强调了经营活动现金流的充裕度，未能在结论层合并考量超322亿投资流出对最终自由现金流量的实质性侵蚀，导致对长期分红潜力的研判可能偏于乐观。",
          "severity": "MEDIUM"
        }
      ],
      "resolved_points": [
        {
          "target_card_id": "overview",
          "rationale": "准确提取了补充数据中的单季与全年同比增速（归母净利润大增51.76%），并与营业收入微增相映射，正确推导了毛利扩张的逻辑。"
        },
        {
          "target_card_id": "trend_and_turning_points",
          "rationale": "准确捕捉了24Q4单季度利润环比24Q3出现回落的事实，没有盲目线性外推，具备较好的客观性。"
        },
        {
          "target_card_id": "balance_sheet_pressure",
          "rationale": "历史序列查证准确，证实资产负债率从23Q4的59.66%逐季下行至55.19%，结合筹资现金流出，去杠杆逻辑成立。"
        }
      ],
      "groups": [
        "归因逻辑瑕疵",
        "现金流分析局限"
      ],
      "source_refs": [
        {
          "field": "业务与市场补充上下文",
          "source": "mx_searchData"
        },
        {
          "field": "投资活动现金流净额",
          "source": "NETCASH_INVEST_PK"
        },
        {
          "field": "近12个季度历史序列",
          "source": "history_12q"
        }
      ],
      "meta": {
        "auditor_model": "openclaw-strict-auditor",
        "audit_scope": "结论逻辑连贯性与证据充分性审查"
      }
    }
  }
];
