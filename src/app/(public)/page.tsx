import { FeaturedBlogs } from "@/widgets/featured-blogs";
import { CatalogCore } from "@/widgets/catalog";
import { NextDrop, UpcomingDrops } from "@/widgets/drop";
import { CORE_CATALOG, NEWS_POSTS, UPCOMING_DROPS } from "@/shared";

export default function Home() {
  const featuredDrop = UPCOMING_DROPS[0] ?? null;
  const restDrops = UPCOMING_DROPS.slice(1, 5);

  return (
    <>
      <NextDrop drop={featuredDrop} />

      <CatalogCore catalogItems={CORE_CATALOG} />
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
