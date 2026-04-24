import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — GRT Company Ltd" },
      { name: "description", content: "Established in Dar es Salaam, GRT Company Ltd delivers electrical and power electronics solutions across Tanzania." },
      { property: "og:title", content: "About GRT Company Ltd" },
      { property: "og:description", content: "Our story, mission and values." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Award, title: "Integrity", desc: "Honest dealings, every time." },
  { icon: Heart, title: "Reliability", desc: "Systems and people you can count on." },
  { icon: Target, title: "Commitment", desc: "Going the distance for every client." },
  { icon: Users, title: "Collaboration", desc: "Stronger together, with our teams and clients." },
];

const brands = ["Cummins", "Caterpillar", "Perkins", "Volvo", "Kohler", "FG Wilson", "Yamaha", "Honda"];

function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Our story</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Built in Dar. <span className="text-gradient-amber">Powering Tanzania.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GRT Company Ltd offers a full range of services in Electrical and Power Electronics,
              keeping pace with technological advancements to ensure clients are never limited in solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-3">Company</div>
            <h2 className="text-4xl font-bold mb-6">A team of engineers, technicians and electricians.</h2>
            <p className="text-muted-foreground mb-4">
              Established in Dar es Salaam, Tanzania, the company is dedicated to delivering high-quality solutions —
              including supply, installation, and maintenance of generators and related systems.
            </p>
            <p className="text-muted-foreground">
              With strong project management and collaboration across teams, we consistently provide reliable,
              professional, and exceptional services that exceed client expectations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { v: "10+", l: "Years experience" },
              { v: "500+", l: "Projects delivered" },
              { v: "50+", l: "Skilled engineers" },
              { v: "24/7", l: "Field support" },
            ].map((s) => (
              <div key={s.l} className="p-6 rounded-xl glass">
                <div className="text-4xl font-display font-bold text-gradient-amber mb-1">{s.v}</div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl glass relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              We firmly believe that electricity is the cornerstone of high-quality life. There will be a never-ending need
              for products and services to harness and maximize its full potential and use. In doing so, we will be the
              best-in-class provider of top-notch electrical products and services.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-2xl glass relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/20 blur-3xl" />
            <Heart className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Committed to delivering high-quality products and services that exceed client expectations. We continually
              invest in modern equipment, facilities, and staff training to serve our customers with excellence and
              professionalism — guided by integrity, reliability, commitment, and collaboration.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center p-5 rounded-xl border border-border bg-card/40"
            >
              <v.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <div className="font-semibold mb-1">{v.title}</div>
              <div className="text-xs text-muted-foreground">{v.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-primary uppercase mb-3">Brands we carry</div>
          <h2 className="text-4xl font-bold mb-12">Trusted by the world's best.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl glass font-display font-bold text-xl text-muted-foreground hover:text-primary transition-colors"
              >
                {b}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
