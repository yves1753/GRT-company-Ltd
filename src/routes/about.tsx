import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BrandBadge } from "@/components/BrandBadge";
import { CLIENT_BRANDS } from "@/lib/brand-logos";
import {
  CORE_VALUES,
  COVERAGE_REGIONS,
  STATS,
  TIMELINE,
  WHY_CHOOSE_GRT,
} from "@/lib/site-data";
import { COMPANY_NAME, COMPANY_SHORT, SEO_KEYWORDS, WHATSAPP_URL } from "@/lib/constants";
import generatorReal from "@/assets/generator-real.png";
import { CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About GRT Kariakoo — Perkins Generators & Mining Power Tanzania` },
      {
        name: "description",
        content:
          "Who is GRT Kariakoo? 12+ years supplying Perkins & Cummins generators in Tanzania. 3-year warranty, nationwide coverage.",
      },
      { name: "keywords", content: SEO_KEYWORDS },
      { property: "og:title", content: `About — ${COMPANY_NAME}` },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="text-foreground">
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">About GRT</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Who We Are &amp; <span className="text-gradient-amber">Why Choose Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {COMPANY_SHORT} is a Tanzania-based industrial power solutions company. We supply, install, and support generators with real field experience.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who is GRT Kariakoo?</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Based at Wikicha Tower, Mikocheni, Dar es Salaam, we are Generator Kariakoo Company Ltd — specialists in diesel generators, transformers, ATS systems, water pumps, and industrial machinery.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              From Kariakoo we provide fast equipment access for commercial clients in Dar es Salaam, while our technical teams deploy to mining sites in Geita, Chunya, Kahama, and industrial projects in Mwanza and Zanzibar.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our engineers handle everything from 5kVA home units to 500kVA+ mining installations — including load testing, synchronization, commissioning, and operator training.
            </p>
          </div>
          <div className="industrial-frame overflow-hidden">
            <img src={generatorReal} alt="GRT Kariakoo generator equipment Dar es Salaam" className="w-full h-80 object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Why GRT" title="Why Customers Choose GRT" />
          <div className="grid sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_GRT.map((item) => (
              <div key={item.title} className="industrial-frame p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading align="left" eyebrow="Experience" title="12+ Years in the Field" />
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="industrial-frame p-5 text-center">
                  <p className="text-2xl font-bold text-gradient-amber">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Coverage" title="Nationwide Service Areas" />
            <div className="flex flex-wrap gap-2">
              {COVERAGE_REGIONS.map((r) => (
                <span key={r} className="rounded-md border border-border px-3 py-2 text-sm">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Warranty & Support" title="3-Year Warranty & After-Sales Service" subtitle="We stay with you after installation — not just at the point of sale." />
          <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "3-year comprehensive warranty on eligible equipment",
              "24–48 hour technical support response",
              "Preventive maintenance contracts",
              "Emergency repairs & genuine spare parts",
              "Load testing & ATS integration support",
              "Operator training on commissioning",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Timeline" title="Our Growth Story" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((t) => (
              <div key={t.year} className="industrial-frame p-8">
                <p className="text-primary font-bold mb-2">{t.year}</p>
                <h3 className="font-semibold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Values" title="What We Stand For" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {CORE_VALUES.map((v) => (
              <div key={v.title} className="industrial-frame p-6 text-center">
                <v.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
          <SectionHeading eyebrow="Brands" title="Equipment We Supply & Service" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CLIENT_BRANDS.map((brand) => (
              <BrandBadge key={brand.name} brand={brand} variant="card" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center pb-24">
        <div className="max-w-xl mx-auto industrial-frame p-10">
          <h2 className="text-2xl font-bold mb-4">Ready to work with GRT?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="industrial-cta">Get a Quote</Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
