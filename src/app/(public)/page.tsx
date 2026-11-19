import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";

const CATALOG_ITEMS = [
  {
    id: "1",
    title: "Mechanical Keyboard",
    subtitle: "CNC Aluminum · Tactile Switches",
    price: "$249",
    stock: "In Stock",
    image: "/catalog/keyboard-1.png",
    slug: "mechanical-keyboard",
  },
  {
    id: "2",
    title: "Industrial Audio Headset",
    subtitle: "Planar Magnetic · Studio Reference",
    price: "$430",
    stock: "In Stock",
    image: "/catalog/headphones-1.png",
    slug: "industrial-audio-headset",
  },
  {
    id: "3",
    title: "Power Drill MK-IV",
    subtitle: "Brushless Torque · Titanium Kit",
    price: "$299",
    stock: "In Stock",
    image: "/catalog/audiocard-1.png",
    slug: "power-drill-mk4",
  },
  {
    id: "4",
    title: "Limited Edition Vinyl",
    subtitle: "180g Heavy Pressing · Remastered",
    price: "$89",
    stock: "In Stock",
    image: "/catalog/mouse-1.png",
    slug: "limited-edition-vinyl",
  },
];

const UPCOMING_DROPS = [
  {
    id: "drop-1",
    time: "12:00",
    title: "C-7 FR S Apocalypse",
    description: "Schecter CNC-machined titanium artisan keycap series.",
    author: "User_***84",
    countdown: "04:12:00",
    image: "/drop/c-7-fr-s-apocalypse.png",
  },
  {
    id: "drop-2",
    time: "18:00",
    title: "Keith Merrow KM-7 MK-III Artist L",
    description: "Schecter Custom high-gain tube amplifier built.",
    author: "User_***12",
    countdown: "08:45:00",
    image: "/drop/keith-merrow-km-7mk-III.png",
  },
  {
    id: "drop-3",
    time: "12:00",
    title: "C-8 Multiscale Silver Mountain LH",
    description: "Schecter CNC-machined titanium artisan keycap series.",
    author: "User_***84",
    countdown: "04:12:00",
    image: "/drop/c-8-multiscale-silver.png",
  },
  {
    id: "drop-4",
    time: "18:00",
    title: "Ibanez RGD621AH",
    description: "Custom high-gain tube amplifier built for low tunings.",
    author: "User_***12",
    countdown: "08:45:00",
    image: "/drop/ibanez-p-region-rgd621ah.png",
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
  return (
    <>
      <section
        aria-labelledby="featured-auction-heading"
        className="overflow-hidden rounded-3xl bg-card shadow-sm border border-border"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Левая часть: Презентация инструмента */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3 w-3" />
                Featured Auction
              </span>
              <h1
                id="featured-auction-heading"
                className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
              >
                Ibanez RGD Prestige
              </h1>
              <p className="mt-2 text-lg font-medium text-muted-foreground">
                Current Bid{" "}
                <span className="font-semibold text-foreground">$6,499</span>
              </p>
            </div>

            {/* Студийный рендер */}
            <figure className="mt-8">
              <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-muted border border-border/50">
                <Image
                  src="/drop/ibanez-rgd-prestige.png"
                  alt="Ibanez RGD Prestige"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="mt-3 block text-center text-xs font-medium tracking-wide text-muted-foreground">
                Studio Render · Ibanez RGD Prestige
              </span>

              <figcaption className="sr-only">
                Ibanez RGD Prestige extended-range electric guitar
              </figcaption>
            </figure>
          </div>

          {/* Правая часть: Карточка торгов */}
          <aside
            aria-label="Bidding Terminal"
            className="flex flex-col justify-between border-t border-border bg-muted/30 p-8 sm:p-10 lg:col-span-4 lg:border-t-0 lg:border-l"
          >
            <div>
              <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Live Auction
              </span>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-foreground">
                Bidding Terminal
              </h2>

              {/* Таймер обратного отсчета */}
              <div className="mt-6 rounded-2xl bg-card p-5 shadow-2xs border border-border">
                <span className="block text-[11px] font-medium text-muted-foreground">
                  Time Remaining
                </span>
                <time
                  dateTime="P2DT14H59M32S"
                  className="mt-1 block text-3xl font-bold tracking-tight text-foreground tabular-nums"
                >
                  02 : 14 : 59 : 32
                </time>
                <div className="mt-2 grid grid-cols-4 text-[10px] font-medium text-muted-foreground uppercase">
                  <span>Days</span>
                  <span>Hrs</span>
                  <span>Mins</span>
                  <span>Secs</span>
                </div>
              </div>

              {/* Метаданные торгов */}
              <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Quantity</dt>
                  <dd className="font-semibold text-foreground">10 pcs</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Craftsmanship</dt>
                  <dd className="font-semibold text-foreground">
                    Made in Japan
                  </dd>
                </div>
              </dl>
            </div>

            <Link
              href="/drop/cyber-forge-bass-vi"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-[0.99]"
            >
              Place Bid Now
            </Link>
          </aside>
        </div>
      </section>

      {/* 2. CORE CATALOG / DROP GEAR */}
      <section aria-labelledby="core-catalog-heading" className="space-y-8">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h2
              id="core-catalog-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Core Catalog.{" "}
              <span className="text-muted-foreground font-semibold">
                Engineered to perform.
              </span>
            </h2>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            <span>Explore all gear</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATALOG_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-3xl bg-card p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item.stock}
                  </span>
                </div>

                <Link
                  href={`/product/${item.slug}`}
                  className="group mt-4 block"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted p-4 transition-colors group-hover:bg-muted/80 border border-border/40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="mt-5">
                  <h3 className="text-base font-semibold text-foreground">
                    <Link
                      href={`/product/${item.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                <span className="text-base font-semibold text-foreground">
                  {item.price}
                </span>

                <button
                  type="button"
                  className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Buy
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. UPCOMING DROPS SCHEDULE */}
      <section aria-labelledby="upcoming-drops-heading" className="space-y-6">
        <div>
          <h2
            id="upcoming-drops-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Upcoming Drops.{" "}
            <span className="text-muted-foreground font-semibold">
              Mark your calendar.
            </span>
          </h2>
        </div>

        <div className="divide-y divide-border overflow-hidden rounded-3xl bg-card shadow-sm border border-border">
          {UPCOMING_DROPS.map((drop) => (
            <article
              key={drop.id}
              className="flex flex-col justify-between gap-4 p-6 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-5">
                <time className="hidden w-12 text-sm font-semibold text-muted-foreground tabular-nums sm:block">
                  {drop.time}
                </time>

                <div className="relative h-16 w-16 rounded-2xl border border-border/40">
                  <Image
                    src={drop.image}
                    alt={drop.title}
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {drop.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
                    {drop.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 border-t border-border pt-4 sm:border-t-0 sm:pt-0">
                <div className="text-left sm:text-right">
                  <span className="block text-[11px] font-medium text-muted-foreground">
                    Starts in
                  </span>
                  <time className="text-sm font-semibold text-foreground tabular-nums">
                    {drop.countdown}
                  </time>
                </div>

                <Link
                  href={"/drop/1"}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span>Watch Now</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. BENTO GRID */}
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

      {/* 5. PULSE LOGS / EDITORIAL STORIES */}
      <section aria-labelledby="pulse-logs-heading" className="space-y-8">
        <div>
          <h2
            id="pulse-logs-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Pulse Logs.{" "}
            <span className="text-muted-foreground font-semibold">
              Stories from the workshop.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {NEWS_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-card shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="relative aspect-video w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className=""
                  />
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border px-6 py-4 text-xs text-muted-foreground">
                <time dateTime={post.date}>{post.displayDate}</time>
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read more about ${post.title}`}
                  className="inline-flex items-center gap-1 font-medium text-primary"
                >
                  <span>Read</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
