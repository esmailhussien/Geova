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
      { text: 'User Guide', link: '/guide/00-getting-started' },
      { text: 'Core Engine', link: '/core-engine/auth' },
      { text: 'Geova AI', link: '/geova-ai/interface' },
      { text: 'Back to App', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/guide/00-getting-started' }
        ]
      },
      {
        text: 'Core Modules',
        collapsed: false,
        items: [
          { text: 'Dashboard & Workspaces', link: '/guide/01-dashboard-view' },
          { text: 'Map Experience', link: '/guide/03-map-view' },
          { text: 'Layer Manager', link: '/guide/02-layers-view' },
          { text: 'Forms & Schema', link: '/guide/04-forms-view' },
          { text: 'Data Exchange', link: '/guide/05-data-view' },
          { text: 'Geova AI Chat', link: '/guide/06-geova-ai-chat' }
        ]
      },
      {
        text: 'Advanced & Administration',
        collapsed: false,
        items: [
          { text: 'Team & Shared', link: '/guide/07-team-view' },
          { text: 'Admin Panel', link: '/guide/08-admin-view' }
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
