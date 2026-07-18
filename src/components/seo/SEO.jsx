import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image, type }) => {
  const siteTitle = 'Geova - Intelligent Infrastructure. Built by Engineers, for Engineers.';
  const defaultDescription = 'Geova connects field data collection, GIS review workflows, QA/QC, dashboards, and handover exports for infrastructure and environmental teams.';
  const defaultKeywords = 'GIS platform, spatial intelligence, Mapplex, field data collection, infrastructure mapping, GIS QA QC, urban planning GIS, environmental assessment, consulting engineering';
  const siteUrl = 'https://geova.net';

  const seoTitle = title ? `${title} | Geova` : siteTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;
  const seoImage = image || `${siteUrl}/default-og-image.jpg`;
  const seoType = type || 'website';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Geova Technologies",
    "url": siteUrl,
    "logo": `${siteUrl}/assets/GEOVA.png`,
    "description": "Spatial data platform and GIS consulting firm for field collection, QA/QC, dashboards, and handover workflows.",
    "foundingDate": "2010",
    "sameAs": [],
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
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/docs/?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seoType} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Geova Technologies" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
