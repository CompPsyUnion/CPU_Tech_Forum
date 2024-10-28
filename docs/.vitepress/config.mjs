import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CPU Tech Forum",
  description: "A Docs Website for Computer Psycho Union UNNC",
  head: [[
    'link',
  ]],
  base: "/CPU_Tech_Forum/",
  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Events', link: '/events/' },
      { text: 'About', link: '/about.html' }
    ],
    sidebar: [
      {
        '/events/': [
          {
            text: 'Event Materials',
            items: [
              { text: 'AY2425', link: '/events/AY2425' }
            ]
          }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CompPsyUnion/' }
    ]
  }
})
