import { Drop, DropCountdown } from "@/entities/drop";
import { Card, DetailPanel, PriceFormat } from "@/shared";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  drop: Drop;
};

export const NextDrop = ({ drop }: Props) => {
  return (
    <section
      aria-labelledby="featured-auction-heading"
      className="overflow-hidden rounded-3xl bg-card shadow-sm border border-border"
    >
      <Card className="grid grid-cols-1 lg:grid-cols-12 p-0">
        <div className="flex flex-col justify-between p-8 lg:col-span-7">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3 w-3" />
              Featured Auction
            </span>
            <h1
              id="featured-auction-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              {drop.title}
            </h1>
            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Current Price{" "}
              <span className="font-semibold text-foreground">
                <PriceFormat price={drop.price} />
              </span>
            </p>
          </div>
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
            <span className="mt-3 block text-center text-xs font-medium tracking-wide text-muted-foreground">
              Studio Render · {drop.title}
            </span>
          </div>
        </div>

        {/* Правая часть: Карточка торгов */}
        <DetailPanel
          ariaLabel="Bidding Terminal"
          sticky={false}
          innerClassName="flex flex-col justify-between border-0 rounded-none border-l max-lg:border-t max-lg:border-l-0"
        >
          <div className="space-y-6">
            <DropCountdown
              startsAtIso={drop.startsAtIso}
              endsAtIso={drop.endsAtIso}
            />

            <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Quantity</dt>
                <dd className="font-semibold text-foreground">
                  {drop.quantity} pcs
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Craftsmanship</dt>
                <dd className="font-semibold text-foreground">
                  {drop.craftsmanship}
                </dd>
              </div>
            </dl>
          </div>

          <Link
            href={`/drop/${drop.slug}`}
            className="mt-8 gap-2 flex w-full items-center justify-center rounded-full bg-primary px-6 py-1.5 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-[0.99]"
          >
            Go to buy
            <ArrowRight className="h-4 w-4" />
          </Link>
        </DetailPanel>
      </Card>
    </section>
  );
};
