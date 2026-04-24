import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GeneratorScene } from "@/components/GeneratorScene";
import { ShoppingCart, Cog, Wrench, Settings, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GRT Company Ltd" },
      { name: "description", content: "Generator sales, rentals, repairs, maintenance and installation services across Tanzania." },
      { property: "og:title", content: "Services — GRT Company Ltd" },
      { property: "og:description", content: "Comprehensive generator and power electronics services." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: ShoppingCart,
    title: "Sales",
    tagline: "Premium generators, delivered.",
    desc: "We supply diesel and petrol generators ranging from 5 kVA home units to 2,000 kVA industrial sets — sourced from globally trusted manufacturers.",
    features: ["Single & three phase units", "Silent & open-frame options", "Authentic parts & warranty", "Financing available"],
  },
  {
    icon: Cog,
    title: "Rentals",
    tagline: "Power on demand.",
    desc: "From weekend events to multi-month construction sites, our rental fleet keeps your operations running without capital outlay.",
    features: ["Daily, weekly & monthly", "Delivery & setup included", "Fuel management", "Standby & prime power"],
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    tagline: "Maximise uptime.",
    desc: "Preventive maintenance contracts and on-call repair services to keep your generators in peak condition all year round.",
    features: ["Scheduled servicing", "Emergency callouts", "Genuine spare parts", "Performance reporting"],
  },
  {
    icon: Settings,
    title: "Installation",
    tagline: "Turnkey power systems.",
    desc: "Complete installation including foundations, ATS panels, synchronisation, exhaust systems and commissioning.",
    features: ["Site survey & design", "ATS & switchgear", "Synchronisation", "Testing & commissioning"],
  },
];

function Services() {
  return (
    <div>
      <section className="relative pt-24 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Our services</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Power. <span className="text-gradient-amber">Delivered.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              From sales and rentals to repairs and full installations — we are your end-to-end partner for power electronics in Tanzania.
            </p>
          </motion.div>
          <div className="h-[400px] lg:h-[500px]">
            <GeneratorScene />
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative grid md:grid-cols-[auto_1fr_auto] gap-8 items-center p-8 md:p-10 rounded-2xl glass hover:border-primary/40 transition-all"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-amber-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                <s.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs tracking-[0.2em] uppercase text-primary mb-1">{s.tagline}</div>
                <h3 className="text-3xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-4 max-w-2xl">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 max-w-lg">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-6xl font-display font-bold text-muted/30 hidden md:block">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a custom solution?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Every project is unique. Let our engineers design the right system for you.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-amber">
          Get in touch <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
