import { defineConfig } from 'vitepress'

const siteUrl = 'https://geova.net'

export default defineConfig({
  title: "Geova / Mapplex Docs",
  description: "Geova and Mapplex documentation for offline GIS fieldwork, spatial data, Geova AI, and mapping workflows.",
  site: siteUrl,
  base: '/docs/',
  outDir: '../dist/docs',
  appearance: true, // Enable light/dark mode switch

  transformHead({ pageData }) {
    const relativePath = pageData.relativePath.replace(/\\/g, '/')
    const canonicalPath = relativePath === 'index.md' || relativePath === 'README.md'
      ? '/docs/'
      : `/docs/${relativePath.replace(/\.md$/, '.html')}`
    const canonicalUrl = `${siteUrl}${canonicalPath}`
    const title = pageData.title ? `${pageData.title} | Geova / Mapplex Docs` : 'Geova / Mapplex Docs'
    const description = pageData.description || 'Geova and Mapplex documentation for offline GIS fieldwork, spatial data, Geova AI, and mapping workflows.'

    return [
      ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' }],
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:type', content: 'article' }],
      ['meta', { property: 'og:site_name', content: 'Geova | Mapplex Docs' }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: `${siteUrl}/og-image.png` }],
      ['link', { rel: 'icon', href: '/favicon.svg?v=2', type: 'image/svg+xml' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: `${siteUrl}/og-image.png` }]
    ]
  },

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
      { text: 'Back to App', link: 'https://geova.net/' }
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
          { text: '14 - SHP Manager', link: '/guide/14-shp-manager' },
          { text: '15 - Capability Reference', link: '/guide/15-capability-reference' },
          { text: '16 - Sample Project', link: '/guide/16-sample-project-municipal-asset-inspection' },
          { text: '17 - Glossary', link: '/guide/17-glossary-key-concepts' }
        ]
      }
    ],

    footer: {
      message: 'Intelligent Infrastructure Mapping',
      copyright: 'Copyright © 2026 Geova'
    }
  }
})
