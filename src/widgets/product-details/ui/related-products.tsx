import { ProductRelatedCard } from "@/entities/product";
import { ProductRelatedCardType } from "@/entities/product";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const RelatedProducts = ({
  products,
}: {
  products: ProductRelatedCardType[];
}) => {
  return (
    <section aria-labelledby="related-gear-heading" className="space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h2
          id="related-gear-heading"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          Related Hardware
        </h2>
        <Link
          href="/catalog"
          className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
        >
          <span>View Catalog</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {products.map((item) => (
          <ProductRelatedCard
            key={item.id}
            slug={item.slug}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};
