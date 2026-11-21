import { CatalogView } from "@/widgets/catalog";

const CATALOG_PRODUCTS = [
  {
    id: "prod-1",
    sku: "PM-KB-001",
    title: "Cyber-Deck 75% Mechanical Keyboard",
    category: "Peripherals",
    price: 249,
    stockCount: 14,
    image: "/catalog/audiocard-1.png",
    specs: "CNC Aluminum · Tactile Heavy Switches",
    slug: "cyber-deck-75-keyboard",
  },
  {
    id: "prod-2",
    sku: "PM-AU-014",
    title: "Monitor Zero Studio Headphones",
    category: "Audio",
    price: 430,
    stockCount: 6,
    image: "/catalog/audiocard-1.png",
    specs: "Planar Magnetic · Open-Back Reference",
    slug: "monitor-zero-headphones",
  },
  {
    id: "prod-3",
    sku: "PM-GT-089",
    title: "Drop-G Baritone Bridge Pickup Set",
    category: "Guitars & Mods",
    price: 185,
    stockCount: 22,
    image: "/catalog/audiocard-1.png",
    specs: "Ceramic Magnet · High-Output Passive",
    slug: "drop-g-baritone-pickups",
  },
  {
    id: "prod-4",
    sku: "PM-TL-004",
    title: "MK-IV Torque Driver & Bit Kit",
    category: "Hardware",
    price: 299,
    stockCount: 9,
    image: "/catalog/audiocard-1.png",
    specs: "Brushless Motor · Titanium Hex Bits",
    slug: "mk4-torque-driver",
  },
  {
    id: "prod-5",
    sku: "PM-MD-031",
    title: "Industrial Heavyweight Hoodie [480GSM]",
    category: "Merch",
    price: 120,
    stockCount: 3,
    image: "/catalog/audiocard-1.png",
    specs: "100% Brushed Cotton · Puff Print",
    slug: "industrial-heavyweight-hoodie",
  },
  {
    id: "prod-6",
    sku: "PM-AU-022",
    title: "Analog Distortion Preamp Pedal",
    category: "Audio",
    price: 215,
    stockCount: 0,
    image: "/catalog/audiocard-1.png",
    specs: "True Bypass · Die-Cast Steel Enclosure",
    slug: "analog-distortion-preamp",
  },
  {
    id: "prod-7",
    sku: "PM-KB-019",
    title: "Tungsten Artisan Escape Keycap",
    category: "Peripherals",
    price: 65,
    stockCount: 41,
    image: "/catalog/audiocard-1.png",
    specs: "Solid Tungsten · Laser Etched",
    slug: "tungsten-artisan-keycap",
  },
  {
    id: "prod-8",
    sku: "PM-MD-044",
    title: "Anthology Vol. II — 180g Double Vinyl",
    category: "Merch",
    price: 89,
    stockCount: 11,
    image: "/catalog/audiocard-1.png",
    specs: "Gatefold Sleeve · Remastered Heavy Audio",
    slug: "anthology-vol-2-vinyl",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Gear", count: 128 },
  { id: "guitars", label: "Guitars & Mods", count: 34 },
  { id: "audio", label: "Audio & Studio", count: 42 },
  { id: "peripherals", label: "Peripherals", count: 29 },
  { id: "hardware", label: "Hardware / Tools", count: 15 },
  { id: "merch", label: "Limited Merch", count: 8 },
];

interface CatalogPageProps {
  searchParams: Promise<{
    category?: string;
    sort?: string;
    inStock?: string;
    q?: string;
  }>;
}

export default function Catalog({ searchParams }: CatalogPageProps) {
  return (
    <CatalogView
      searchParams={searchParams}
      products={CATALOG_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
