import { Home, Building2, Package, Truck, Car, PackageOpen } from "lucide-react";

const services = [
  { icon: Home, title: "Home Shifting", desc: "Complete household relocation with safe packing of furniture, electronics, and kitchenware." },
  { icon: Building2, title: "Office Relocation", desc: "Seamless office moves with minimal downtime. We handle IT equipment, files, and furniture." },
  { icon: Package, title: "Packing & Unpacking", desc: "Professional packing using high-quality materials. Unpacking and setup at your new location." },
  { icon: PackageOpen, title: "Loading & Unloading", desc: "Trained team for careful loading and unloading of heavy items, appliances, and fragile goods." },
  { icon: Car, title: "Vehicle Transport", desc: "Safe car and bike transportation across India using enclosed carriers." },
  { icon: Truck, title: "Door-to-Door Delivery", desc: "End-to-end service from pickup at your doorstep to delivery at your new home or office." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          What We Offer
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
