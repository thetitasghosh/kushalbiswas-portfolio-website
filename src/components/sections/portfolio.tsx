"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "graphic" | "video" | "3d";

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nova Brand Identity",
    category: "graphic",
    description:
      "Complete brand identity for a tech startup including logo, color palette, and marketing collateral.",
    tags: ["Branding", "Logo Design", "Print"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Urban Motion",
    category: "video",
    description:
      "Cinematic promotional video for urban lifestyle brand featuring dynamic editing and color grading.",
    tags: ["Video Editing", "Color Grading", "Motion"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 3,
    title: "Celestial Dreams",
    category: "3d",
    description:
      "Abstract 3D art piece exploring cosmic themes with procedural textures and volumetric lighting.",
    tags: ["3D Render", "Blender", "Abstract"],
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: 4,
    title: "Eco Packaging",
    category: "graphic",
    description:
      "Sustainable packaging design for organic food brand with minimalist aesthetic.",
    tags: ["Packaging", "Sustainable", "Minimalist"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 5,
    title: "Product Launch",
    category: "video",
    description:
      "High-energy product launch video with 3D product visualization and motion graphics.",
    tags: ["Commercial", "3D Integration", "VFX"],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 6,
    title: "Architectural Viz",
    category: "3d",
    description:
      "Photorealistic architectural visualization for luxury real estate development.",
    tags: ["Architecture", "Photorealistic", "Interior"],
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: 7,
    title: "Festival Poster Series",
    category: "graphic",
    description:
      "Bold typographic poster series for annual music festival with vibrant colors.",
    tags: ["Poster", "Typography", "Print"],
    color: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    id: 8,
    title: "Documentary Edit",
    category: "video",
    description:
      "Full documentary editing including narrative structure, color grading, and sound design.",
    tags: ["Documentary", "Storytelling", "Post-Production"],
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    id: 9,
    title: "Character Design",
    category: "3d",
    description:
      "Stylized 3D character design and rigging for animated short film project.",
    tags: ["Character", "Rigging", "Animation"],
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

const categories = [
  { id: "all" as const, label: "All Work" },
  { id: "graphic" as const, label: "Graphic Design" },
  { id: "video" as const, label: "Video Editing" },
  { id: "3d" as const, label: "3D Works" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const navigateProject = (direction: "prev" | "next") => {
    if (!selectedProject) return;
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
        : (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <section id="portfolio" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kushal text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-balance">
            Selected <span className="text-kushal">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my best projects across graphic design,
            video editing, and 3D art.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-kushal text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] bg-card border border-border rounded-xl overflow-hidden">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-background/50 backdrop-blur-sm rounded text-xs text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-kushal transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground capitalize">
                        {project.category === "3d"
                          ? "3D Art"
                          : project.category === "graphic"
                            ? "Graphic Design"
                            : "Video Editing"}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-kushal/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-kushal flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-kushal-foreground" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full bg-card border border-border rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                className="absolute top-4 right-4 z-10 p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                onClick={() => setSelectedProject(null)}
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation */}
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                onClick={() => navigateProject("prev")}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                onClick={() => navigateProject("next")}
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image area */}
                <div
                  className={`aspect-square bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}
                >
                  <div className="text-6xl font-bold text-foreground/20">
                    {selectedProject.id.toString().padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-kushal capitalize mb-4">
                    {selectedProject.category === "3d"
                      ? "3D Art"
                      : selectedProject.category === "graphic"
                        ? "Graphic Design"
                        : "Video Editing"}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <Button asChild>
                    <a href="#contact">Discuss Similar Project</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
