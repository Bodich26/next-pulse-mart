import Link from "next/link";
import { ProductCard, type Product } from "@/entities/product";
import type { CatalogSearchParams } from "@/features/catalog-filters";

interface CatalogContentProps {
  searchParams: CatalogSearchParams;
  products: Product[];
}

export async function CatalogContent({
  searchParams,
  products,
}: CatalogContentProps) {
  const params = await searchParams;
  const activeCategory = params.category?.toLowerCase() || "all";
  const onlyInStock = params.inStock === "true";
  const query = params.q?.trim().toLowerCase() || "";

  const filteredProducts = products.filter((item) => {
    if (onlyInStock && item.stockCount === 0) return false;
    if (
      activeCategory !== "all" &&
      !item.category.toLowerCase().includes(activeCategory)
    ) {
      return false;
    }
    if (
      query &&
      !item.title.toLowerCase().includes(query) &&
      !item.sku.toLowerCase().includes(query)
    ) {
      return false;
    }
    return true;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-card text-card-foreground py-20 text-center shadow-sm border border-border">
        <p className="text-sm font-bold text-foreground">
          No hardware matching parameters
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Adjust sector filters or reset query parameters.
        </p>
        <Link
          href="/catalog"
          className="mt-6 rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Reset All Parameters
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end text-xs text-muted-foreground">
        Showing{" "}
        <strong className="mx-1 text-foreground font-semibold">
          {filteredProducts.length}
        </strong>{" "}
        units
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <nav
        aria-label="Catalog Pagination"
        className="flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground"
      >
        <span>Page 01 of 16</span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full bg-muted px-4 py-2 font-medium text-muted-foreground"
          >
            &larr; Prev
          </button>
          <button
            type="button"
            className="rounded-full bg-card text-card-foreground px-4 py-2 font-medium shadow-2xs border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            Next &rarr;
          </button>
        </div>
      </nav>
    </div>
  );
}
