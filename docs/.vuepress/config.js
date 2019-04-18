module.exports = {
  title: '处女座',
  head: [],
  dest: './docs/.vuepress/dist',
  base: '/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '天秤座',
        items: [
          { text: '介绍', link: '/Libra/introduction' },
          { text: '结构', link: '/Libra/struts' },
          { text: '模块划分', link: '/Libra/module' },
          { text: '数据库设计', link: '/Libra/database' },
          { text: '部署', link: '/Libra/depoly' },
        ],
      },
      { text: '水瓶座', link: '/Aquarius/' },
      {
        text: '魔羯座',
        items: [
          { text: '介绍', link: '/Capricornus/introduction' },
          { text: '结构', link: '/Capricornus/struts' },
          { text: '部署', link: 'Capricornus/deploy'},
        ],
      },
      {
        text: '金牛座',
        link: '/Taurus/introduction',
      },
    ],
    repo: 'onlineevaluation/Virgo',
    editLinkText: '编辑本页',
    editLinks: true,
    docsDir: 'docs',
    sidebar: 'auto',
    sidebarDepth: 3,
    lastUpdated: '最近更新',
  },
  markdown: {
    lineNumbers: true,
  },
};
