# Customization Guide

This guide will help you customize the portfolio to match your personal brand and information.

## 🎨 Quick Customization Checklist

- [ ] Update personal information
- [ ] Add your social media links
- [ ] Update skills and expertise
- [ ] Customize colors and theme
- [ ] Add your contact email
- [ ] Update metadata for SEO
- [ ] Add your projects (optional)

## 📝 Personal Information

### 1. Update Name and Title

**File**: `components/Hero.tsx`

```typescript
// Line ~40
<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
  Piyush Gupta  // ← Change your name here
</span>

// Line ~50
also known as <span className="text-blue-600 dark:text-blue-400 font-semibold">UnknownDxv</span>  // ← Change your alias
```

**File**: `components/Hero.tsx` - Titles array

```typescript
// Line ~11
const titles = [
  "Developer",              // ← Customize your titles
  "Coder",
  "Discord Bot Engineer",
  "Full Stack Developer",
];
```

### 2. Update Bio/Description

**File**: `components/Hero.tsx`

```typescript
// Line ~60
<p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
  Passionate developer specializing in building powerful Discord bots, modern web applications,
  and scalable backend systems. Transforming ideas into elegant, functional code.
  // ← Update with your own description
</p>
```

**File**: `components/About.tsx`

```typescript
// Update the entire about section with your story
<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
  I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Your Name</span>, 
  // ← Tell your story here
</p>
```

## 🔗 Social Media Links

### Update All Social Links

**Files**: `components/Hero.tsx` and `components/Footer.tsx`

```typescript
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
  { icon: MessageCircle, href: "https://discord.com/users/youruserid", label: "Discord" },
];
```

**Replace with your actual links**:
- GitHub: `https://github.com/YOUR_USERNAME`
- LinkedIn: `https://linkedin.com/in/YOUR_PROFILE`
- Twitter/X: `https://twitter.com/YOUR_HANDLE`
- Discord: `https://discord.com/users/YOUR_USER_ID`

## 🎯 Skills Section

### Add/Remove/Update Skills

**File**: `components/Skills.tsx`

```typescript
const skills: Skill[] = [
  { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600", category: "Languages" },
  { name: "TypeScript", level: 90, color: "from-blue-400 to-blue-600", category: "Languages" },
  // Add more skills here
  { name: "Your Skill", level: 85, color: "from-green-400 to-green-600", category: "Category" },
];
```

**Skill Properties**:
- `name`: Skill name
- `level`: Proficiency level (0-100)
- `color`: Tailwind gradient colors
- `category`: Groups skills together

**Available Categories**:
- Languages
- Frameworks
- Frontend
- Backend
- Database
- Tools (add if needed)

### Color Options for Skills

```typescript
// Blue gradient
"from-blue-400 to-blue-600"

// Green gradient
"from-green-400 to-green-600"

// Purple gradient
"from-purple-400 to-purple-600"

// Red gradient
"from-red-400 to-red-600"

// Orange gradient
"from-orange-400 to-orange-600"

// Pink gradient
"from-pink-400 to-pink-600"

// Custom - use any Tailwind colors
"from-COLOR-400 to-COLOR-600"
```

## 📧 Contact Information

### Update Email Address

**File**: `components/Contact.tsx`

```typescript
// Line ~190
<a
  href="mailto:contact@unknowndxv.dev"  // ← Change to your email
  className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
>
  contact@unknowndxv.dev  // ← Change to your email
</a>
```

### Integrate Contact Form Backend

The contact form is ready for backend integration. Here are popular options:

#### Option 1: EmailJS

```bash
npm install @emailjs/browser
```

Update `components/Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    setIsSubmitted(true);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

#### Option 2: Formspree

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setIsSubmitted(true);
  }
  setIsSubmitting(false);
};
```

## 🎨 Color Customization

### Change Primary Colors

**File**: `tailwind.config.ts`

The portfolio uses gradients. To change the main color scheme:

**Find and replace these color combinations**:

Current gradient: `from-blue-600 to-purple-600`

Replace with your preferred colors:
- `from-green-500 to-teal-600` (Green/Teal)
- `from-orange-500 to-red-600` (Orange/Red)
- `from-pink-500 to-purple-600` (Pink/Purple)
- `from-cyan-500 to-blue-600` (Cyan/Blue)

**Files to update**:
1. `components/Hero.tsx`
2. `components/About.tsx`
3. `components/Skills.tsx`
4. `components/Contact.tsx`
5. `components/Navbar.tsx`

### Change Background Colors

**File**: `app/globals.css`

```css
:root {
  --background: #ffffff;  /* Light mode background */
  --foreground: #0a0a0a;  /* Light mode text */
}

.dark {
  --background: #0a0a0a;  /* Dark mode background */
  --foreground: #ededed;  /* Dark mode text */
}
```

## 📱 SEO & Metadata

### Update SEO Information

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Developer Portfolio",  // ← Update
  description: "Your custom description here",  // ← Update
  keywords: ["Your", "Keywords", "Here"],  // ← Update
  authors: [{ name: "Your Name" }],  // ← Update
  creator: "Your Name",  // ← Update
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",  // ← Update
    title: "Your Name - Developer Portfolio",  // ← Update
    description: "Your description",  // ← Update
    siteName: "Your Portfolio",  // ← Update
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Developer Portfolio",  // ← Update
    description: "Your description",  // ← Update
  },
};
```

## 🌟 Advanced Customizations

### Add New Sections

Create a new component in `components/` folder:

```typescript
// components/Projects.tsx
"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      {/* Your projects content */}
    </section>
  );
}
```

Add to `app/page.tsx`:

```typescript
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />  {/* ← Add new section */}
      <Contact />
      <Footer />
    </main>
  );
}
```

### Modify Animations

**File**: Any component file

```typescript
// Change animation duration
transition={{ duration: 0.6 }}  // ← Adjust duration

// Change animation type
initial={{ opacity: 0, y: 50 }}  // ← Start position
animate={{ opacity: 1, y: 0 }}   // ← End position

// Change delay
transition={{ delay: 0.2 }}  // ← Stagger animations
```

### Change Fonts

**File**: `app/layout.tsx`

```typescript
import { Inter, Poppins, Roboto } from 'next/font/google';

const font = Inter({ subsets: ['latin'] });

// Apply in body tag
<body className={font.className}>
```

## 🖼️ Add Images

1. Place images in `public/` folder
2. Import and use in components:

```typescript
import Image from 'next/image';

<Image
  src="/your-image.jpg"
  alt="Description"
  width={500}
  height={500}
/>
```

## ✅ Testing Your Changes

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start
```

Visit `http://localhost:3000` to see your changes.

## 📝 Best Practices

1. **Always test locally** before deploying
2. **Keep backups** of your customizations
3. **Use version control** (git) for changes
4. **Optimize images** before adding them
5. **Test responsiveness** on multiple devices
6. **Check accessibility** with screen readers

## 🚀 Deploy After Customization

After making changes:

```bash
git add .
git commit -m "Customize portfolio"
git push
```

Vercel will automatically deploy your changes!

---

**Need help?** Check the main README.md or create an issue on GitHub.