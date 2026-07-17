import { Link } from "@tanstack/react-router";
import {
  Building2,
  Factory,
  MapPin,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Award,
  Headphones,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BrandBadge } from "@/components/BrandBadge";
import { CLIENT_BRANDS } from "@/lib/brand-logos";
import {
  CAPABILITIES,
  CORE_VALUES,
  COVERAGE_REGIONS,
  GENERATOR_CATEGORIES,
  INDUSTRIES_SERVED,
  MISSION_TEXT,
  OVERVIEW_HIGHLIGHTS,
  OVERVIEW_SPECIALIZATIONS,
  OVERVIEW_SUPPLIES,
  PROJECT_GALLERY,
  PROJECT_SERVICES,
  PROJECTS,
  SECTORS_SERVED,
  SERVICES,
  STATS,
  TIMELINE,
  TRUST_HIGHLIGHTS,
  VISION_TEXT,
  WARRANTY_ITEMS,
} from "@/lib/site-data";
import { COMPANY_SHORT, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { GENERATOR_IMAGES } from "@/lib/generator-images";
import generatorReal from "@/assets/optimized/generator-real.webp";

export function OverviewSection() {
  return (
    <section id="overview" className="py-20 md:py-28 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Company Overview"
          title="Generator Kariakoo Company Ltd"
          subtitle={`${COMPANY_SHORT} is a Tanzania-based supplier of power equipment, construction equipment, and industrial machinery.`}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">We supply</h3>
              <ul className="space-y-2">
                {OVERVIEW_SUPPLIES.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Specializations</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {OVERVIEW_SPECIALIZATIONS.map((item) => (
                  <span key={item} className="glass-card px-3 py-2 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="industrial-frame overflow-hidden">
            <img src={generatorReal} alt="GRT industrial generator and power equipment Tanzania" width={500} height={500} className="w-full h-80 object-cover" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {OVERVIEW_HIGHLIGHTS.map((h, i) => (
            <div
              key={h.title} className="glass-card p-5 group"
            >
              <h.icon className="h-7 w-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-sm mb-2">{h.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <p className="w-full text-center text-xs uppercase tracking-widest text-muted-foreground mb-2">Industries served</p>
          {SECTORS_SERVED.map((s) => (
            <span key={s.label} className="inline-flex items-center gap-2 industrial-frame px-5 py-2.5 text-sm font-semibold">
              <s.icon className="h-4 w-4 text-primary" />
              {s.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {STATS.map((s, i) => (
            <div key={s.label} className="text-center industrial-frame p-5">
              <p className="text-2xl font-bold text-gradient-amber">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BackgroundSection() {
  return (
    <section id="background" className="py-20 md:py-28 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Company Background"
          title="Built for Tanzania's Growing Power Needs"
          subtitle="A story-driven journey from local supplier to nationwide industrial power partner."
        />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year} className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background md:relative md:left-auto md:translate-x-0 md:inline-block md:mb-3" />
                  <p className="text-primary font-bold text-lg">{item.year}</p>
                  <h3 className="text-xl font-bold mt-1 mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
                <div className="industrial-frame p-6 md:p-8 glass-card hidden md:block">
                  <p className="text-4xl font-bold text-primary/20">0{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisionMissionSection() {
  return (
    <section id="vision" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="industrial-frame p-10 md:p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid opacity-30 group-hover:opacity-50 transition-opacity" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 relative">Vision</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 relative">Our Vision</h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed relative">{VISION_TEXT}</p>
        </div>
        <div className="industrial-frame p-10 md:p-12 border-primary/40 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 relative">Mission</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 relative">Our Mission</h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed relative">{MISSION_TEXT}</p>
        </div>
      </div>
    </section>
  );
}

export function ValuesSection() {
  return (
    <section id="values" className="py-20 md:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Core Values" title="What Drives Every Project" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((v, i) => (
            <div
              key={v.title} className="glass-card p-7 group cursor-default"
            >
              <v.icon className="h-9 w-9 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section id="trust" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Trust & Credibility"
          title="Proven Delivery Across Tanzania"
          subtitle="Real projects, certified support, and nationwide coverage you can verify."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {PROJECT_GALLERY.map((photo, i) => (
            <figure key={photo.title} className="industrial-frame overflow-hidden group">
              <img src={photo.image} alt={photo.title} width={900} height={600} className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              <figcaption className="p-3">
                <p className="text-xs font-semibold">{photo.title}</p>
                <p className="text-[10px] text-muted-foreground">{photo.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-8 text-center border-primary/30">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-4xl font-bold text-gradient-amber">3 YEARS</p>
            <p className="text-sm font-semibold mt-2">Comprehensive Warranty</p>
          </div>
          <div className="glass-card p-8 lg:col-span-2">
            <Headphones className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-4">Technical support highlights</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {TRUST_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="industrial-frame p-8 mb-10">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" /> Coverage map — Tanzania
          </h3>
          <p className="text-sm text-muted-foreground mb-6">Nationwide installation, commissioning, and after-sales support.</p>
          <div className="flex flex-wrap gap-2">
            {COVERAGE_REGIONS.map((r) => (
              <span key={r} className="rounded-lg bg-primary/10 border border-primary/25 px-4 py-2 text-sm font-medium">
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {STATS.map((s, i) => (
            <div key={s.label} className="industrial-frame p-6 text-center">
              <p className="text-3xl font-bold text-gradient-amber">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {CLIENT_BRANDS.map((brand) => (
            <BrandBadge key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Products & Services"
          title="Complete Industrial Power Solutions"
          subtitle="Twelve specialized service lines — each with dedicated technical support."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title} className="glass-card p-6 flex flex-col group"
            >
              <s.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{s.desc}</p>
              <Link to="/contact" className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                Get quote <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GeneratorsSection() {
  return (
    <section id="generators" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Generator Categories" title="Power for Every Scale of Operation" />
        <div className="grid md:grid-cols-3 gap-8">
          {GENERATOR_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title} className="industrial-frame overflow-hidden group"
            >
              <img
                src={GENERATOR_IMAGES[cat.id]}
                alt={`${cat.title} — ${cat.range} diesel generator`}
                className="h-52 w-full object-cover object-center bg-black/20 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                width={529}
                height={422}
              />
              <div className="p-6">
                <p className="text-primary text-sm font-bold tracking-wide">{cat.range}</p>
                <h3 className="text-xl font-bold mt-1 mb-2">{cat.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{cat.description}</p>
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Use cases</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {cat.uses.map((u) => (
                    <li key={u}>• {u}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cat.brands.map((b) => (
                    <span key={b} className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-secondary">{b}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link to="/contact" className="flex-1 text-center text-xs font-semibold py-2.5 rounded-md bg-primary text-primary-foreground">
                    Inquiry
                  </Link>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-xs font-semibold py-2.5 rounded-md border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Project Experience"
          title="Premium Industrial Project Showcase"
          subtitle="Generator supply, installation, maintenance, commissioning, and industrial backup power systems."
        />

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {INDUSTRIES_SERVED.map((ind) => (
            <span key={ind} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium flex items-center gap-2">
              {ind === "Mining" ? <Factory className="h-4 w-4 text-primary" /> : <Building2 className="h-4 w-4 text-primary" />}
              {ind}
            </span>
          ))}
        </div>
        <ul className="flex flex-wrap justify-center gap-4 mb-12 text-xs text-muted-foreground">
          {PROJECT_SERVICES.map((s) => (
            <li key={s} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {s}
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className="industrial-frame overflow-hidden group">
              <img src={p.image} alt={p.title} width={800} height={534} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              <div className="p-6">
                <div className="flex justify-between gap-4 mb-2">
                  <h3 className="font-bold text-lg leading-snug">{p.title}</h3>
                  <span className="text-xs text-primary font-bold shrink-0">{p.year}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{p.location}</p>
                <ul className="space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-sm flex gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Capabilities" title="Technical Delivery at Industrial Scale" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.label} className="glass-card p-5 flex items-start gap-3"
            >
              <cap.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm font-medium leading-snug">{cap.label}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {STATS.map((s, i) => (
            <div key={s.label} className="text-center industrial-frame p-5">
              <p className="text-2xl font-bold text-gradient-amber">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WarrantySection() {
  return (
    <section id="warranty" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div >
          <p className="text-7xl md:text-[9rem] font-bold text-gradient-amber leading-none tracking-tighter">3 YEARS</p>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-primary mt-2 mb-8">Warranty</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Nationwide Support You Can Count On</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {WARRANTY_ITEMS.map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm text-muted-foreground glass-card px-4 py-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="industrial-cta">Claim Support</Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="industrial-cta-outline inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialSection() {
  return (
    <section id="media" className="py-20 md:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Social & Video" title="See Our Generators in Action" subtitle="Installation reels, load tests, and mining project footage." />
        <div className="flex justify-center mb-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow GRT Kariakoo on Instagram"
            className="inline-flex items-center gap-3 glass-card px-8 py-4 hover:border-primary/50 transition-colors group"
          >
            <InstagramIcon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-bold text-foreground">@generator_kariakoo_company_ltd</span>
          </a>
        </div>
        <VideoShowcase />
      </div>
    </section>
  );
}

export function HomeCTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center glass-card p-12 md:p-16 border-primary/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Reliable Backup Power?</h2>
        <p className="text-muted-foreground mb-8">Get a quote, WhatsApp our team, or visit our Dar es Salaam office.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="industrial-cta">Get a Quote</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white">
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
          <Link to="/contact" className="industrial-cta-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
