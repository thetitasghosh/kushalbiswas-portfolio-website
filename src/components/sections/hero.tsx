import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Creative Designer
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 text-balance">
          I craft visual stories that connect brands with people
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          I&apos;m Kushal Biswas, a graphic designer specializing in branding,
          visual identity, and digital experiences. Let&apos;s create something
          remarkable together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="#work">View Portfolio</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[160px] bg-transparent"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="absolute md:bottom-2  bottom-1 md:left-[49.4%] left-[48%] right-5 md:-translate-x-1/2 animate-bounce">
        <Link
          href="#work"
          className="text-muted-foreground hover:text-foreground w-fit flex items-center justify-center h-10 p-2.5 border-gray-500 rounded-full py-2.5 border-2 transition-colors"
          aria-label="Scroll to work section"
        >
          {/* <ArrowDown size={24} /> */}
          <div className="w-0.5 bg-black h-4 rounded-full animate-bounce"></div>
        </Link>
      </div>
    </section>
  );
}
