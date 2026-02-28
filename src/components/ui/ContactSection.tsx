import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-gradient-navy">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
          Get in Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { icon: Phone, label: "Call Us", value: "+91 7002510247", href: "tel:+917002510247" },
          { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/917002510247?text=Hi%2C%20I%20need%20a%20moving%20quote" },
          { icon: Mail, label: "Email", value: "newindiaroadways1983@gmail.com", href: "mailto:newindiaroadways1983@gmail.com" },
          { icon: MapPin, label: "Service Areas", value: "All Major Indian Cities", href: "#" },
        ].map((c) => (
          <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/40 transition-colors">
            <c.icon className="w-8 h-8 text-primary mb-3" />
            <span className="text-primary-foreground font-bold text-sm">{c.label}</span>
            <span className="text-primary-foreground/70 text-xs mt-1">{c.value}</span>
          </a>
        ))}
      </div>

      {/* WhatsApp floating button */}
      <div className="text-center">
        <a href="https://wa.me/917002510247?text=Hi%2C%20I%20need%20a%20moving%20quote" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-india-green text-accent-foreground hover:bg-india-green/90 font-bold text-base gap-2 px-8">
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
