import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/site-data";
import { COMPANY_NAME, SEO_KEYWORDS, WHATSAPP_URL } from "@/lib/constants";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Generator Services Tanzania — Perkins, ATS, Mining | ${COMPANY_NAME}` },
      { name: "description", content: "Perkins & Cummins generator sales, ATS installation, mining power, rentals & maintenance across Tanzania." },
      { name: "keywords", content: SEO_KEYWORDS },
      { property: "og:title", content: `Services — ${COMPANY_NAME}` },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="text-foreground">
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeading
            align="left"
            eyebrow="Products & Services"
            title="Complete Industrial Power Solutions"
            subtitle="From 5kVA residential units to 500kVA+ mining installations — sales, installation, ATS, maintenance, and emergency support."
          />
        </div>
      </section>

      <section className="py-8 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="industrial-frame p-8 flex gap-5 hover:border-primary/40 transition-colors">
              <s.icon className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center border-t border-border pb-24">
        <h2 className="text-3xl font-bold mb-4">Request a quotation</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Mining, hospitality, warehouses, construction — we design the right backup power system.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="industrial-cta inline-flex items-center gap-2">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="industrial-cta-outline">
            WhatsApp quote
          </a>
        </div>
      </section>
    </div>
  );
}
