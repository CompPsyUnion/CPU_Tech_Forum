import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CPU Tech Forum",
  description: "A Docs Website for Computer Psycho Union UNNC",
  base: "/CPU_Tech_Forum/",
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CompPsyUnion/' }
    ]
  }
})
