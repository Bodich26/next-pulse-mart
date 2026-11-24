import { Product, ProductCard } from "@/entities/product";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Props = {
  catalogItems: Product[];
};

export const CatalogCore = ({ catalogItems }: Props) => {
  return (
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
        {catalogItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};
