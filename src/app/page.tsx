import { Navigation } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Skills } from "@/components/sections/skills";
// import { Showreel } from "@/components/sections/showreel";
// import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { CustomCursor } from "@/components/sections/custom-cursor";
import { ScrollProgress } from "@/components/sections/scroll-progress";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        {/* <Showreel /> */}
        {/* <Services /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
