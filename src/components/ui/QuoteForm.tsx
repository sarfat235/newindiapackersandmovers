import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const QuoteForm = () => {
  const [form, setForm] = useState({
    name: "", phone: "", from: "", to: "", date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.from || !form.to) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Thank you! We'll call you shortly with a free quote.");
    setForm({ name: "", phone: "", from: "", to: "", date: "" });
  };

  return (
    <section id="quote" className="section-padding bg-warm">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Free Estimate</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Get a Free Moving Quote
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">Fill in the details below and our team will reach out within 30 minutes.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8 space-y-5">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="Rajesh Kumar" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="+91 9998887776" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="from">From City *</Label>
                <Input id="from" placeholder="Mumbai" value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} maxLength={50} />
              </div>
              <div>
                <Label htmlFor="to">To City *</Label>
                <Input id="to" placeholder="Delhi" value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} maxLength={50} />
              </div>
            </div>
            <div>
              <Label htmlFor="date">Preferred Move Date</Label>
              <Input id="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base">
              Get Free Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
