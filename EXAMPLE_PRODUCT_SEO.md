# Example: Dynamic SEO Meta Tags Implementation

This file demonstrates how the dynamic SEO meta tags work for product pages in the TasteCraft application.

## Product Detail Page with Dynamic SEO

### URL: `/product/1` (Gourmet Burger Deluxe)

When a user or crawler visits this URL, the following meta tags are dynamically generated:

```html
<!-- Basic Meta Tags -->
<title>Gourmet Burger Deluxe - Premium Dining Experience | TasteCraft</title>
<meta name="description" content="Indulge in our signature Gourmet Burger Deluxe featuring premium beef, artisanal cheese, and fresh ingredients. Perfect for food lovers seeking quality." />
<meta name="keywords" content="gourmet burger, premium beef, artisanal cheese, fine dining" />
<meta name="author" content="TasteCraft" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://tastecraft.netlify.app/product/1" />

<!-- Open Graph Meta Tags (Facebook) -->
<meta property="og:type" content="product" />
<meta property="og:title" content="Gourmet Burger Deluxe - Premium Dining Experience | TasteCraft" />
<meta property="og:description" content="Indulge in our signature Gourmet Burger Deluxe featuring premium beef, artisanal cheese, and fresh ingredients. Perfect for food lovers seeking quality." />
<meta property="og:image" content="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop" />
<meta property="og:url" content="https://tastecraft.netlify.app/product/1" />
<meta property="og:site_name" content="TasteCraft" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Gourmet Burger Deluxe - Premium Dining Experience | TasteCraft" />
<meta name="twitter:description" content="Indulge in our signature Gourmet Burger Deluxe featuring premium beef, artisanal cheese, and fresh ingredients. Perfect for food lovers seeking quality." />
<meta name="twitter:image" content="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop" />

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "TasteCraft",
  "description": "Indulge in our signature Gourmet Burger Deluxe featuring premium beef, artisanal cheese, and fresh ingredients. Perfect for food lovers seeking quality.",
  "url": "https://tastecraft.netlify.app/product/1",
  "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
  "telephone": "(555) 123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Culinary Street",
    "addressLocality": "Food City",
    "addressRegion": "FC",
    "postalCode": "12345",
    "addressCountry": "US"
  }
}
</script>
```

## How It Works

### 1. React Component Implementation

```jsx
// In ProductDetail.jsx
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { seo } = product;
  const productUrl = `https://tastecraft.netlify.app/product/${id}`;

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        image={product.image}
        url={productUrl}
        type="product"
      />
      {/* Rest of component */}
    </>
  );
};
```

### 2. Product Data Structure

```javascript
// In src/data/products.js
export const products = [
  {
    id: 1,
    title: "Gourmet Burger Deluxe",
    description: "A premium beef burger with artisanal cheese...",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
    seo: {
      title: "Gourmet Burger Deluxe - Premium Dining Experience",
      description: "Indulge in our signature Gourmet Burger Deluxe featuring premium beef, artisanal cheese, and fresh ingredients. Perfect for food lovers seeking quality.",
      keywords: "gourmet burger, premium beef, artisanal cheese, fine dining"
    }
  }
];
```

### 3. SEO Component

```jsx
// In src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  const siteTitle = 'TasteCraft';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
```

## Prerender.io Integration

When a crawler (like Googlebot or Facebook's crawler) visits the page:

1. **Bot Detection**: The Netlify Edge Function detects the crawler
2. **Prerender Request**: Sends the URL to Prerender.io service
3. **Server Rendering**: Prerender.io renders the React app server-side
4. **Meta Tag Injection**: All dynamic meta tags are included in the HTML
5. **Crawler Response**: The fully rendered HTML is served to the crawler

### Example Crawler Request Flow

```bash
# 1. Facebook crawler visits the page
curl -H "User-Agent: facebookexternalhit/1.1" https://tastecraft.netlify.app/product/1

# 2. Edge function detects bot and forwards to Prerender.io
# 3. Prerender.io renders the page and returns HTML with meta tags
# 4. Facebook receives fully rendered HTML with proper meta tags
```

## Testing the Implementation

### 1. Test with Facebook Debugger
Visit: https://developers.facebook.com/tools/debug/
Enter URL: `https://your-app.netlify.app/product/1`

**Expected Result:**
- Title: "Gourmet Burger Deluxe - Premium Dining Experience | TasteCraft"
- Description: Product description
- Image: Product image preview

### 2. Test with Twitter Card Validator
Visit: https://cards-dev.twitter.com/validator
Enter URL: `https://your-app.netlify.app/product/1`

**Expected Result:**
- Large image card with product photo
- Proper title and description
- TasteCraft branding

### 3. Test with LinkedIn Post Inspector
Visit: https://www.linkedin.com/post-inspector/
Enter URL: `https://your-app.netlify.app/product/1`

**Expected Result:**
- Professional preview with product details
- Proper meta tag recognition
- Image and text optimization

## Benefits

1. **SEO Optimization**: Each product page has unique, relevant meta tags
2. **Social Media Sharing**: Rich previews on all major platforms
3. **Search Engine Visibility**: Better indexing and search results
4. **User Experience**: Consistent branding across all touchpoints
5. **Analytics**: Better tracking of social media traffic

This implementation ensures that every product page is fully optimized for both search engines and social media platforms, providing maximum visibility and engagement.
