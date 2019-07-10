module.exports = {
  title: 'docs/pdf/北航硕士刘祥的简历',
  exportPdfOrder: ["README.md", "专业技能.md", "工作经历.md", "项目经历.md", "教育经历.md", "自我介绍.md"],
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  plugins: ['@lx1036/vuepress-plugin-export'],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'lx1036',
      description: 'lx1036 的简历'
    }
  },
  themeConfig: {
    docsRepo: 'lx1036/lx1036.github.io',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: false,
    repo: 'lx1036/lx1036.github.io',
    locales: {
      '/': {
        sidebar: [
          {
            title: '关于我',
            collapsable: false,
            children: [
              ['/专业技能', '专业技能'],
              ['/工作经历', '工作经历'],
              ['/项目经历', '项目经历'],
              ['/教育经历', '教育经历'],
              ['/自我介绍', '自我介绍'],
            ]
          },
        ],
      },
    },
  },
}