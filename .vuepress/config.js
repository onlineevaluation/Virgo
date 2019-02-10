module.exports = {
    title: '处女座',
    head: [],
    dest: 'docs',
    base: '/Virgo/',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {
                text: '天秤座',
                items: [
                    {text: '介绍', link: '/Libra/introduction'},
                    {text: '结构', link: '/Libra/struts'},
                    {text: '模块划分', link: '/Libra/module'},
                    {text: '数据库设计', link: '/Libra/database'},
                    {text: '部署', link: '/Libra/depoly'},
                ],
            },
            {text: '水瓶座', link: '/Aquarius/'},
            {
                text: '魔羯座',
                items: [
                    {text: '介绍', link: '/Capricornus/introduction'},
                    {text: '结构', link: '/Capricornus/struts'},
                ]
            },
            {
                text: '未知', link:
                    '/x/'
            },
            {
                text: 'Github', link:
                    'https://github.com/youngxhui'
            },
        ],
        sidebar: 'auto',
        sidebarDepth:
            3,
        lastUpdated:
            'Last Updated',
    },
    markdown: {
        lineNumbers: true,
    }
    ,
}
;
