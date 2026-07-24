import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FleetImage } from "@/components/fleet/FleetImage";
import { SectionHeading } from "@/components/SectionHeading";
import { COMPANY_NAME, WHATSAPP_URL } from "@/lib/constants";
import { FLEET } from "@/lib/fleetData";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: `Drilling Rig Fleet | ${COMPANY_NAME}` },
      {
        name: "description",
        content:
          "Explore GRT Kariakoo Company Limited's drilling rig fleet for mining, water-well, construction, and industrial projects.",
      },
      { property: "og:title", content: `Drilling Rig Fleet | ${COMPANY_NAME}` },
    ],
  }),
  component: Fleet,
});

function Fleet() {
  return (
    <div className="text-foreground">
      <section className="relative overflow-hidden px-6 pb-14 pt-28">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            eyebrow="Drilling Equipment"
            title="Our Rig Fleet"
            subtitle="A versatile fleet ready for mining, water-well, construction, and industrial drilling projects across Tanzania."
          />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET.map((rig) => (
            <article
              key={rig.id}
              id={rig.id}
              className="group industrial-frame overflow-hidden transition-colors hover:border-primary/40"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <FleetImage
                  rig={rig}
                  className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="border-t border-border p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Drilling rig</p>
                <h2 className="text-xl font-bold">{rig.name}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Need the right rig for your project?</h2>
        <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
          Tell us about your site, drilling depth, and timeline. We will help match the equipment to the job.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="industrial-cta inline-flex items-center gap-2">
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="industrial-cta-outline inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp us
          </a>
        </div>
      </section>
    </div>
  );
}
