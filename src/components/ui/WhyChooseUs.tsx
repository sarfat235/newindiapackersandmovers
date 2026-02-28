import { ShieldCheck, Users, Clock, IndianRupee, MapPin } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "100% Safe Packing", desc: "Multi-layer packing with bubble wrap, thermocol, and corrugated sheets." },
  { icon: Users, title: "Trained Staff", desc: "Experienced and well-trained movers who handle your items with utmost care." },
  { icon: Clock, title: "On-time Delivery", desc: "We value your time. Guaranteed delivery as per schedule." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges. Best rates in the industry." },
  { icon: MapPin, title: "Pan-India Service", desc: "We operate across all major Indian cities and towns." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-gradient-navy">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
          The New India Advantage
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="flex items-start gap-4 p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-bold text-primary-foreground mb-1">{r.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
