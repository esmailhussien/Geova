import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image }) => {
  const siteTitle = 'Geova - Designing the Logic of the Physical World';
  const defaultDescription = 'Mapplex Engine by Geova is an advanced geospatial AI and smart city mapping platform designed for field intelligence and enterprise infrastructure.';
  const defaultKeywords = 'geospatial AI, smart cities, infrastructure mapping, Mapplex engine, GIS platform, field mapping app';
  const siteUrl = 'https://geova.net';

  const seoTitle = title ? `${title} | Geova` : siteTitle;
  const seoDescription = description || defaultDescription;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;
  const seoImage = image || `${siteUrl}/default-og-image.jpg`; // Placeholder for default share image

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords || defaultKeywords} />}
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;
