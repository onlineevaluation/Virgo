module.exports = {
  title: '在线测评及推荐系统',
  head: [],
  dest: 'dest',
  base: '',
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
      { text: '未知', link: '/web/' },
      { text: 'Github', link: 'https://github.com/youngxhui' },
    ],
    sidebar: 'auto',
    sidebarDepth: 3,
    lastUpdated: 'Last Updated',
  },
  markdown: {
    lineNumbers: true,
  },
};
