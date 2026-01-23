import {
  Palette,
  PenTool,
  Layout,
  Share2,
  Video,
  Monitor,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Branding",
    description:
      "Complete brand identity systems including visual guidelines, color palettes, and brand strategy.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description:
      "Distinctive logomarks and wordmarks that capture your brand's essence and stand the test of time.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Engaging social media content, templates, and campaign designs that drive engagement.",
  },
  {
    icon: Monitor,
    title: "UI Design",
    description:
      "User-centered interface designs for web and mobile applications that delight users.",
  },
  {
    icon: Layout,
    title: "Print Design",
    description:
      "Marketing collateral, packaging, editorial design, and other print materials.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing and motion graphics to bring your stories to life.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            What I Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, I offer comprehensive design services
            tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
