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
      { text: 'Core Engine', link: '/core-engine/offline-sync' },
      { text: 'Screens', link: '/screens/dashboard/' },
      { text: 'Geova AI', link: '/geova-ai/interface' },
      { text: 'Back to App', link: '/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/' }
        ]
      },
      {
        text: 'Core Engine',
        collapsed: false,
        items: [
          { text: 'Offline Sync', link: '/core-engine/offline-sync' },
          { text: 'Authentication', link: '/core-engine/auth' }
        ]
      },
      {
        text: 'Screens',
        collapsed: false,
        items: [
          { text: 'Auth View', link: '/screens/auth-view' },
          { text: 'Dashboard', link: '/screens/dashboard/' },
          { text: 'Map Interface', link: '/screens/map-interface/' },
          { text: 'Layers View', link: '/screens/layers-view' },
          { text: 'Forms View', link: '/screens/forms-view' },
          { text: 'Data View', link: '/screens/data-view' },
          { text: 'Data Sync', link: '/screens/data-sync' },
          { text: 'Admin View', link: '/screens/admin-view' }
        ]
      },
      {
        text: 'Geova AI',
        collapsed: false,
        items: [
          { text: 'Interface', link: '/geova-ai/interface' },
          { text: 'Prompt Guide', link: '/geova-ai/prompt-guide' },
          { text: 'Engine Architecture', link: '/geova-ai/architecture' },
          { text: 'Spatial Index', link: '/geova-ai/spatial-index' }
        ]
      }
    ],

    footer: {
      message: 'Intelligent Infrastructure Mapping',
      copyright: 'Copyright © 2026 Geova'
    }
  }
})
