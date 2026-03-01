import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt="Moving truck with packed goods in India"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-hero" />

    <div className="relative z-10 container-narrow px-4 text-center py-32 md:py-40">
      <p className="text-primary font-semibold text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in-up">
        Safe • Fast • Affordable
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        India's Trusted<br />
        <span className="text-gradient-saffron">Packers & Movers</span>
      </h1>
      <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Reliable household & office relocation services across India. Door-to-door delivery with 100% safe packing guaranteed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <a href="tel:+917002510247">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base gap-2 w-full sm:w-auto px-8">
            <Phone className="w-5 h-5" /> Call Now
          </Button>
        </a>
        <a href="#quote">
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10 font-bold text-base gap-2 w-full sm:w-auto px-8">
            <FileText className="w-5 h-5" /> Get Free Quote
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
