"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arghya Sarkar",
    company: "Story Seeker Dude",
    content:
      "Transformed our brand narrative with a minimalist logo and a high-impact presentation deck that perfectly captures our storytelling essence.",
    avatar: "AS", // Updated to match initials
  },
  {
    id: 2,
    name: "Tapas Chatterjee",
    company: "Nocturne Coffee",
    content:
      "Developed a cohesive visual identity and branding strategy that has significantly elevated our premium coffee brand's market presence.",
    avatar: "TC",
  },
  {
    id: 3,
    name: "Anupam Majumder",
    company: "Anubit Technologies",
    content:
      "Expertly handled our in-house design and video editing, delivering sleek, tech-focused visuals that resonate with our corporate audience.",
    avatar: "AM",
  },
  {
    id: 4,
    name: "Disha Biswas",
    company: "Krishna's Creations",
    content:
      "A creative powerhouse for our branding needs. The logo and visual assets created were both elegant and perfectly aligned with our artistic vision.",
    avatar: "DB",
  },
  {
    id: 5, // Corrected ID sequence
    name: "Abhinava Chowdhury",
    company: "Bakemills",
    content:
      "Produced stunning, print-ready graphics that brought our packaging to life. Exceptional attention to detail and color precision.",
    avatar: "AC",
  },
  {
    id: 6,
    name: "Titas Ghosh",
    company: "Exelth",
    content:
      "Brought our healthcare platform to life through dynamic motion graphics and high-end video editing. A master of visual engagement.",
    avatar: "TG",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const navigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
    } else {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section id="testimonials" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kushal text-sm font-medium tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-balance">
            Client <span className="text-kushal">Feedback</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {"Don't"} just take my word for {"it—here's"} what clients have to
            say about working with me.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {/* Main testimonial */}
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 min-h-[320px]">
            {/* Quote icon */}
            <Quote className="absolute top-8 right-8 w-12 h-12 text-kushal/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  {`"${testimonials[currentIndex].content}"`}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-kushal/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-kushal">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {/* {testimonials[currentIndex].role} at{" "} */}
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button
                type="button"
                className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                onClick={() => navigate("prev")}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                onClick={() => navigate("next")}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-8 left-8 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={testimonials[index].id}
                  type="button"
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-kushal" : "bg-border"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Client logos */}
          {/* <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-50"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.5 } : {}}
            transition={{ delay: 0.4 }}
          >
            {["TechFlow", "Velocity", "Luxe", "MediaPulse", "Apex", "Nova"].map(
              (company) => (
                <div
                  key={company}
                  className="text-lg font-bold text-muted-foreground"
                >
                  {company}
                </div>
              ),
            )}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
