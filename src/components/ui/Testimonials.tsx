import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", city: "Delhi → Mumbai", text: "Excellent service! They packed everything so carefully. Not a single item was damaged. Highly recommended!" },
  { name: "Anil Verma", city: "Bangalore → Hyderabad", text: "Very professional team. On-time pickup and delivery. The pricing was very transparent with no hidden charges." },
  { name: "Sunita Patel", city: "Pune → Ahmedabad", text: "We were worried about our grandmother's antique furniture. They handled it with extreme care. Thank you, team!" },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
            <div>
              <p className="font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
