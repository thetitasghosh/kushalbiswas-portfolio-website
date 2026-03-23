"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Video, Box, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "Visual Design",
    description: "Creating stunning brand identities and marketing materials",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Cinematic editing and captivating motion graphics",
  },
  {
    icon: Box,
    title: "3D Artistry",
    description: "Immersive 3D models, renders, and animations",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description: "Guiding visual strategies that drive results",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left side - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] bg-secondary rounded-2xl overflow-hidden">
              {/* Decorative grid */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px bg-border/50">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-card"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 * i }}
                  />
                ))}
              </div>

              {/* Central content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center p-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-8xl font-bold text-kushal/20 mb-4">
                    1+
                  </div>
                  <div className="text-xl font-medium text-foreground">
                    Years of
                  </div>
                  <div className="text-xl text-muted-foreground">
                    Creative Excellence
                  </div>
                </motion.div>
              </div>

              {/* Floating accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-kushal/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>

            {/* Side decoration */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-36 md:h-60 bg-kushal rounded-full" />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-kushal text-sm font-medium tracking-widest uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Crafting Visual Stories That{" "}
              <span className="text-kushal">Inspire</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Kushal Biswas, a multidisciplinary creative with over 1+
                years of experience in graphic design, video editing, and 3D
                art. My journey began with a passion for visual storytelling and
                has evolved into a career dedicated to helping brands
                communicate through compelling visuals—integrating AI-driven
                workflows to deliver innovative and high-impact results.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-4 bg-card border border-border rounded-lg group hover:border-kushal/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <item.icon className="w-8 h-8 text-kushal mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
