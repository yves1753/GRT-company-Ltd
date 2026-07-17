export type ClientBrand = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export const CLIENT_BRANDS: readonly ClientBrand[] = [
  { name: "Perkins", logo: "/brands/perkins.svg", width: 140, height: 36 },
  { name: "Cummins", logo: "/brands/cummins.svg", width: 140, height: 36 },
  { name: "Caterpillar", logo: "/brands/caterpillar.svg", width: 140, height: 36 },
  { name: "Volvo Penta", logo: "/brands/volvo-penta.svg", width: 160, height: 36 },
  { name: "FG Wilson", logo: "/brands/fg-wilson.svg", width: 140, height: 36 },
  { name: "Kohler", logo: "/brands/kohler.svg", width: 140, height: 36 },
] as const;
