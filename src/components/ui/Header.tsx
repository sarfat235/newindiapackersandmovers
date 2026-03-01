import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Quote", href: "#quote" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-lg md:text-xl font-heading font-extrabold text-primary-foreground">
            New India <span className="text-primary">Packers & Movers</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+917002510247" className="hidden lg:inline-flex">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </Button>
          </a>
          <button
            className="lg:hidden text-secondary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-secondary border-t border-secondary-foreground/10 animate-fade-in">
          <div className="flex flex-col py-4 px-4 gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 rounded-md text-sm font-medium text-secondary-foreground/80 hover:text-primary hover:bg-secondary-foreground/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
