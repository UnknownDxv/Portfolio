"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills: Skill[] = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Discord.js", level: 95 },
    { name: "Discord.py", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "SQLite", level: 75 },
    { name: "Node.js", level: 90 },
    { name: "Next.js", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[var(--accent)]">{"<"}</span>
            Skills
            <span className="text-[var(--accent)]">{" />"}</span>
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-[var(--accent)] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-display text-lg font-semibold">
                  {skill.name}
                </h3>
                <span className="font-mono text-sm text-[var(--accent)]">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--accent)] rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1 * index + 0.3,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass inline-block px-8 py-4 rounded-xl border border-[var(--accent)]">
            <p className="font-mono text-[var(--accent)]">
              {">> Always learning, always growing"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}