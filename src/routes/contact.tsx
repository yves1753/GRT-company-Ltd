import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import {
  ADDRESS_FULL,
  ADDRESS_LINES,
  COMPANY_NAME,
  EMAIL,
  MAP_EMBED_URL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_TEL_PRIMARY,
  PHONE_TEL_SECONDARY,
  SEO_KEYWORDS,
  WHATSAPP_URL,
  WORKING_HOURS,
  WORKING_HOURS_DETAIL,
} from "@/lib/constants";
import { SERVICES } from "@/lib/site-data";
import heroImg from "@/assets/generator-hero.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact GRT Kariakoo — Generator Quotes Dar es Salaam | WhatsApp` },
      {
        name: "description",
        content: "Contact GRT Kariakoo: Wikicha Tower Mikocheni, +255 753 575 555, WhatsApp, email & quotations.",
      },
      { name: "keywords", content: SEO_KEYWORDS },
      { property: "og:title", content: `Contact — ${COMPANY_NAME}` },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="text-foreground">
      <section className="relative pt-28 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Contact</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Visit Our <span className="text-gradient-amber">Dar Office</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wikicha Tower, Mikocheni — call, WhatsApp, or email for Perkins &amp; industrial generator quotations.
          </p>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
          <div className="industrial-frame overflow-hidden">
            <img
              src={heroImg}
              alt="GRT Kariakoo office and generator equipment"
              className="w-full h-64 lg:h-72 object-cover"
              loading="lazy"
            />
            <div className="p-5 border-t border-border">
              <p className="font-semibold">{ADDRESS_LINES[0]}</p>
              <p className="text-sm text-muted-foreground mt-1">{ADDRESS_FULL}</p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="industrial-frame p-8 flex flex-col justify-center items-center text-center border-[#25D366]/40 hover:border-[#25D366] transition-colors"
          >
            <MessageCircle className="h-14 w-14 text-[#25D366] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Chat on WhatsApp</h2>
            <p className="text-muted-foreground text-sm mb-4">Fastest way to get a generator quotation</p>
            <span className="text-lg font-semibold text-[#25D366]">{PHONE_PRIMARY}</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
          <div className="industrial-frame p-8 md:p-10">
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
                  <label className="text-xs uppercase text-muted-foreground mb-2 block">Name</label>
                  <input required className="w-full px-4 py-3 rounded-md bg-input border border-border text-foreground focus:border-primary outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs uppercase text-muted-foreground mb-2 block">Phone</label>
                  <input required className="w-full px-4 py-3 rounded-md bg-input border border-border text-foreground focus:border-primary outline-none" placeholder="+255 ..." />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase text-muted-foreground mb-2 block">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-md bg-input border border-border text-foreground focus:border-primary outline-none" placeholder={EMAIL} />
              </div>
              <div>
                <label className="text-xs uppercase text-muted-foreground mb-2 block">Service</label>
                <select className="w-full px-4 py-3 rounded-md bg-input border border-border text-foreground focus:border-primary outline-none">
                  {SERVICES.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase text-muted-foreground mb-2 block">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-md bg-input border border-border text-foreground focus:border-primary outline-none resize-none" placeholder="Generator capacity, site location..." />
              </div>
              <button type="submit" className="w-full industrial-cta">
                {sent ? "Message sent ✓" : <span className="inline-flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            {[
              { icon: Phone, title: "Primary line", val: PHONE_PRIMARY, href: `tel:${PHONE_TEL_PRIMARY}` },
              { icon: Phone, title: "Secondary line", val: PHONE_SECONDARY, href: `tel:${PHONE_TEL_SECONDARY}` },
              { icon: MessageCircle, title: "WhatsApp", val: "Chat on WhatsApp", href: WHATSAPP_URL, highlight: true },
              { icon: Mail, title: "Email", val: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, title: "Office address", val: ADDRESS_FULL, href: undefined },
              { icon: Clock, title: "Working hours", val: WORKING_HOURS, href: undefined, detail: WORKING_HOURS_DETAIL },
            ].map((c) => (
              <div key={c.title} className={`industrial-frame flex items-start gap-4 p-5 ${c.highlight ? "border-[#25D366]/40" : ""}`}>
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${c.highlight ? "bg-[#25D366]/20" : "bg-primary/10"}`}>
                  <c.icon className={`w-5 h-5 ${c.highlight ? "text-[#25D366]" : "text-primary"}`} />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} className={`font-semibold hover:text-primary break-all ${c.highlight ? "text-[#25D366]" : "text-foreground"}`} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {c.val}
                    </a>
                  ) : (
                    <p className="font-semibold text-sm text-foreground">{c.val}</p>
                  )}
                  {"detail" in c && c.detail && (
                    <ul className="mt-2 space-y-1">
                      {c.detail.map((line) => (
                        <li key={line} className="text-xs text-muted-foreground">{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Find us on Google Maps</h2>
          <p className="text-center text-sm text-muted-foreground mb-6">Wikicha Tower · Mwaikibaki Road · Mikocheni · Dar es Salaam</p>
          <div className="industrial-frame overflow-hidden">
            <iframe title="GRT office location" src={MAP_EMBED_URL} className="w-full h-[420px] border-0" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}
