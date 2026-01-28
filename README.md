# UnknownDxv Portfolio

A modern, fully responsive developer portfolio website for Piyush Gupta (UnknownDxv), built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Animated Components**: Beautiful animations using Framer Motion
- **SEO Optimized**: Comprehensive metadata for better search engine visibility
- **Type-Safe**: Built with TypeScript for better development experience
- **Production Ready**: Optimized for deployment on Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/unknowndxv/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment on Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/unknowndxv/portfolio)

### Manual Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

That's it! Your portfolio will be live in seconds.

## 📝 Customization

### Personal Information

Update the following files to customize your portfolio:

1. **Hero Section** (`components/Hero.tsx`):
   - Change name, titles, and description
   - Update social media links

2. **About Section** (`components/About.tsx`):
   - Modify your bio and highlights

3. **Skills Section** (`components/Skills.tsx`):
   - Add/remove skills
   - Adjust skill levels

4. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Integrate with your preferred email service

5. **Footer** (`components/Footer.tsx`):
   - Update social media links

### Styling

All colors and animations can be customized in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

## 📁 Project Structure

```
unknowndxv-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Skills.tsx
│   └── ThemeProvider.tsx
├── public/
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Sections

1. **Home**: Hero section with animated typing effect and CTA buttons
2. **About**: Professional introduction and highlights
3. **Skills**: Animated skill cards with progress bars
4. **Contact**: Functional contact form (ready for backend integration)
5. **Footer**: Social links and quick navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Scheme

The portfolio supports both light and dark modes with custom color variables:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#9333EA)
- Accent: Pink (#EC4899)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 👤 Author

**Piyush Gupta (UnknownDxv)**
- GitHub: [@unknowndxv](https://github.com/unknowndxv)
- LinkedIn: [Piyush Gupta](https://linkedin.com/in/piyush-gupta)
- Twitter: [@unknowndxv](https://twitter.com/unknowndxv)

## 🙏 Acknowledgments

Built with modern web technologies and best practices for optimal 