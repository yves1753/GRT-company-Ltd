import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import heroImg from "@/assets/generator-hero.png";
import { COMPANY_SHORT, WHATSAPP_URL } from "@/lib/constants";
import {
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_TRUST_BADGES,
  STATS,
} from "@/lib/site-data";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function HeroSection() {
  return (
    <section className="relative min-h-[min(100svh,900px)] flex items-center overflow-hidden isolate">
      {/* Background */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_240/0.95)] via-[oklch(0.14_0.02_240/0.75)] to-[oklch(0.14_0.02_240/0.4)]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      {/* Content — always visible, no opacity-0 animations */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-28 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 hero-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary mb-5">
              {COMPANY_SHORT}
            </p>

            <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight text-white">
              {HERO_HEADLINE}
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
              {HERO_SUBHEADLINE}
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              {HERO_TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-3 rounded-lg border border-white/15 bg-black/40 backdrop-blur-md px-4 py-3 text-sm font-semibold text-white"
                >
                  <span className="text-primary shrink-0">✓</span>
                  {badge}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
              >
                Get a Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-8 py-4 text-base font-semibold text-white hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/70 px-8 py-4 text-base font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                <Phone className="h-5 w-5" /> Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hero-fade-in-delay">
            <div className="rounded-xl border border-white/15 bg-black/50 backdrop-blur-md p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-primary mb-5 font-semibold">
                Trusted nationwide
              </p>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-xs text-white/60">
                Dar es Salaam · Geita · Chunya · Mwanza · Zanzibar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
