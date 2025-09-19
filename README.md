# 🍽️ TasteCraft - Premium Restaurant Landing Page

A production-ready React.js application built with Vite, featuring a modern restaurant/e-commerce landing page with full SEO optimization and social media integration.

![TasteCraft Preview](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=400&fit=crop)

## ✨ Features

### 🎨 Modern Design
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Beautiful UI**: Clean, professional design suitable for restaurants or e-commerce
- **Interactive Components**: Hover effects, smooth transitions, and animations
- **Accessibility**: WCAG compliant with proper ARIA labels

### 🚀 Performance & SEO
- **React Helmet Async**: Dynamic meta tags for each page
- **Prerender.io Integration**: Full server-side rendering for crawlers
- **Social Media Optimization**: Facebook, Twitter, LinkedIn previews
- **Structured Data**: JSON-LD for rich search results
- **Core Web Vitals Optimized**: Fast loading and excellent UX

### 🛠️ Tech Stack
- **Frontend**: React 19 + Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v3
- **SEO**: React Helmet Async + Prerender.io
- **Deployment**: Netlify with Edge Functions
- **Build Tool**: Vite (Lightning fast HMR)

## 📁 Project Structure

```
my-app/
├── public/
│   ├── _redirects              # Netlify redirects for SPA routing
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx      # Main layout wrapper
│   │   │   ├── Navbar.jsx      # Navigation component
│   │   │   └── Footer.jsx      # Footer component
│   │   ├── ui/
│   │   │   ├── Button.jsx      # Reusable button component
│   │   │   └── Card.jsx        # Product/dish card component
│   │   └── SEO.jsx             # SEO meta tags component
│   ├── data/
│   │   └── products.js         # Dummy data for products/dishes
│   ├── pages/
│   │   ├── Home.jsx           # Homepage with hero & featured items
│   │   ├── ProductDetail.jsx   # Dynamic product detail page
│   │   ├── About.jsx          # About page
│   │   └── Contact.jsx        # Contact & reservation page
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles with Tailwind
├── netlify/
│   └── edge-functions/
│       └── prerender.js       # Prerender.io integration
├── netlify.toml              # Netlify configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── DEPLOYMENT_GUIDE.md       # Detailed deployment instructions
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone & Install**
```bash
git clone <your-repo-url>
cd my-app
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 📱 Pages & Features

### 🏠 Homepage (`/`)
- **Hero Section**: Eye-catching banner with call-to-action
- **Featured Products**: Showcase of signature dishes/products
- **About Preview**: Brief company story
- **Call-to-Action**: Reservation and contact prompts

### 🍕 Product Detail (`/product/:id`)
- **Dynamic Routing**: SEO-optimized URLs for each product
- **Rich Content**: High-quality images, descriptions, pricing
- **Meta Tags**: Unique SEO tags for each product
- **Social Sharing**: Optimized for social media sharing

### ℹ️ About Page (`/about`)
- **Company Story**: Mission, values, and history
- **Team Showcase**: Meet the culinary team
- **Awards & Recognition**: Achievements and testimonials
- **Values & Sustainability**: Core principles

### 📞 Contact Page (`/contact`)
- **Reservation Form**: Interactive booking system
- **Contact Information**: Address, phone, email, hours
- **Location Map**: Visual location reference
- **Form Validation**: Client-side form validation

## 🎨 Component Library

### 🔘 Button Component
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

**Variants**: `primary`, `secondary`, `outline`
**Sizes**: `sm`, `md`, `lg`

### 🃏 Card Component
```jsx
<Card product={productData} showButton={true} />
```

### 🧭 Navigation
- **Responsive**: Mobile hamburger menu
- **Active States**: Current page highlighting
- **Smooth Transitions**: Hover and focus effects

## 🔍 SEO Implementation

### Meta Tags
Each page includes optimized:
- Title tags
- Meta descriptions
- Open Graph tags (Facebook)
- Twitter Card tags
- Canonical URLs

### Example Product Page SEO
```jsx
<SEO 
  title="Gourmet Burger Deluxe - Premium Dining Experience"
  description="Indulge in our signature Gourmet Burger Deluxe featuring premium beef, artisanal cheese, and fresh ingredients."
  keywords="gourmet burger, premium beef, artisanal cheese, fine dining"
  image="https://example.com/burger-image.jpg"
  url="https://tastecraft.netlify.app/product/1"
/>
```

### Structured Data
JSON-LD structured data for:
- Restaurant information
- Menu items
- Reviews and ratings
- Contact details

## 🌐 Deployment

### Netlify Deployment

1. **Connect Repository**
   - Link your Git repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   ```
   PRERENDER_TOKEN=your_prerender_token_here
   ```

3. **Prerender.io Setup**
   - Create account at [Prerender.io](https://prerender.io)
   - Add your domain
   - Configure bot detection

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 🧪 Testing SEO

### Bot Simulation
```bash
# Test as Googlebot
curl -H "User-Agent: Googlebot/2.1" https://your-app.netlify.app/

# Test Facebook crawler
curl -H "User-Agent: facebookexternalhit/1.1" https://your-app.netlify.app/product/1
```

### Social Media Testing
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 100

### Optimization Features
- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Lazy loading for better performance
- **Caching**: Proper cache headers for static assets
- **Minification**: Optimized CSS and JavaScript

## 🎯 Customization

### Branding
Update colors in `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#your-brand-color',
    600: '#your-brand-color-dark',
  }
}
```

### Content
- Update `src/data/products.js` with your products/dishes
- Modify company information in components
- Replace placeholder images with your content

### Styling
- All styles use Tailwind CSS classes
- Custom components in `src/components/ui/`
- Global styles in `src/index.css`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the deployment guide
- **Issues**: Open a GitHub issue
- **Discussions**: Use GitHub Discussions for questions

---

Built with ❤️ using React, Vite, and Tailwind CSS
