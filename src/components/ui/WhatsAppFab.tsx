import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => (
  <a
    href="https://wa.me/917002510247?text=Hi%2C%20I%20need%20a%20moving%20quote"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-india-green flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-accent-foreground" />
  </a>
);

export default WhatsAppFab;
