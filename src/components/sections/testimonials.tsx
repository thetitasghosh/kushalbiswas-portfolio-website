import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Kushal transformed our brand identity completely. The attention to detail and creative vision exceeded our expectations. Our new look has received incredible feedback from customers.",
    author: "Sarah Chen",
    role: "CEO",
    company: "Meridian Coffee Co.",
  },
  {
    quote:
      "Working with Kushal was an absolute pleasure. They understood our vision immediately and delivered designs that perfectly captured our brand essence. Highly recommended!",
    author: "Michael Torres",
    role: "Founder",
    company: "Vertex Tech",
  },
  {
    quote:
      "The social media campaign Kushal designed for us drove a 300% increase in engagement. Their strategic approach combined with stunning visuals made all the difference.",
    author: "Emma Rodriguez",
    role: "Marketing Director",
    company: "Bloom Wellness",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <Quote className="w-10 h-10  mb-6 text-green-500" />
              <blockquote className="text-foreground leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
