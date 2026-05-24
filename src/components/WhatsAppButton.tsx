import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-white font-semibold text-sm shadow-xl animate-pulse-glow hover:scale-105 hover:bg-[#20bd5a] transition-all max-sm:pl-3 max-sm:pr-3"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="max-sm:sr-only">Chat on WhatsApp</span>
    </a>
  );
}
