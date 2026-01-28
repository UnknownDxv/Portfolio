# Deployment Guide

This guide will help you deploy your portfolio to Vercel in minutes.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (free tier is sufficient)

## Method 1: One-Click Deploy (Fastest)

1. Click the "Deploy with Vercel" button in the README
2. Sign in to Vercel
3. Authorize Vercel to access your Git provider
4. Configure your project name
5. Click "Deploy"
6. Wait for deployment to complete
7. Your site is live! 🎉

## Method 2: Manual Deployment via Vercel Dashboard

### Step 1: Push to Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: UnknownDxv Portfolio"

# Add your remote repository
git remote add origin https://github.com/yourusername/your-repo.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your Git provider
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

### Step 3: Configure Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions
5. Wait for SSL certificate to be issued

## Method 3: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow the prompts
```

## Environment Variables

If you add backend functionality (like contact form), you can add environment variables:

1. Go to your project on Vercel
2. Click "Settings" → "Environment Variables"
3. Add your variables:
   - `NEXT_PUBLIC_EMAIL_SERVICE_ID`
   - `NEXT_PUBLIC_EMAIL_TEMPLATE_ID`
   - etc.

## Build Settings (Auto-configured)

Vercel automatically detects these settings for Next.js:

```
Framework Preset: Next.js
Build Command: next build
Output Directory: .next
Install Command: npm install
Development Command: next dev
```

## Continuous Deployment

Once connected to your Git repository:
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments
- Easy rollback to previous deployments

## Performance Optimizations

Your portfolio is already optimized with:
- ✅ Server-side rendering
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ CDN edge caching

## Post-Deployment Checklist

- [ ] Test all sections (Home, About, Skills, Contact)
- [ ] Verify dark/light mode toggle
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify all social links
- [ ] Test smooth scrolling
- [ ] Check loading performance (should be < 2s)
- [ ] Verify SEO metadata

## Monitoring

Vercel provides built-in analytics:
- Visit your project dashboard
- Click "Analytics" to view:
  - Page views
  - Performance metrics
  - Geographic distribution
  - Device breakdown

## Troubleshooting

### Build Fails

1. Check Vercel build logs
2. Ensure all dependencies are in `package.json`
3. Verify no TypeScript errors locally: `npm run build`

### Site Not Updating

1. Check if deployment succeeded
2. Clear browser cache
3. Verify correct branch is deployed

### Performance Issues

1. Check Vercel Analytics
2. Optimize images if needed
3. Review Core Web Vitals

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

## Custom Domain Configuration

### Namecheap/GoDaddy

Add these records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Cloudflare

1. Add domain to Vercel
2. Copy nameservers
3. Update nameservers in Cloudflare
4. Wait for DNS propagation (up to 48 hours)

## SSL Certificate

Vercel automatically provisions SSL certificates for:
- All `.vercel.app` domains
- Custom domains
- Renewal is automatic

Your site will be HTTPS-only with automatic HTTP → HTTPS redirects.

---

**That's it!** Your portfolio is now live and accessible worldwide. 🚀