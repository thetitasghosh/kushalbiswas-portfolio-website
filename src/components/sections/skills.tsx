"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Design Tools",
    skills: [
      { name: "Adobe Photoshop", level: 95 },
      { name: "Adobe Illustrator", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Adobe InDesign", level: 80 },
    ],
  },
  {
    title: "Video & Motion",
    skills: [
      { name: "Premiere Pro", level: 92 },
      { name: "After Effects", level: 88 },
      { name: "DaVinci Resolve", level: 75 },
      { name: "Final Cut Pro", level: 70 },
    ],
  },
  {
    title: "3D Software",
    skills: [
      { name: "Blender", level: 90 },
      { name: "Cinema 4D", level: 82 },
      { name: "3ds Max", level: 65 },
      { name: "ZBrush", level: 60 },
    ],
  },
];

const toolLogos = [
  "Photoshop",
  "Illustrator",
  "Premiere",
  "After Effects",
  "Blender",
  "Figma",
  "Cinema 4D",
  "DaVinci",
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kushal text-sm font-medium tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-balance">
            Skills & <span className="text-kushal">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mastery of industry-leading software combined with years of hands-on
            experience.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-kushal rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool logos marquee */}
        <motion.div
          className="relative overflow-hidden py-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-12 animate-marquee">
            {[...toolLogos, ...toolLogos].map((tool, index) => (
              <div
                key={`${tool}-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-card border border-border rounded-lg"
              >
                <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-kushal/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 blur-3xl rounded-full" />
    </section>
  );
}
