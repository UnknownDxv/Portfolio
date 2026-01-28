# 🚀 Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Extract & Navigate

```bash
# Extract the portfolio folder
# Navigate into it
cd unknowndxv-portfolio
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Customize Your Portfolio

### Quick Edits (5 minutes):

1. **Your Name**: `components/Hero.tsx` (Line 40)
2. **Social Links**: `components/Hero.tsx` (Lines 65-70)
3. **Email**: `components/Contact.tsx` (Line 190)
4. **Bio**: `components/About.tsx` (Lines 40-60)

### Full Customization Guide

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for complete instructions.

## Step 5: Deploy to Vercel

### Option A: One Command

```bash
npm install -g vercel
vercel --prod
```

### Option B: Via GitHub

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Go to vercel.com and import your repo
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment options.

## 🎯 What You Get

✅ Modern, responsive design  
✅ Dark/light mode toggle  
✅ Smooth animations  
✅ Mobile-friendly navigation  
✅ SEO optimized  
✅ Ready for Vercel deployment  
✅ TypeScript for type safety  
✅ Professional portfolio sections:
  - Hero with typing animation
  - About with highlights
  - Skills with progress bars
  - Contact form
  - Social links
  - Footer

## 📱 Test Responsiveness

Open DevTools (F12) and test:
- Mobile (375px)
- Tablet (768px)
- Desktop (1920px)

## 🎨 Color Themes

The portfolio comes with blue-purple gradient theme.

To change colors, see `CUSTOMIZATION.md` → Color Customization section.

## 🐛 Troubleshooting

### Port already in use?

```bash
npm run dev -- -p 3001
```

### Build errors?

```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run dev
```

### TypeScript errors?

Most can be safely ignored during development. For production:

```bash
npm run build
```

Fix any errors that appear.

## 📚 Project Structure

```
unknowndxv-portfolio/
├── app/
│   ├── globals.css          → Global styles
│   ├── layout.tsx           → Root layout + SEO
│   └── page.tsx             → Main page
├── components/
│   ├── About.tsx            → About section
│   ├── Contact.tsx          → Contact form
│   ├── Footer.tsx           → Footer with links
│   ├── Hero.tsx             → Hero with animations
│   ├── Navbar.tsx           → Navigation bar
│   ├── Skills.tsx           → Skills showcase
│   └── ThemeProvider.tsx    → Dark/light mode
├── public/                  → Static assets
├── CUSTOMIZATION.md         → Full customization guide
├── DEPLOYMENT.md            → Deployment guide
└── README.md                → Main documentation
```

## 🎯 Next Steps

1. ✅ Run the portfolio locally
2. ✅ Customize with your information
3. ✅ Test all features
4. ✅ Deploy to Vercel
5. ✅ Share your portfolio!

## 💡 Tips

- Use `Ctrl+C` to stop the dev server
- Changes auto-reload in development
- Test contact form before deploying
- Check mobile view regularly
- Deploy early, deploy often

## 🆘 Need Help?

- Read [README.md](./README.md)
- Check [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- Review [DEPLOYMENT.md](./DEPLOYMENT.md)
- Open an issue on GitHub

---

**You're all set!** Happy coding! 🎉