"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Video, Box, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "From brand identities to marketing materials, I create visually stunning designs that communicate your message effectively and leave a lasting impression.",
    features: [
      "Brand Identity & Logo Design",
      "Marketing Collateral",
      "Social Media Graphics",
      "Print Design & Packaging",
      "UI/UX Design",
    ],
    price: "From $500",
  },
  {
    icon: Video,
    title: "Video Editing & Motion Graphics",
    description:
      "Professional video editing services that transform raw footage into compelling visual stories with seamless transitions, color grading, and dynamic motion graphics.",
    features: [
      "Commercial Video Editing",
      "Social Media Content",
      "Motion Graphics & Animation",
      "Color Grading",
      "Sound Design Integration",
    ],
    price: "From $800",
  },
  {
    icon: Box,
    title: "3D Modeling & Animation",
    description:
      "Creating immersive 3D experiences from concept to completion, including modeling, texturing, lighting, and animation for various applications.",
    features: [
      "Product Visualization",
      "Architectural Rendering",
      "Character Design & Animation",
      "3D Motion Graphics",
      "VFX Integration",
    ],
    price: "From $1,200",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kushal text-sm font-medium tracking-widest uppercase">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-balance">
            What I <span className="text-kushal">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative services tailored to bring your vision to
            life with precision and artistry.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-8 group hover:border-kushal/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-kushal/10 flex items-center justify-center mb-6 group-hover:bg-kushal/20 transition-colors">
                <service.icon className="w-7 h-7 text-kushal" />
              </div>

              {/* Title & Price */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-kushal rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <span className="text-lg font-bold text-kushal">
                  {service.price}
                </span>
                <Button variant="ghost" size="sm" className="group/btn" asChild>
                  <a href="#contact">
                    Get Started
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom project CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            Have a unique project in mind?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              {"Let's"} Discuss Your Custom Project
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
