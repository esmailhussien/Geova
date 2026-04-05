import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Geova / Mapplex Docs",
  description: "Technical Documentation and Guides for Intelligent Infrastructure",
  base: '/docs/',
  outDir: '../dist/docs',
  appearance: true, // Enable light/dark mode switch

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'material-theme-palenight'
    }
  },
  
  themeConfig: {
    siteTitle: 'Geova | Mapplex',
    search: {
      provider: 'local'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/screens/auth-view' },
      { text: 'Interface', link: '/screens/dashboard/' },
      { text: 'Geova AI', link: '/geova-ai/interface' },
      { text: 'Back to App', link: '/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Authentication', link: '/screens/auth-view' }
        ]
      },
      {
        text: 'Navigating the Interface',
        collapsed: false,
        items: [
          { text: 'Dashboard', link: '/screens/dashboard/' },
          { text: 'Map Interface', link: '/screens/map-interface/' },
          { text: 'Layers View', link: '/screens/layers-view' },
          { text: 'Forms View', link: '/screens/forms-view' },
          { text: 'Data Table', link: '/screens/data-view' },
          { text: 'Admin Console', link: '/screens/admin-view' }
        ]
      },
      {
        text: 'Advanced Operations',
        collapsed: false,
        items: [
          { text: 'Geova AI Protocol', link: '/geova-ai/interface' },
          { text: 'AI Prompt Guide', link: '/geova-ai/prompt-guide' }
        ]
      },
      {
        text: 'System Architecture',
        collapsed: true,
        items: [
          { text: 'Core Auth Strategy', link: '/core-engine/auth' },
          { text: 'Offline Sync Engine', link: '/core-engine/offline-sync' },
          { text: 'Data Sync Flow', link: '/screens/data-sync' },
          { text: 'AI Architecture', link: '/geova-ai/architecture' },
          { text: 'Spatial Indexing', link: '/geova-ai/spatial-index' }
        ]
      }
    ],

    footer: {
      message: 'Intelligent Infrastructure Mapping',
      copyright: 'Copyright © 2026 Geova'
    }
  }
})
