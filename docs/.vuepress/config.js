module.exports = {
  // 名称,用于SEO
  title: 'Coderh',
  // 描述
  description: 'Coderh个人知识分享,更好的搭建技术框架',
  // 主题
  theme: 'reco',
  // 语言
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  // 打包后的目录,所取的为默认字符串
  dest: 'dist',
  head: [
    // 定义一些标签，会保存在 HTML 的<head>中
    ['link', { rel: 'icon', href: './public/favicon.ico' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  markdown: {
    lineNumbers: true, // 让代码块显示行号
    extractHeaders: ['h2', 'h3'], // 从 MarkDown 文档中提取哪几级标题，保存到 this.$page.headers
    toc: { includeLevel: [2, 3] }, // MarkDown 文档中，用 [[toc]] 标签建立目录时，收集哪几级标题
  },
  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'Css', link: '/css/' },
      { text: 'Node', link: '/node/' },
      { text: 'JQuery', link: '/jquery/' },
      { text: 'React', link: '/react/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'TypeScript', link: '/typescript/' },
      { text: 'Webpack', link: '/webpack/' },
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
  ],
}
