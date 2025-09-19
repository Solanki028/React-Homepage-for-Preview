# TasteCraft - Deployment Guide

## 🚀 Netlify Deployment with Prerender.io Integration

This guide will walk you through deploying your React app to Netlify with full SEO support using Prerender.io.

### Prerequisites

1. **Node.js** (v18 or higher)
2. **Git** repository
3. **Netlify account** (free tier available)
4. **Prerender.io account** (free tier available)

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- React Router DOM for routing
- React Helmet Async for SEO meta tags
- Tailwind CSS for styling

### Step 2: Set Up Prerender.io Account

1. Go to [Prerender.io](https://prerender.io) and create a free account
2. Add your domain (e.g., `https://your-app.netlify.app`)
3. Get your **Prerender Token** from the dashboard
4. Note: Free tier includes 1,000 pages/month

### Step 3: Deploy to Netlify

#### Option A: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

#### Option B: Deploy via Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com) and click "New site from Git"
3. Connect your repository
4. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

### Step 4: Configure Environment Variables

In your Netlify dashboard:

1. Go to **Site Settings** → **Environment Variables**
2. Add the following variables:

```
PRERENDER_TOKEN=your_prerender_token_here
```

### Step 5: Verify Prerender.io Integration

#### Test Bot Detection

1. Use a bot user agent to test:
```bash
curl -H "User-Agent: Googlebot/2.1" https://your-app.netlify.app/
```

2. Check if the response contains fully rendered HTML with meta tags

#### Test Social Media Previews

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### Step 6: Monitor and Optimize

#### Prerender.io Dashboard

- Monitor crawl requests
- Check cache hit rates
- View rendering errors

#### Performance Monitoring

1. **Google PageSpeed Insights**: Test loading performance
2. **GTmetrix**: Analyze page load times
3. **Lighthouse**: Check SEO and accessibility scores

### Configuration Files Explained

#### `netlify.toml`
- Build settings and redirects
- Edge function configuration
- Security headers

#### `public/_redirects`
- Fallback for client-side routing
- Prerender.io integration rules

#### `netlify/edge-functions/prerender.js`
- Bot detection logic
- Prerender.io service integration
- Caching strategy

### SEO Features Implemented

✅ **Dynamic Meta Tags**: Each page has unique title, description, and OG tags
✅ **Structured Data**: JSON-LD for rich snippets
✅ **Social Media Cards**: Twitter and Facebook optimized
✅ **Canonical URLs**: Prevent duplicate content issues
✅ **Sitemap Ready**: All routes are crawlable
✅ **Mobile Responsive**: Optimized for all devices

### Testing Your Deployment

#### 1. Basic Functionality Test
```bash
# Test if the app loads
curl https://your-app.netlify.app/

# Test routing
curl https://your-app.netlify.app/about
curl https://your-app.netlify.app/product/1
```

#### 2. SEO Test (Bot Simulation)
```bash
# Test as Googlebot
curl -H "User-Agent: Googlebot/2.1" https://your-app.netlify.app/ | grep "<title>"

# Test as Facebook crawler
curl -H "User-Agent: facebookexternalhit/1.1" https://your-app.netlify.app/product/1 | grep "og:title"
```

#### 3. Performance Test
- Run Lighthouse audit
- Check Core Web Vitals
- Test on different devices

### Troubleshooting

#### Common Issues

1. **Build Fails**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Prerender Not Working**
   - Verify PRERENDER_TOKEN is set correctly
   - Check bot user agent detection
   - Review Prerender.io dashboard for errors

3. **Routes Not Working**
   - Ensure `_redirects` file is in `public/` folder
   - Check Netlify function logs
   - Verify React Router configuration

4. **Meta Tags Not Updating**
   - Check React Helmet Async implementation
   - Verify SEO component is properly imported
   - Test with different bot user agents

### Production Checklist

- [ ] All dependencies installed
- [ ] Build succeeds locally
- [ ] Environment variables configured
- [ ] Prerender.io account set up
- [ ] Domain configured in Prerender.io
- [ ] Social media cards tested
- [ ] Performance optimized
- [ ] Error monitoring set up

### Support

For issues with:
- **Netlify**: Check [Netlify Docs](https://docs.netlify.com/)
- **Prerender.io**: Check [Prerender.io Docs](https://docs.prerender.io/)
- **React Router**: Check [React Router Docs](https://reactrouter.com/)

### Next Steps

1. **Custom Domain**: Set up your own domain
2. **Analytics**: Add Google Analytics or similar
3. **Monitoring**: Set up error tracking (Sentry, etc.)
4. **CDN**: Optimize images with Netlify Image CDN
5. **Forms**: Add Netlify Forms for contact form

---

🎉 **Congratulations!** Your React app is now deployed with full SEO support and social media optimization!
