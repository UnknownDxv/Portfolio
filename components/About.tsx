"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable solutions",
  },
  {
    icon: Cpu,
    title: "Performance",
    description: "Optimized applications for speed and efficiency",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging cutting-edge technologies",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[var(--accent)]">{"<"}</span>
              About Me
              <span className="text-[var(--accent)]">{" />"}</span>
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-[var(--accent)] mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4 }}
            >
              <div className="glass p-8 rounded-2xl border border-[var(--border)]">
                <p className="text-lg leading-relaxed mb-6">
                  I&apos;m a passionate developer with a deep love for creating
                  innovative digital solutions. My journey in software
                  development has been driven by curiosity and a commitment to
                  continuous learning.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Specializing in <span className="text-[var(--accent)] font-semibold">JavaScript</span>,{" "}
                  <span className="text-[var(--accent)] font-semibold">TypeScript</span>, and{" "}
                  <span className="text-[var(--accent)] font-semibold">Python</span>, I build
                  everything from powerful Discord bots to modern web
                  applications. I thrive on solving complex problems and turning
                  ideas into reality through code.
                </p>
                <p className="text-lg leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. Let&apos;s build
                  something amazing together!
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.6 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] group-hover:bg-opacity-20 transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="opacity-80">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}