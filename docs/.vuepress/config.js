/*
 * @Author: dingpanfeng
 * @Date: 2021-01-28 15:18:37
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2023-08-14 17:36:37
 * @FilePath: /dingpanfeng.github.io/docs/.vuepress/config.js
 */
module.exports = {
    title: '黑马程序员',
    description: '前端',
    // 注入到当前页面的 HTML <head> 中的标签
    //   head: [
    //     ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    //   ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    theme: '@vuepress/theme-default',
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        //lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        smoothScroll: true,
        nav: [
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '小程序开发', link: '/' },
            { text: '前端开发', link: '/fe/' }
            /*  { text: 'Dart', link: '/dart/' },
       { text: 'TypeScript', link: '/TypeScript/' },
       //格式二：添加下拉菜单，link指向的文件路径
       {
           text: '分类',  //默认显示        下拉列表
           ariaLabel: '分类',   //用于识别的label
           items: [
               { text: '原生开发', link: '/guide/' },
               { text: 'Hybrid技术', link: '/guide/hybrid' },
               { text: 'React Native、Weex', link: '/guide/rn' },
               { text: '快应用小程序', link: '/guide/applet' },
               { text: 'Flutter技术', link: '/guide/flutter' },
               { text: '小结', link: '/guide/summary' }
           ]
       }, */
            /*   { text: '功能演示', link: '/pages/folder1/test3.md' },
 
        //格式三：跳转至外部网页，需http/https前缀
        { text: 'Github', link: 'https://github.com/dwanda' }, */
        ],
        sidebar: {
            '/WeChat/': [
                {
                    title: '小程序开发',
                    collapsable: false,
                    children: [
                        { title: '课程简介', path: '/WeChat/' },
                        { title: '第一天', path: '/WeChat/day01' }
                    ]
                }
            ],
            '/fe/': [
                {
                    title: '前端开发',
                    collapsable: false,
                    children: [{ title: '前端分享', path: '/fe/' }]
                }
            ]
            /* '/guide/': [
          {
              title: '跨平台技术简介',
              collapsable: false,
              children: [
                  { title: '原生开发', path: '/guide/' },
                  { title: 'Hybrid技术', path: '/guide/hybrid' },
                  { title: 'React Native、Weex', path: '/guide/rn' },
                  { title: '快应用小程序', path: '/guide/applet' },
                  { title: 'Flutter技术', path: '/guide/flutter' },
                  { title: '小结', path: '/guide/summary' }
              ]
          },
      ],
      '/dart/': [
          {
              title: 'Dart整理学习',
              collapsable: false,
              children: [
                  { title: 'Dart', path: '/dart/' },
              ]
          }
      ],
      '/typescript/': [
          {
              title: 'TypeScript整理学习',
              collapsable: false,
              children: [
                  { title: 'TypeScript', path: '/typescript/' },
              ]
          } 
      ] */
            /* '/vite/': [
        {
          title: 'Vite',
          collapsable: false,
          children: [
            { title: 'Vite', path: '/vite/' },
          ]
        }
      ], */
        }
    }
}
