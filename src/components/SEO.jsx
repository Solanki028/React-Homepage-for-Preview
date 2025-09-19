import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'TasteCraft - Culinary Excellence',
  description = 'Experience culinary excellence with our carefully crafted dishes and premium ingredients. Discover exceptional taste and quality in every bite.',
  keywords = 'restaurant, fine dining, gourmet food, culinary, premium ingredients',
  image = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=630&fit=crop',
  url = 'https://tastecraft.netlify.app',
  type = 'website'
}) => {
  const siteTitle = 'TasteCraft';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="TasteCraft" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags for Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@tastecraft" />
      <meta name="twitter:creator" content="@tastecraft" />

      {/* Additional Meta Tags for better SEO */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": siteTitle,
          "description": description,
          "url": url,
          "image": image,
          "telephone": "(555) 123-4567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Culinary Street",
            "addressLocality": "Food City",
            "addressRegion": "FC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "servesCuisine": "International",
          "priceRange": "$$",
          "acceptsReservations": true
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
