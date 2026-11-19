import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpDown } from "lucide-react";
import type { Product } from "@/entities/product";
import {
  CatalogFiltersSidebar,
  type CatalogSearchParams,
} from "@/features/catalog-filters";
import { CatalogSkeleton } from "./catalog-skeleton";
import { CatalogContent } from "./catalog-content";

interface CatalogViewProps {
  searchParams: CatalogSearchParams;
  products: Product[];
  categories: { id: string; label: string; count: number }[];
}

export function CatalogView({
  searchParams,
  products,
  categories,
}: CatalogViewProps) {
  return (
    <div className="space-y-8">
      {/* Статическая верхняя часть */}
      <div className="border-b border-border pb-6">
        <nav
          aria-label="Breadcrumb"
          className="text-xs font-medium text-muted-foreground"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-semibold">Core Catalog</li>
          </ol>
        </nav>

        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Core Catalog.{" "}
            <span className="text-muted-foreground font-semibold">
              Direct purchase hardware.
            </span>
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            Fixed-price industrial hardware, custom audio &amp; limited
            production runs.
          </p>
        </div>
      </div>

      {/* Сайдбар фильтров + правая колонка с товарами */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <CatalogFiltersSidebar
          categories={categories}
          activeCategory="all"
          onlyInStock={false}
        />

        <section aria-label="Products Grid" className="space-y-6 lg:col-span-9">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-card text-card-foreground px-6 py-4 shadow-sm border border-border text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground">Active Filter:</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 font-medium text-foreground">
                all
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground" />
              <label htmlFor="sort-select" className="text-muted-foreground">
                Sort:
              </label>
              <select
                id="sort-select"
                defaultValue="newest"
                className="rounded-xl border border-input bg-muted/60 px-3 py-1.5 text-foreground focus:border-primary focus:bg-background focus:outline-none transition-colors"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Скелетон только на товарах */}
          <Suspense fallback={<CatalogSkeleton />}>
            <CatalogContent searchParams={searchParams} products={products} />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
