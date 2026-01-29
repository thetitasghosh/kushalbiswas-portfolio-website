"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-kushal/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-kushal text-sm font-medium tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Creative Designer & Visual Artist
            </motion.span>

            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-foreground">Kushal</span>
              <br />
              <span className="text-kushal">Biswas</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Graphic Designer <span className="text-kushal">|</span> Video
              Editor <span className="text-kushal">|</span> 3D Artist
            </motion.p>

            <motion.p
              className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Transforming ideas into visual masterpieces. I craft compelling
              designs, cinematic videos, and immersive 3D experiences that
              captivate audiences and elevate brands.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" asChild>
                <a href="#portfolio">
                  View Portfolio
                  <ArrowDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#showreel">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Showreel
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-12 mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: "8+", label: "Years Experience" },
                { value: "150+", label: "Projects Completed" },
                { value: "50+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-kushal">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 border-2 border-kushal/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-8 border border-kushal/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Central content */}
              <div className="absolute inset-16 bg-secondary/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-border">
                <div className="text-center p-8 redd size-full rounded-full overflow-hidden">
                  <Image
                    src={"/kushalbiswas-portfolio.jpeg"}
                    width={1080}
                    height={1080}
                    alt=""
                    className="object-cover scale-125 rede size-full"
                  />
                </div>
              </div>

              {/* Floating skill badges */}
              {[
                { label: "Design", angle: 45 },
                { label: "Video", angle: 135 },
                { label: "3D", angle: 205 },
                { label: "Motion", angle: 315 },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="absolute w-20 h-20 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg"
                  style={{
                    top: `${50 + 42 * Math.sin((item.angle * Math.PI) / 180)}%`,
                    left: `${50 + 42 * Math.cos((item.angle * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-xs font-medium text-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-xs mb-2">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
