module.exports = {
  // 名称,用于SEO
  title: 'Coderh',
  // 描述
  description: 'Coderh前端知识分享,为了更好的搭建知识框架',
  // 主题
  // theme: 'reco',
  // 语言
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  // 打包后的目录,所取的为默认字符串
  dest: 'build',
  head: [
    // 定义一些标签，会保存在 HTML 的<head>中
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  markdown: {
    lineNumbers: true, // 让代码块显示行号
    extractHeaders: ['h2'], // 从 MarkDown 文档中提取哪几级标题，保存到 this.$page.headers
    toc: { includeLevel: [2] }, // MarkDown 文档中，用 [[toc]] 标签建立目录时，收集哪几级标题
  },
  // 主题配置
  themeConfig: {
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: '前端基础',
        items: [
          {
            text: 'JavaScript',
            link: '/JavaScript/',
          },
          {
            text: 'Css',
            link: '/Css/',
          },
        ],
      },
      {
        text: '前端进阶',
        items: [
          {
            text: 'React',
            link: '/React/',
          },
          {
            text: 'Vue',
            link: '/Vue/',
          },
          {
            text: 'TypeScript',
            link: '/TypeScript/',
          },
          {
            text: 'Node',
            link: '/Node/',
          },
          {
            text: 'Webpack',
            link: '/Webpack/',
          },
        ],
      },
      {
        text: '小程序与App',
        items: [
          {
            text: '微信小程序',
            link: '/MiniProgram/weixin/',
          },
          {
            text: 'Uniapp',
            link: '/MiniProgram/uniapp/',
          },
          // {
          //   text: 'Flutter',
          //   link: '/MiniProgram/flutter/',
          // },
        ],
      },
      // {
      // 	text: 'Java',
      // 	items: [
      // 		{
      // 			text: 'Java基础',
      // 			link: '/Java/JavaSE/',
      // 		},
      // 		{
      // 			text: 'Java编程思想',
      // 			link: '/Java/JavaSE/',
      // 		},
      // 	],
      // },
      {
        text: '面试错题本',
        link: '/front_interview/',
      },

      {
        text: '软技能',
        link: '/SoftSkills/',
        items: [
          {
            text: '计算机网络',
            link: '/SoftSkills/network/',
          },
          {
            text: '数据结构',
            link: '/SoftSkills/dataStructure/',
          },
          {
            text: '操作系统',
            link: '/SoftSkills/operateSystem/',
          },
          {
            text: '组成原理',
            link: '/SoftSkills/computerOrganization/',
          },
          {
            text: '设计模式',
            link: '/SoftSkills/designMode/',
          },
          {
            text: '重构技巧',
            link: '/SoftSkills/Refactoring/',
          },
          {
            text: '代码规范',
            link: '/SoftSkills/codeStandards/',
          },
        ],
      },
      {
        text: '运维架构',
        link: '/Operation/',
        items: [
          {
            text: 'nginx',
            link: '/Operation/nginx/',
          },
          // {
          //   text: 'linux',
          //   link: '/Operation/linux/',
          // },
          // { text: 'docker', link: '/Operation/docker/' },
        ],
      },
      {
        text: '了解更多',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/coder-hrl',
          },
          {
            text: 'Gitee',
            link: 'https://gitee.com/huangruilin',
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/2929541598425223',
          },
        ],
      },
    ],
    sidebar: 'auto',
    // sidebar: [
    // {
    //   title: '欢迎学习',
    //   path: '/css/',
    //   collapsable: false, // 不折叠
    //   children: [
    //     {
    //       title: '学前必读',
    //       path: '/',
    //     },
    //   ],
    // },
    // ],
    // 自动根据名称生成目录
    subSidebar: 'auto',
    // 上次更新的字体
    lastUpdated: '上次更新',
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    [
      'vuepress-plugin-auto-sidebar',
      {
        sidebarDepth: 2,
        title: {
          mode: 'titlecase',
        },
        collapse: {
          open: true,
        },
      },
    ],
  ],
}
