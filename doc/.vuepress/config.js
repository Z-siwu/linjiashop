module.exports = {
    title: '邻家小铺',
    description: '使用邻家小铺搭建自己的全平台商城系统',
    base: '/linjiashop/',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.ico' }]
    ],
    evergreen: true,
    editLinkText:'在 GitHub 上编辑此页',
    port: 8090,
    ga: 'UA-71886989-13',
    themeConfig: {
        repo: 'microapp-store/linjiashop',
        docsDir: 'doc',
        editLinks: true,
        editLinkText: '编辑此页面！',
        nav: [
            {text: '指南', link: '/base/preface'},
            {text: '生态系统',
                items:[
                    {text:"项目",items:[
                            {text:'linjiashop-flutter(app)',link:'/ecosystem/app'},
                            {text:'web-flash',link:'http://enilu.gitee.io/web-flash'},
                            {text:'code-generator',link:'http://enilu.gitee.io/web-flash/ecosystem/code-generator.html'},
                            {text:'database-doc-generator',link:'http://enilu.gitee.io/web-flash/ecosystem/database-doc-generator.html'},
                            {text:'material-admin',link:'https://enilu.gitee.io/material-admin'}
                        ]
                    },
                    {text:'帮助',items:[
                            {text: '在线资源',link:'/base/resource'},
                            {text:'付费社区',link:'/other/xiaomiquan'},
                            {text:'QQ群(254059156)',link:'https://jq.qq.com/?_wv=1027&k=5rEmcb6'},
                            {text:'作者blog',link:'http://blog.enilu.cn'},
                            {text:'商业支持',link:'https://www.microapp.store'},
                            {text:'FAQ',link:'/other/faq'},
                            {text:'Change Log',link:'/other/changelog'}
                    ]},

                ]
            },
            {text: '捐赠',link:'/other/donate'},
            {text: 'Gitee', link: 'https://gitee.com/microapp/linjiashop'}
        ],
        sidebar: [
            {
                title: '准备',
                collapsable: false,
                children: [
                    '/base/preface',
                    '/base/jdkAndMaven',
                    '/base/modules'
                ]
            },
            {
                title: '20分钟将本项目跑起来',
                collapsable: false,
                children: [
                    '/quickstart/quickstart',
                    '/quickstart/clone',
                    '/quickstart/initDb',
                    '/quickstart/config',
                    '/quickstart/startup'
                ]
            },
            {
                title: '二次开发',
                collapsable: false,
                children: [
                    '/develop/develop',
                    '/develop/api',
                    '/develop/banner',
                    '/develop/attribute',
                    '/develop/wechat'
                ]
            },
            {
                title: '其他',
                collapsable: false,
                children:[
                    '/other/faq',
                    '/other/changelog'
                ]
            }
        ]

    }
}
