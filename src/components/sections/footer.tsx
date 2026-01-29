import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-semibold text-foreground">
              Kushal Biswas
            </Link>
            <p className="text-sm text-muted-foreground mt-1 w-80">
              Graphic Designer, Video Editor & 3D Artist creating visual
              experiences that inspire and captivate.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="#portfolio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Kushal Biswas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
