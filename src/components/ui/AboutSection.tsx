import { ShieldCheck, Users, Clock } from "lucide-react";

const stats = [
  { icon: ShieldCheck, label: "Safe Deliveries", value: "50,000+" },
  { icon: Users, label: "Happy Customers", value: "40,000+" },
  { icon: Clock, label: "Years Experience", value: "40+" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-warm">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">About Us</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Your Trusted Moving Partner
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          New India Packers and Movers has been serving Indian families and businesses for over a decade. We treat your belongings like our own — with care, respect, and a commitment to safe handling. From local shifting to pan-India relocation, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center p-8 rounded-xl bg-card shadow-sm border border-border">
            <s.icon className="w-10 h-10 text-primary mb-3" />
            <span className="text-3xl font-extrabold text-foreground">{s.value}</span>
            <span className="text-muted-foreground text-sm mt-1">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
