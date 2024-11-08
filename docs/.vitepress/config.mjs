import { defineConfig } from 'vitepress'
import sidebar from "./config/sidebar.js";

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
    logo: "https://avatars.githubusercontent.com/u/178354211?s=200&v=4",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Events', link: '/events/' },
      { text: 'About', link: '/about.html' }
    ],
    sidebar: sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CompPsyUnion/' }
    ],
    footer: {
      message: "MIT Licensed",
      copyright: "Copyright © 2024-present CompPsyUnion",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern:
          "https://github.com/CompPsyUnion/CPU_Tech_Forum/edit/main/docs/:path",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  }
})
