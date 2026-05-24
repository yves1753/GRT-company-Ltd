import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import {
  OverviewSection,
  BackgroundSection,
  VisionMissionSection,
  ValuesSection,
  TrustSection,
  ServicesSection,
  GeneratorsSection,
  ProjectsSection,
  CapabilitiesSection,
  WarrantySection,
  SocialSection,
  HomeCTASection,
} from "@/components/home/HomeSections";
import { SEO_HOME_DESCRIPTION, SEO_HOME_TITLE, SEO_KEYWORDS } from "@/lib/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_HOME_TITLE },
      { name: "description", content: SEO_HOME_DESCRIPTION },
      { name: "keywords", content: SEO_KEYWORDS },
      { property: "og:title", content: SEO_HOME_TITLE },
      { property: "og:description", content: SEO_HOME_DESCRIPTION },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="text-foreground">
      <HeroSection />
      <OverviewSection />
      <BackgroundSection />
      <VisionMissionSection />
      <ValuesSection />
      <TrustSection />
      <ServicesSection />
      <GeneratorsSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <WarrantySection />
      <SocialSection />
      <HomeCTASection />
    </div>
  );
}
