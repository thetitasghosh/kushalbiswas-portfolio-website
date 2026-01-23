import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const skills = [
  "Brand Identity",
  "Logo Design",
  "Typography",
  "Print Design",
  "UI/UX Design",
  "Social Media",
  "Illustration",
  "Motion Graphics",
];

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Figma",
  "After Effects",
  "Premiere Pro",
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative redd rounded-lg overflow-hidden">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted ">
              <Image
                src="/kushalbiswas-portfolio.jpeg"
                alt="Kushal Biswas - Graphic Designer"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-lg hidden lg:block" />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                About Me
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6">
                Designing with purpose and passion
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 8 years of experience in graphic design, I&apos;ve
                  had the privilege of working with brands ranging from
                  ambitious startups to established enterprises. My approach
                  combines strategic thinking with creative execution.
                </p>
                <p>
                  I believe great design isn&apos;t just about
                  aesthetics—it&apos;s about solving problems, telling stories,
                  and creating meaningful connections between brands and their
                  audiences.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-background text-foreground rounded-full border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs font-medium bg-background text-foreground rounded-full border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              className="gap-2  hover:bg-green-500 hover:text-white"
              asChild
            >
              <Link
                href="/Kushal_Biswas_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                // className="pt-2"

                download={"Kushal_Biswas_CV.pdf"}
              >
                <Download size={16} />
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
