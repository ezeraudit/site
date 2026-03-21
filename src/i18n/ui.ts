export const languages = {
  zh: '简体中文',
  en: 'English',
};

export const defaultLang = 'zh';

export const ui = {
  zh: {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.contact': '联系',
    'nav.signin': '登录',
    'accessibility.skip-to-content': '跳到内容',
    'search.title': '搜索财报',
    'search.placeholder': '输入公司名称或股票代码...',
    'search.check': '检查',
    'search.period': '财报期',
    'search.period.annual': '年报',
    'search.period.q1': '第一季度',
    'search.period.q2': '第二季度',
    'search.period.q3': '第三季度',
    'search.period.q4': '第四季度',
    'search.no-results': '未找到匹配结果',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.signin': 'Sign in',
    'accessibility.skip-to-content': 'Skip to content',
    'search.title': 'Search Financial Reports',
    'search.placeholder': 'Enter company name or stock code...',
    'search.check': 'Check',
    'search.period': 'Report Period',
    'search.period.annual': 'Annual',
    'search.period.q1': 'Q1',
    'search.period.q2': 'Q2',
    'search.period.q3': 'Q3',
    'search.period.q4': 'Q4',
    'search.no-results': 'No matching results found',
  },
} as const;
