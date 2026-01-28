"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/unknowndxv",
    color: "hover:text-[var(--accent)]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/piyush-gupta",
    color: "hover:text-[var(--accent)]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/unknowndxv",
    color: "hover:text-[var(--accent)]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contact@unknowndxv.dev",
    color: "hover:text-[var(--accent)]",
  },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 glass rounded-lg border border-[var(--border)] transition-all duration-300 ${link.color}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="font-mono text-sm opacity-60">
              © {new Date().getFullYear()} Piyush Gupta (UnknownDxv). All rights reserved.
            </p>
            <p className="font-mono text-xs opacity-40 mt-2">
              {"Built with Next.js, TypeScript, and Tailwind CSS"}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}