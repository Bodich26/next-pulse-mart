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
    miniDescription:
      "A high-performance Japanese-crafted electric guitar built for precision, speed, and exceptional playability.",
    fullDescription:
      "The Ibanez RGD Prestige is a premium electric guitar engineered for modern metal and demanding players. Crafted in Japan with exceptional attention to detail, it features an extended scale length for improved string tension, precise intonation, and powerful low-end clarity. Its high-performance neck profile, premium fretwork, and carefully selected hardware provide effortless playability, even during the most technically demanding passages. Designed for heavy riffs, intricate solos, and aggressive downtuned tones, the RGD Prestige combines Japanese craftsmanship with uncompromising performance.",
    sku: "PM-KB-001",
    countdown: "04:12:00",
    lotNumber: "Lot #001",
    status: "LIVE",
    price: 6500,
    craftsmanship: "Made in Japan",
    quantity: 10,
    slug: "ibanez-rgd-prestige",
    endsAtIso: "2026-11-15T20:00:00Z",
    image: "/drop/ibanez-rgd-prestige.png",
    specs: [
      { label: "Scale Length", value: '30" Baritone Scale' },
      { label: "Body Material", value: "Chambered Aircraft Aluminum" },
      {
        label: "Neck & Fretboard",
        value: "Carbon-Reinforced Roasted Maple / Ebony",
      },
      { label: "Pickups", value: "Custom Active Ceramic Set" },
      { label: "Bridge", value: "EverTune Constant Tension System" },
      { label: "Serial Number", value: "PM-CS-2026-001" },
    ],
  },
  {
    id: "drop-2",
    time: "12:00",
    title: "C-7 FR S Apocalypse",
    miniDescription:
      "A battle-ready 7-string metal guitar featuring aggressive styling, powerful tones, and precision engineering.",
    fullDescription:
      "The Schecter C-7 FR S Apocalypse is a high-performance 7-string electric guitar designed for modern metal and extreme playing styles. Featuring an aggressive aesthetic, a Floyd Rose tremolo system, and powerful active pickups, it delivers tight low-end response, crushing distortion, and excellent note definition. Its fast-playing neck and premium construction provide the stability and precision needed for demanding riffs, technical solos, and expressive lead work. Built for players who push the limits of heavy music, the Apocalypse combines bold design with uncompromising performance.",
    sku: "PM-SC-002",
    countdown: "04:12:00",
    lotNumber: "Lot #002",
    status: "UPCOMING",
    price: 6500,
    craftsmanship: "Country of manufacture varies by production batch",
    quantity: 10,
    slug: "schecter-c-7-fr-s-apocalypse",
    endsAtIso: "2026-11-26T20:00:00Z",
    image: "/drop/c-7-fr-s-apocalypse.png",
    specs: [
      { label: "Scale Length", value: '26.5" (673 mm)' },
      { label: "Body Material", value: "Swamp Ash" },
      { label: "Neck & Fretboard", value: "Maple/Padauk Multi-Ply / Ebony" },
      { label: "Pickups", value: "Schecter USA Apocalypse-VII / Sustainiac" },
      { label: "Bridge", value: "Floyd Rose 1500 Series" },
      { label: "Neck Construction", value: "Set-Neck with Ultra Access" },
      { label: "Frets", value: "24 X-Jumbo Stainless Steel" },
      { label: "Tuners", value: "Grover Rotomatic 18:1" },
      { label: "Finish", value: "Red Reign" },
      { label: "Hardware", value: "Satin Black" },
    ],
  },
  {
    id: "drop-3",
    time: "18:00",
    title: "Keith Merrow KM-7 MK-III Artist L",
    miniDescription:
      "A signature 7-string guitar designed for technical precision, modern metal, and versatile low-tuned tones.",
    fullDescription:
      "The Schecter Keith Merrow KM-7 MK-III Artist L is a signature 7-string electric guitar developed in collaboration with guitarist Keith Merrow. Designed for progressive metal and technically demanding playing, it combines a comfortable neck profile, premium construction, and high-output pickups for exceptional clarity and articulation. Its extended tonal range makes it ideal for low tunings, complex riffs, tight rhythmic passages, and expressive lead playing. With its refined ergonomics and versatile sound, the KM-7 MK-III delivers professional performance for modern metal musicians.",
    sku: "PM-SC-003",
    countdown: "08:45:00",
    lotNumber: "Lot #003",
    status: "UPCOMING",
    price: 6500,
    craftsmanship: "Country of manufacture varies by production batch",
    quantity: 10,
    slug: "schecter-keith-merrow-km-7-mk-iii-artist-l",
    endsAtIso: "2026-11-27T20:00:00Z",
    image: "/drop/keith-merrow-km-7mk-III.png",
    specs: [
      { label: "Scale Length", value: '26.5" (673 mm)' },
      { label: "Body Material", value: "Swamp Ash with Poplar Burl Top" },
      {
        label: "Neck & Fretboard",
        value: "9-Piece Wenge/Maple/Purple Heart / Ebony",
      },
      { label: "Pickups", value: "Lundgren M7 Humbuckers" },
      { label: "Bridge", value: "Hipshot 7-String Ibby" },
      { label: "Neck Construction", value: "Neck-Thru with Ultra Access" },
      { label: "Frets", value: "24 X-Jumbo Stainless Steel" },
      { label: "Tuners", value: "Hipshot Grip-Lock" },
      { label: "Finish", value: "Lagoon Fade" },
      { label: "Hardware", value: "Black" },
    ],
  },
  {
    id: "drop-4",
    time: "12:00",
    title: "C-8 Multiscale Silver Mountain LH",
    miniDescription:
      "An extended-range 8-string multiscale guitar built for deep tunings, powerful riffs, and modern metal.",
    fullDescription:
      "The Schecter C-8 Multiscale Silver Mountain LH is an extended-range 8-string electric guitar designed for players who demand maximum tonal range and precision. Its multiscale fretboard provides optimized string tension across all eight strings, improving playability, intonation, and clarity in extremely low tunings. Equipped with powerful pickups and premium hardware, it delivers a massive low-end response while maintaining definition and articulation across the entire fretboard. Featuring the distinctive Silver Mountain aesthetic and a left-handed configuration, this instrument is built for progressive metal, djent, and technically demanding performances.",
    sku: "PM-SC-004",
    countdown: "04:12:00",
    lotNumber: "Lot #004",
    status: "UPCOMING",
    price: 6500,
    craftsmanship: "Country of manufacture varies by production batch",
    quantity: 10,
    slug: "schecter-c-8-multiscale-silver-mountain-lh",
    endsAtIso: "2026-11-28T20:00:00Z",
    image: "/drop/c-8-multiscale-silver.png",
    specs: [
      { label: "Scale Length", value: '25.5"–27" Multiscale (648–685.8 mm)' },
      { label: "Body Material", value: "Mahogany" },
      { label: "Neck & Fretboard", value: "Mahogany / Ebony" },
      { label: "Pickups", value: "Schecter USA Sonic Seducer Humbuckers" },
      { label: "Bridge", value: "Hipshot Hardtail (.125) String-Thru Body" },
      { label: "Neck Construction", value: "Set-Neck with Ultra Access" },
      { label: "Frets", value: "24 X-Jumbo Stainless Steel" },
      { label: "Tuners", value: "Schecter Locking" },
      { label: "Finish", value: "Silver Mountain" },
      { label: "Configuration", value: "Left-Handed 8-String" },
    ],
  },
  {
    id: "drop-5",
    time: "18:00",
    title: "Ibanez RGD621AH",
    miniDescription:
      "A modern 6-string metal guitar combining extended-range design, powerful tone, and effortless playability.",
    fullDescription:
      "The Ibanez RGD621AH is a high-performance electric guitar designed for modern metal, heavy riffs, and precise technical playing. Its extended-scale construction provides increased string tension and improved tuning stability, making it particularly suitable for lower tunings. Featuring a fast-playing neck, carefully crafted fretwork, and powerful pickups, it delivers tight low-end response, aggressive attack, and excellent note definition. Combining Ibanez engineering with a sleek, performance-focused design, the RGD621AH is a versatile instrument built for demanding guitarists.",
    sku: "PM-IB-005",
    countdown: "08:45:00",
    lotNumber: "Lot #005",
    status: "UPCOMING",
    price: 6500,
    craftsmanship: "Made in Indonesia (verify exact production version)",
    quantity: 10,
    slug: "ibanez-rgd621ah",
    endsAtIso: "2026-11-29T20:00:00Z",
    image: "/drop/ibanez-p-region-rgd621ah.png",
    specs: [
      { label: "Scale Length", value: '26.5" (673 mm)' },
      { label: "Body Material", value: "Okoume with Ash Top" },
      {
        label: "Neck & Fretboard",
        value: "5-Piece Panga Panga/Walnut / Macassar Ebony",
      },
      {
        label: "Pickups",
        value: "DiMarzio Fusion Edge Passive Ceramic Humbuckers",
      },
      { label: "Bridge", value: "Gibraltar Standard III" },
      { label: "Neck Construction", value: "Bolt-On Wizard III" },
      { label: "Frets", value: "24 Jumbo Frets" },
      { label: "Tuners", value: "Gotoh MG-T Locking" },
      { label: "Finish", value: "Midnight Shade Flat" },
      { label: "Hardware", value: "Black" },
    ],
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
        <article className="flex flex-col justify-center rounded-3xl bg-card p-8 shadow-sm border border-border md:col-span-6">
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
