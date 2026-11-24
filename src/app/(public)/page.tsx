import { FeaturedBlogs } from "@/widgets/featured-blogs";
import { CatalogCore } from "@/widgets/catalog";
import { NextDrop, UpcomingDrops } from "@/widgets/drop";

const CATALOG_ITEMS = [
  {
    id: "prod-1",
    sku: "PM-AU-001",
    title: "SUGY USB-C Studio Audio Interface",
    category: "Audio",
    price: 249,
    stockCount: 14,
    image: "/catalog/audiocard-1.png",
    specs: "24-bit/192kHz · Ultra-Low Latency Preamps",
    slug: "sugy-studio-audio-interface",
  },
  {
    id: "prod-2",
    sku: "PM-AU-014",
    title: "HAVI Monitor Zero Studio Headphones",
    category: "Audio",
    price: 430,
    stockCount: 6,
    image: "/catalog/headphones-1.png",
    specs: "Planar Magnetic · Open-Back Reference",
    slug: "havi-monitor-zero-headphones",
  },
  {
    id: "prod-3",
    sku: "PM-MD-031",
    title: "Industrial Heavyweight Hoodie [480GSM]",
    category: "Merch",
    price: 185,
    stockCount: 22,
    image: "/catalog/hoodies-1.png",
    specs: "100% Brushed Cotton · Puff Print",
    slug: "industrial-heavyweight-hoodie",
  },
  {
    id: "prod-4",
    sku: "PM-KB-001",
    title: "Cyber-Deck Mechanical Keyboard",
    category: "Peripherals",
    price: 299,
    stockCount: 9,
    image: "/catalog/keyboard-1.png",
    specs: "CNC Aluminum · Tactile Heavy Switches",
    slug: "cyber-deck-keyboard",
  },
];

const UPCOMING_DROPS = [
  {
    id: "drop-1",
    time: "12:00",
    title: "Ibanez RGD Prestige",
    description: "Ibanez CNC-machined titanium artisan keycap series.",
    countdown: "04:12:00",
    slug: "ibanez-rgd-prestige",
    image: "/drop/ibanez-rgd-prestige.png",
    craftsmanship: "Made in Japan",
    price: 6500,
    quantity: 10,
  },
  {
    id: "drop-2",
    time: "12:00",
    title: "C-7 FR S Apocalypse",
    description: "Schecter CNC-machined titanium artisan keycap series.",
    countdown: "04:12:00",
    slug: "ibanez-rg-621-ah",
    image: "/drop/c-7-fr-s-apocalypse.png",
    craftsmanship: "Made in Japan",
    price: 6500,
    quantity: 10,
  },
  {
    id: "drop-3",
    time: "18:00",
    title: "Keith Merrow KM-7 MK-III Artist L",
    description: "Schecter Custom high-gain tube amplifier built.",
    countdown: "08:45:00",
    slug: "ibanez-rg-621-ah",
    image: "/drop/keith-merrow-km-7mk-III.png",
    craftsmanship: "Made in Japan",
    price: 6500,
    quantity: 10,
  },
  {
    id: "drop-4",
    time: "12:00",
    title: "C-8 Multiscale Silver Mountain LH",
    description: "Schecter CNC-machined titanium artisan keycap series.",
    countdown: "04:12:00",
    slug: "ibanez-rg-621-ah",
    image: "/drop/c-8-multiscale-silver.png",
    craftsmanship: "Made in Japan",
    price: 6500,
    quantity: 10,
  },
  {
    id: "drop-5",
    time: "18:00",
    title: "Ibanez RGD621AH",
    description: "Custom high-gain tube amplifier built for low tunings.",
    countdown: "08:45:00",
    slug: "ibanez-rg-621-ah",
    image: "/drop/ibanez-p-region-rgd621ah.png",
    craftsmanship: "Made in Japan",
    price: 6500,
    quantity: 10,
  },
];

const NEWS_POSTS = [
  {
    id: "news-1",
    category: "Craftsmanship",
    title: "Inside the Custom Shop",
    excerpt:
      "How we mill aerospace-grade aluminum bodies for extended-range instruments.",
    date: "2026-11-10",
    displayDate: "Nov 10, 2026",
    image: "/blogs/blog-1.jpg",
    slug: "inside-the-custom-shop",
  },
  {
    id: "news-2",
    category: "Design",
    title: "Precision in the Digital Era",
    excerpt:
      "Stripping away visual noise: the philosophy behind clean hardware architecture.",
    date: "2026-11-05",
    displayDate: "Nov 05, 2026",
    image: "/blogs/blog-2.jpg",
    slug: "austere-design",
  },
  {
    id: "news-3",
    category: "Acoustics",
    title: "The Sound of Drop Gear",
    excerpt:
      "Acoustic testing and tactile switch calibration for extreme studio sessions.",
    date: "2026-10-28",
    displayDate: "Oct 28, 2026",
    image: "/blogs/blog-3.jpg",
    slug: "sound-of-drop-gear",
  },
];

export default function Home() {
  const featuredDrop = UPCOMING_DROPS[0] ?? null;
  const restDrops = UPCOMING_DROPS.slice(1, 5);

  return (
    <>
      <NextDrop drop={featuredDrop} />

      <CatalogCore catalogItems={CATALOG_ITEMS} />
      <UpcomingDrops drops={restDrops} />

      <section
        aria-label="PulseMart Manifesto and Features"
        className="grid grid-cols-1 gap-6 md:grid-cols-12"
      >
        <article className="flex flex-col justify-center rounded-3xl bg-card p-8 sm:p-10 shadow-sm border border-border md:col-span-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Philosophy
          </span>
          <h2 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
            PulseMart Manifesto.
            <br />
            <span className="text-muted-foreground">
              Raw. Custom. Industrial. No compromises.
            </span>
          </h2>
        </article>

        <article className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-3xl bg-card p-8 shadow-sm border border-border md:col-span-3">
          <span className="text-xs font-medium text-muted-foreground">01</span>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              Custom Shop Builds
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Hand-calibrated instruments milled to exact tolerances.
            </p>
          </div>
        </article>

        <article className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-sm md:col-span-3">
          <span className="text-xs font-medium text-primary-foreground/70">
            02
          </span>
          <div>
            <h3 className="text-lg font-bold tracking-tight">
              Fast Drop Logistics
            </h3>
            <p className="mt-1 text-xs text-primary-foreground/80">
              Insured, tracked dispatch directly from our central vault.
            </p>
          </div>
        </article>
      </section>

      <FeaturedBlogs posts={NEWS_POSTS} />
    </>
  );
}
