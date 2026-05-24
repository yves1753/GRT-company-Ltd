import hotelSolarInstallation from "@/assets/projects/hotel-solar-installation.png";

import {
  Zap,
  Droplets,
  HardHat,
  Wrench,
  Package,
  Truck,
  Gauge,
  GitMerge,
  Cable,
  ClipboardCheck,
  Sun,
  Shield,
  Award,
  Users,
  Scale,
  Clock,
  Target,
  Building2,
  Home,
  Factory,
  Landmark,
  MapPin,
} from "lucide-react";

export const HERO_HEADLINE =
  "Reliable Power Solutions for Industries, Mining & Homes Across Tanzania";

export const HERO_SUBHEADLINE =
  "Supply, installation, ATS integration, maintenance, and industrial backup power systems with nationwide support.";

export const HERO_TRUST_BADGES = [
  "Free Delivery",
  "Free Installation",
  "3 Years Warranty",
  "24–48 Hour Technical Support",
] as const;

/** Cinematic hero background layers — industrial / mining / installation */
export const HERO_BACKGROUNDS = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80",
] as const;

export const FLOATING_METRICS = [
  { label: "Years Experience", value: 12, suffix: "+", position: "top-[18%] right-[8%]" },
  { label: "Projects", value: 350, suffix: "+", position: "bottom-[28%] right-[12%]" },
  { label: "Regions", value: 8, suffix: "", position: "top-[42%] right-[4%]" },
] as const;

export const STATS = [
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Projects Delivered", value: 350, suffix: "+" },
  { label: "Regions Covered", value: 8, suffix: "" },
  { label: "Support Response", value: 48, suffix: "h" },
] as const;

export const OVERVIEW_SUPPLIES = [
  "Power equipment",
  "Construction equipment",
  "Industrial machinery",
] as const;

export const OVERVIEW_SPECIALIZATIONS = [
  "Generators",
  "Transformers",
  "Concrete mixers",
  "Water pumps",
  "ATS systems",
  "Industrial machinery",
  "Technical support services",
] as const;

export const OVERVIEW_HIGHLIGHTS = [
  { icon: MapPin, title: "Based in Kariakoo, Dar es Salaam", desc: "Central location for fast equipment access." },
  { icon: Clock, title: "Responsive service delivery", desc: "Rapid quotations, delivery, and field support." },
  { icon: Award, title: "Market experience", desc: "Proven track record across Tanzania's power sector." },
  { icon: Zap, title: "Industrial power expertise", desc: "Deep understanding of commercial and mining needs." },
] as const;

export const SECTORS_SERVED = [
  { icon: Home, label: "Residential" },
  { icon: Building2, label: "Commercial" },
  { icon: Factory, label: "Industrial" },
  { icon: Landmark, label: "Institutional" },
] as const;

export const TIMELINE = [
  {
    year: "Established",
    title: "Meeting Tanzania's power demand",
    text: "GRT was established to meet Tanzania's growing demand for reliable power solutions, as homes, businesses, and institutions increasingly rely on uninterrupted operations.",
  },
  {
    year: "Solutions",
    title: "Practical & accessible equipment",
    text: "We focused on practical and accessible equipment solutions backed by dependable technical support — not just sales, but long-term operational reliability.",
  },
  {
    year: "Expansion",
    title: "Broader industrial capability",
    text: "Expanded into transformers, concrete mixers, water pumps, and industrial machinery — serving diverse sectors with hands-on field experience.",
  },
  {
    year: "Today",
    title: "Trusted nationwide partner",
    text: "Long-term client relationships, operational flexibility, consistency, and reliable service delivery across Dar es Salaam, mining regions, and coastal markets.",
  },
] as const;

export const VISION_TEXT =
  "To be a reliable and trusted provider of power solutions, supporting uninterrupted operations for homes, businesses, and industries across Tanzania.";

export const MISSION_TEXT =
  "To deliver efficient and dependable generator systems through quality products, professional installation, and responsive technical support, ensuring consistent power availability for our clients.";

export const CORE_VALUES = [
  {
    icon: Shield,
    title: "Reliability",
    desc: "We prioritize consistent performance in both our products and services to ensure dependable power solutions.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "We are committed to supplying durable equipment and delivering services that meet required standards.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "We understand client needs and provide practical, responsive, and tailored solutions.",
  },
  {
    icon: Scale,
    title: "Integrity",
    desc: "We conduct operations with honesty, transparency, and accountability.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    desc: "We deliver services in a timely and organized manner to support uninterrupted operations.",
  },
  {
    icon: Target,
    title: "Technical Competence",
    desc: "We apply practical knowledge and experience to ensure effective installation, maintenance, and support.",
  },
] as const;

export const COVERAGE_REGIONS = [
  "Dar es Salaam",
  "Mwanza",
  "Zanzibar",
  "Geita",
  "Kahama",
  "Chunya",
  "Dodoma",
  "Mbeya",
] as const;

export const TRUST_HIGHLIGHTS = [
  "Mining site support & heavy-duty installations",
  "ATS integration & synchronization expertise",
  "Nationwide technical support network",
  "Comprehensive after-sales services",
] as const;

export const WARRANTY_ITEMS = [
  "24–48 hour support response",
  "Nationwide technical support",
  "Professional technicians",
  "Emergency support",
  "Maintenance services",
  "Genuine spare parts",
] as const;

export const PROJECT_GALLERY = [
  { title: "Commercial installation", location: "Kariakoo, Dar es Salaam", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80" },
  { title: "Mining site deployment", location: "Chunya, Mbeya", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80" },
  { title: "Industrial backup system", location: "Dar es Salaam", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80" },
  { title: "Hotel power installation", location: "Zanzibar", image: hotelSolarInstallation },
] as const;

export const SERVICES = [
  { icon: Zap, title: "Power Equipment", desc: "Generators and transformers for residential, commercial, and industrial applications." },
  { icon: Droplets, title: "Water & Pumping Solutions", desc: "Water pumps and lifting systems." },
  { icon: HardHat, title: "Construction Equipment", desc: "Concrete mixers and machinery." },
  { icon: Cable, title: "Installation & Power Systems", desc: "Generator installation and ATS integration." },
  { icon: Wrench, title: "Maintenance & Repair", desc: "Servicing, inspections, and repairs." },
  { icon: Package, title: "Spare Parts Supply", desc: "Genuine spare parts support." },
  { icon: Truck, title: "Generator Rental Services", desc: "Temporary and emergency rental solutions." },
  { icon: Gauge, title: "Load Testing", desc: "Generator load testing services." },
  { icon: GitMerge, title: "Generator Synchronization", desc: "Unified synchronized generator systems." },
  { icon: Cable, title: "Electrical Installation", desc: "Panels, wiring, and distribution systems." },
  { icon: ClipboardCheck, title: "Power Audits", desc: "Power requirement assessments." },
  { icon: Sun, title: "Solar Backup Systems", desc: "Hybrid generator and solar solutions." },
] as const;

export const GENERATOR_CATEGORIES = [
  {
    id: "small" as const,
    title: "Small Generators",
    range: "5kVA – 20kVA",
    description: "Compact diesel generators for reliable backup at homes, retail, and small offices.",
    uses: ["Homes", "Shops", "Small offices"],
    brands: ["Perkins", "Honda", "Yanmar"],
  },
  {
    id: "medium" as const,
    title: "Medium Generators",
    range: "30kVA – 100kVA",
    description: "Commercial-grade units for multi-tenant buildings, hospitality, and mid-scale operations.",
    uses: ["Apartments", "Restaurants", "Commercial buildings"],
    brands: ["Perkins", "Cummins", "FG Wilson"],
  },
  {
    id: "heavy" as const,
    title: "Heavy Duty Industrial Generators",
    range: "150kVA – 500kVA+",
    description: "High-capacity systems for mining, hotels, warehouses, and factory-scale backup power.",
    uses: ["Mining", "Hotels", "Warehouses", "Factories"],
    brands: ["Cummins", "Caterpillar", "Volvo Penta"],
  },
] as const;

export const PROJECTS = [
  {
    title: "Commercial Building Generator Installation",
    location: "Kariakoo, Dar es Salaam",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    highlights: ["250 KVA diesel generator", "ATS integration", "Electrical distribution", "Commissioning", "Operator training"],
  },
  {
    title: "Mining Site Generator Supply",
    location: "Chunya, Mbeya",
    year: "2022",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    highlights: ["300 KVA generator", "Distribution setup", "Commissioning", "Preventive maintenance"],
  },
  {
    title: "Hotel Backup Power Installation",
    location: "Zanzibar",
    year: "2023",
    image: hotelSolarInstallation,
    highlights: ["200 KVA generator", "ATS synchronization", "Load testing", "Staff training"],
  },
  {
    title: "Industrial Generator Maintenance Contract",
    location: "Dar es Salaam",
    year: "2024",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    highlights: ["Routine servicing", "Fault diagnosis", "Emergency repairs", "Technical reporting"],
  },
  {
    title: "Warehouse Power Backup Installation",
    location: "Dar es Salaam",
    year: "2024",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    highlights: ["150 KVA generator", "ATS integration", "Distribution panel setup", "Full load testing"],
  },
] as const;

export const CAPABILITIES = [
  { icon: Zap, label: "Generator installation (150KVA – 300KVA+)" },
  { icon: Cable, label: "ATS integration" },
  { icon: GitMerge, label: "Electrical cabling" },
  { icon: Gauge, label: "Testing & commissioning" },
  { icon: Wrench, label: "Preventive maintenance" },
  { icon: Shield, label: "Technical support" },
  { icon: Users, label: "Operator training" },
  { icon: Factory, label: "Industrial backup systems" },
] as const;

export const INDUSTRIES_SERVED = ["Commercial", "Mining", "Hospitality", "Industrial"] as const;

export const PROJECT_SERVICES = [
  "Generator supply",
  "Installation",
  "Maintenance",
  "Commissioning",
  "Industrial backup power systems",
] as const;

export const WHY_CHOOSE_GRT = [
  { title: "12+ Years Experience", desc: "Hands-on generator supply, installation, and maintenance across Tanzania." },
  { title: "3-Year Warranty", desc: "Comprehensive warranty with 24–48 hour technical response and genuine spare parts." },
  { title: "Nationwide Coverage", desc: "Dar es Salaam, Mwanza, Zanzibar, Geita, Chunya, Kahama, Dodoma, and Mbeya." },
  { title: "After-Sales Excellence", desc: "Preventive maintenance, emergency repairs, load testing, and ATS expertise." },
] as const;
