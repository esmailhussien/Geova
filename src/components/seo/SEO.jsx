import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image, imageAlt, type, noindex = false }) => {
  const siteTitle = 'Geova | Spatial Intelligence & GIS Systems';
  const defaultDescription = 'Geova is a spatial intelligence technology company building GIS-based systems, Geova AI, Mapplex field operations, and custom spatial SaaS solutions.';
  const defaultKeywords = 'GIS platform, spatial intelligence, Geova AI, Mapplex, field data collection, custom GIS software, spatial SaaS, infrastructure mapping, environmental assessment, consulting engineering';
  const siteUrl = 'https://geova.net';

  const seoTitle = title ? `${title} | Geova` : siteTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoUrl = new URL(url || '/', siteUrl).toString();
  const seoImage = new URL(image || '/og-image.png', siteUrl).toString();
  const seoImageAlt = imageAlt || 'Geova spatial intelligence and GIS systems';
  const seoType = type || 'website';
  const robotsContent = noindex
    ? 'noindex,follow'
    : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Geova Technologies",
    "url": siteUrl,
    "logo": `${siteUrl}/assets/GEOVA.png`,
    "description": "Spatial intelligence technology company building GIS-based systems, Geova AI, Mapplex field operations, and custom spatial SaaS solutions.",
    "foundingDate": "2010",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "info@geova.net",
        "contactType": "General Inquiry"
      },
      {
        "@type": "ContactPoint",
        "email": "sales@geova.net",
        "contactType": "Sales"
      },
      {
        "@type": "ContactPoint",
        "email": "support@geova.net",
        "contactType": "Technical Support"
      }
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Geova",
    "url": siteUrl,
    "description": defaultDescription
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": seoType === 'article' ? 'Article' : 'WebPage',
    "name": seoTitle,
    "description": seoDescription,
    "url": seoUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Geova",
      "url": siteUrl
    }
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content="Geova Technologies" />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seoType} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:alt" content={seoImageAlt} />
      <meta property="og:site_name" content="Geova Technologies" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:image:alt" content={seoImageAlt} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
