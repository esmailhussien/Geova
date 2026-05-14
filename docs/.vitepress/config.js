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
      { text: 'Docs Home', link: '/' },
      { text: 'User Guide', link: '/guide/README' },
      { text: 'Back to App', link: 'https://www.geova.net/' }
    ],

    sidebar: [
      {
        text: 'The Mapplex Platform',
        collapsed: false,
        items: [
          { text: 'Welcome & Workflows', link: '/guide/README' },
          { text: '00 - Getting Started', link: '/guide/00-getting-started' },
          { text: '01 - Dashboard', link: '/guide/01-dashboard-view' },
          { text: '02 - Layers', link: '/guide/02-layers-view' },
          { text: '03 - Map Engine', link: '/guide/03-map-view' },
          { text: '04 - Forms & Logic', link: '/guide/04-forms-view' },
          { text: '05 - Data & Sync', link: '/guide/05-data-view' },
          { text: '06 - Geova AI', link: '/guide/06-geova-ai-chat' },
          { text: '07 - Team', link: '/guide/07-team-view' },
          { text: '08 - Settings', link: '/guide/08-settings' },
          { text: '09 - Slope Profiler', link: '/guide/09-slope-profiler' },
          { text: '10 - PDF Export', link: '/guide/10-map-pdf-export' },
          { text: '11 - Troubleshooting', link: '/guide/11-troubleshooting' },
          { text: '12 - CAD Manager', link: '/guide/12-cad-manager' },
          { text: '13 - Engineering Drawing', link: '/guide/13-engineering-drawing-export' },
          { text: '14 - SHP Manager', link: '/guide/14-shp-manager' }
        ]
      }
    ],

    footer: {
      message: 'Intelligent Infrastructure Mapping',
      copyright: 'Copyright © 2026 Geova'
    }
  }
})
