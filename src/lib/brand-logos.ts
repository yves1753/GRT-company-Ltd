export type ClientBrand = {
  name: string;
  logo: string;
};

export const CLIENT_BRANDS: readonly ClientBrand[] = [
  { name: "Perkins", logo: "/brands/perkins.svg" },
  { name: "Cummins", logo: "/brands/cummins.svg" },
  { name: "Caterpillar", logo: "/brands/caterpillar.svg" },
  { name: "Volvo Penta", logo: "/brands/volvo-penta.svg" },
  { name: "FG Wilson", logo: "/brands/fg-wilson.svg" },
  { name: "Kohler", logo: "/brands/kohler.svg" },
] as const;
