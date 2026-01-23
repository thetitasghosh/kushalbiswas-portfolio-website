"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const categories = [
  "All",
  "Branding",
  "Logo Design",
  "Social Media",
  "UI/UX",
  "Print Design",
]

const projects = [
  {
    id: 1,
    title: "Meridian Coffee Co.",
    category: "Branding",
    description: "Complete brand identity for artisan coffee roasters",
    image: "/portfolio/meridian-coffee.jpg",
    color: "bg-amber-100",
  },
  {
    id: 2,
    title: "Vertex Tech",
    category: "Logo Design",
    description: "Modern logomark for innovative tech startup",
    image: "/portfolio/vertex-tech.jpg",
    color: "bg-slate-200",
  },
  {
    id: 3,
    title: "Bloom Wellness",
    category: "Social Media",
    description: "Social media campaign for wellness brand",
    image: "/portfolio/bloom-wellness.jpg",
    color: "bg-emerald-100",
  },
  {
    id: 4,
    title: "FinFlow App",
    category: "UI/UX",
    description: "Mobile banking app interface design",
    image: "/portfolio/finflow-app.jpg",
    color: "bg-blue-100",
  },
  {
    id: 5,
    title: "Artisan Bakery",
    category: "Print Design",
    description: "Menu and packaging design for local bakery",
    image: "/portfolio/artisan-bakery.jpg",
    color: "bg-orange-100",
  },
  {
    id: 6,
    title: "Nova Cosmetics",
    category: "Branding",
    description: "Luxury cosmetics brand identity system",
    image: "/portfolio/nova-cosmetics.jpg",
    color: "bg-pink-100",
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Featured Projects
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "kushalgreen" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer"
            >
              <div
                className={`relative aspect-[4/3] rounded-lg overflow-hidden ${project.color} mb-4`}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                    <ArrowUpRight size={18} className="text-foreground" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="text-lg font-medium text-foreground group-hover:text-green-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
