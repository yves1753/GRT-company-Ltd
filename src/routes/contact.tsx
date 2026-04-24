import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GRT Company Ltd" },
      { name: "description", content: "Get in touch with GRT Company Ltd in Dar es Salaam — phone, WhatsApp, email and location." },
      { property: "og:title", content: "Contact GRT Company Ltd" },
      { property: "og:description", content: "Reach our team in Dar es Salaam." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="relative pt-28 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Contact</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's <span className="text-gradient-amber">power up</span> your project.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out for quotes, consultations, or emergency support. Our team responds quickly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-2xl glass"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
              }}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Name</label>
                  <input required className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-primary outline-none transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Phone</label>
                  <input required className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-primary outline-none transition-colors" placeholder="+255 ..." />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-primary outline-none transition-colors" placeholder="you@email.com" />
              </div>
              <div>
                <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Service</label>
                <select className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-primary outline-none transition-colors">
                  <option>Sales</option>
                  <option>Rentals</option>
                  <option>Repairs & Maintenance</option>
                  <option>Installation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-primary outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-amber">
                {sent ? "Message sent ✓" : <>Send Message <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <div className="space-y-4">
            {[
              { icon: Phone, title: "Phone", val: "+255 753 575 5555", sub: "Mon - Sat" },
              { icon: MessageCircle, title: "WhatsApp", val: "+255 753 575 5555", sub: "Quick replies" },
              { icon: Mail, title: "Email", val: "info@grtcompany.co.tz", sub: "24h response" },
              { icon: MapPin, title: "Location", val: "Kariakoo, Dar es Salaam", sub: "Tanzania" },
              { icon: Clock, title: "Business hours", val: "Mon – Fri: 8:00 – 18:00", sub: "Sat: 9:00 – 14:00" },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl glass hover:border-primary/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs tracking-wider uppercase text-muted-foreground">{c.title}</div>
                  <div className="font-semibold">{c.val}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border glass">
          <iframe
            title="GRT Company Ltd location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=39.265%2C-6.823%2C39.295%2C-6.808&layer=mapnik&marker=-6.8156%2C39.2803"
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
