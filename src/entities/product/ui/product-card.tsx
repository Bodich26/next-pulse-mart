import Link from "next/link";
import { Check } from "lucide-react";
import { Product } from "../model/product-type";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.stockCount > 0;

  return (
    <article className="group flex flex-col justify-between rounded-3xl bg-card text-card-foreground p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div>
        <div className="flex items-center justify-between text-[11px] font-medium">
          <span className="text-muted-foreground">{product.sku}</span>
          {isAvailable ? (
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <Check className="h-3 w-3" />
              In Stock ({product.stockCount})
            </span>
          ) : (
            <span className="text-destructive">Sold Out</span>
          )}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="mt-4 flex aspect-square w-full items-center justify-center rounded-2xl bg-muted/60 p-4 transition-colors group-hover:bg-muted"
        >
          <span className="text-center text-xs font-medium text-muted-foreground">
            {product.title}
          </span>
        </Link>

        <div className="mt-4">
          <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
            {product.category}
          </span>
          <h2 className="mt-1 text-base font-bold text-foreground leading-snug">
            <Link
              href={`/products/${product.slug}`}
              className="hover:text-primary transition-colors"
            >
              {product.title}
            </Link>
          </h2>
          <p className="mt-1.5 text-xs text-muted-foreground">
            {product.specs}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs">
        <div>
          <span className="block text-[11px] text-muted-foreground">
            Unit Price
          </span>
          <span className="text-base font-bold text-foreground">
            ${product.price}
          </span>
        </div>

        {isAvailable ? (
          <button
            type="button"
            className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Add to Bag
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full bg-muted px-4 py-2 font-medium text-muted-foreground"
          >
            Unavailable
          </button>
        )}
      </div>
    </article>
  );
}
