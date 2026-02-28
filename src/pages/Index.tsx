import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import ServicesSection from "@/components/ui/ServicesSection";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import QuoteForm from "@/components/ui/QuoteForm";
import Testimonials from "@/components/ui/Testimonials";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <QuoteForm />
      <Testimonials />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppFab />
  </>
);

export default Index;
