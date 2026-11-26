import { ShieldAlert, Package } from "lucide-react";
import { Button, DetailPanel, NavTrail, PriceFormat } from "@/shared";
import { TechnicalProductSpecs } from "@/widgets/product-details";
import Image from "next/image";
import { DropCountdown } from "@/entities/drop";

const MOCK_DROP = {
  id: "drop-1",
  slug: "ibanez-rgd-prestige",
  sku: "PM-DR-001",
  lotNumber: "Lot #001",
  title: "Ibanez RGD Prestige",
  miniDescription:
    "A high-performance Japanese-crafted electric guitar built for precision, speed, and exceptional playability.",
  fullDescription:
    "The Ibanez RGD Prestige is a premium electric guitar engineered for modern metal and demanding players. Crafted in Japan with exceptional attention to detail, it features an extended scale length for improved string tension, precise intonation, and powerful low-end clarity. Its high-performance neck profile, premium fretwork, and carefully selected hardware provide effortless playability, even during the most technically demanding passages. Designed for heavy riffs, intricate solos, and aggressive downtuned tones, the RGD Prestige combines Japanese craftsmanship with uncompromising performance.",
  status: "LIVE",
  price: 6500,
  minIncrement: 100,
  currency: "USD",
  countdown: "04:12:00",
  quantity: 10,
  craftsmanship: "Made in Japan",
  startsAtIso: "2026-11-26T10:00:00.000Z",
  endsAtIso: "2026-11-29T20:00:00.000Z",
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
};

interface AuctionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Drop({ params }: AuctionPageProps) {
  const { slug } = await params;

  // В реальном проекте: prisma.flashDrop.findUnique({ where: { slug }, include: { bids: true } })
  const drop = MOCK_DROP;
  const isAvailable = drop.quantity > 0;

  return (
    <>
      <NavTrail
        items={[
          { label: "Home", href: "/" },
          { label: "Catalog", href: "/catalog" },
          { label: drop.sku },
        ]}
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        {/* ================= LEFT COLUMN: LOT SHOWCASE & SPECS ================= */}
        <div className="space-y-8 lg:col-span-7">
          <section
            aria-labelledby="auction-lot-title"
            className="rounded-3xl border border-border bg-card p-8 text-card-foreground shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Featured Drop
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {drop.lotNumber}
              </span>
            </div>

            <h1
              id="auction-lot-title"
              className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {drop.title}
            </h1>

            {/* Крупный рендер лота */}
            <div className="mt-8">
              <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-muted border border-border/50">
                <Image
                  src={drop.image}
                  alt={drop.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Миниатюры ракурсов */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {["Body CNC", "Headstock", "Bridge Sys", "Case Spec"].map(
                (view, idx) => (
                  <Button
                    key={view}
                    type="button"
                    className={`${
                      idx === 0
                        ? "bg-primary text-primary-foreground shadow-2xs font-semibold"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                  >
                    {view}
                  </Button>
                ),
              )}
            </div>

            {/* Описание лота */}
            <div className="mt-8 border-t border-border pt-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Build Manifesto &amp; Provenance
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {drop.fullDescription}
              </p>
            </div>
          </section>

          <TechnicalProductSpecs
            specs={drop.specs}
            title={"Hardware Telemetry & Specifications"}
          />
        </div>

        <DetailPanel ariaLabel="Product Purchase Panel">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-2 font-bold text-foreground">
              <Package className="h-4 w-4 text-primary" />
              <span>Current Drop</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-0.5 font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Active
            </span>
          </div>

          <DropCountdown targetDate={drop.endsAtIso} />
          {/* Текущая цена */}
          <div className="flex justify-between gap-2 flex-wrap items-end mt-6 border-b border-border pb-6">
            <div>
              <span className="block text-[11px] font-medium text-muted-foreground">
                Current Price
              </span>
              <span className="mt-1 block text-3xl font-bold tracking-tight text-foreground tabular-nums">
                <PriceFormat price={drop.price} />
              </span>
            </div>

            {isAvailable ? (
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                In Stock {drop.quantity} units
              </span>
            ) : (
              <span className="text-destructive font-semibold">Sold Out</span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Craftsmanship</dt>
            <dd className="font-semibold text-foreground">
              {drop.craftsmanship}
            </dd>
          </div>
          <div className="space-y-3 pt-2">
            {isAvailable ? (
              <>
                <Button type="button" className="w-full ">
                  Buy Now
                </Button>
              </>
            ) : (
              <Button type="button" disabled className="w-full">
                Unavailable / Sold Out
              </Button>
            )}
          </div>
          {/* Предупреждение о правилах */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
            <ShieldAlert className="h-4 w-4 shrink-0 text-primary" />
            <p>
              All bids are binding contracts. If outbid, escrow hold is released
              instantly.
            </p>
          </div>
        </DetailPanel>
      </div>
    </>
  );
}
