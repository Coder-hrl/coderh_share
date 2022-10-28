module.exports = {
	// 名称,用于SEO
	title: 'Coderh',
	// 描述
	description:
		'Coderh个人知识分享,更好的搭建技术框架',
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
	// 主题配置
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{
				text: '了解更多',
				items: [
					{
						text: 'Github',
						link: 'https://github.com/coder-hrl',
					},
					// {
					// 	text: '掘金',
					// 	link: 'https://juejin.cn/user/712139234359182/posts',
					// },
				],
			},
		],
		sidebar: [
			{
				title: '欢迎学习',
				path: '/',
				collapsable: false, // 不折叠
				children: [
					{
						title: '学前必读',
						path: '/',
					},
				],
			},
			{
				title: '基础学习',
				path: '../js_frame/basic.md',
				collapsable: false, // 不折叠
				children: [],
			},
		],
		// 自动根据名称生成目录
		subSidebar: 'auto',
		// 上次更新的字体
		lastUpdated: '上次更新',
	},
	plugins: [
		'@vuepress/active-header-links',
		'@vuepress/back-to-top',
	],
};
