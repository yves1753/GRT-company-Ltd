import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeroScene } from "@/components/HeroScene";
import { Wrench, ShoppingCart, Settings, Cog, ArrowRight, ShieldCheck, Award, Clock, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Generator Kariakoo Ltd — Powering Tanzania" },
      { name: "description", content: "Premier supplier of generators and power electronics in Dar es Salaam. Sales, rentals, installation, and 24/7 maintenance." },
      { property: "og:title", content: "Generator Kariakoo Ltd — Powering Tanzania" },
      { property: "og:description", content: "Premier supplier of generators and power electronics in Dar es Salaam." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: ShoppingCart, title: "Sales", desc: "Industrial & residential generators from leading global brands." },
  { icon: Cog, title: "Rentals", desc: "Short and long-term rental fleet for events, sites and emergencies." },
  { icon: Wrench, title: "Repairs", desc: "Expert diagnostics and overhauls by certified technicians." },
  { icon: Settings, title: "Installation", desc: "Turnkey installation, ATS, synchronisation and commissioning." },
];

const reasons = [
  { icon: ShieldCheck, title: "Reliability First", desc: "Tested systems engineered for Tanzania's toughest conditions." },
  { icon: Award, title: "Certified Engineers", desc: "Decades of combined experience in power electronics." },
  { icon: Clock, title: "24/7 Support", desc: "Rapid response, anywhere in the country." },
  { icon: Users, title: "Trusted Partner", desc: "Hundreds of clients across industry, retail and homes." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 opacity-90">
          <HeroScene />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-widest uppercase text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Powering Tanzania since day one
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Energy That <span className="text-gradient-amber">Never</span> Sleeps.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Generator Kariakoo Ltd delivers premium electrical and power electronics solutions —
              sales, rentals, repairs and installation across Dar es Salaam and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-amber">
                Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border glass font-semibold hover:border-primary transition-colors">
                Talk To An Engineer
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md">
              {[
                { v: "500+", l: "Installations" },
                { v: "24/7", l: "Support" },
                { v: "10+", l: "Years" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-display font-bold text-gradient-amber">{s.v}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-3">What we do</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Full-spectrum power solutions.</h2>
            <p className="text-muted-foreground">From single-phase home backups to industrial-scale installations, we cover every link in the power chain.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-xl glass hover:border-primary/50 transition-all hover:-translate-y-1 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 px-6 bg-card/30 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-3">Why choose us</div>
            <h2 className="text-4xl md:text-5xl font-bold">Engineered for excellence.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-amber-glow flex items-center justify-center mb-4 animate-float">
                  <r.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden p-12 md:p-20 text-center glass"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to <span className="text-gradient-amber">power up</span>?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a tailored quote for your project today. Our engineers respond within hours.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-amber animate-pulse-glow">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
