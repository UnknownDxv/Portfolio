import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Piyush Gupta (UnknownDxv) - Developer Portfolio",
  description: "Full-stack developer specializing in JavaScript, TypeScript, Python, Discord Bots, and Web Development. Explore my portfolio and projects.",
  keywords: ["Piyush Gupta", "UnknownDxv", "Developer", "Discord Bots", "Web Development", "JavaScript", "TypeScript", "Python"],
  authors: [{ name: "Piyush Gupta" }],
  creator: "Piyush Gupta (UnknownDxv)",
  openGraph: {
    type: "website",
    title: "Piyush Gupta (UnknownDxv) - Developer Portfolio",
    description: "Full-stack developer specializing in JavaScript, TypeScript, Python, Discord Bots, and Web Development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Gupta (UnknownDxv) - Developer Portfolio",
    description: "Full-stack developer specializing in JavaScript, TypeScript, Python, Discord Bots, and Web Development.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00ff88",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}