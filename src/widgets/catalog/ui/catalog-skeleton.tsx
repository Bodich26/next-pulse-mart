import { ProductCardSkeleton } from "@/entities/product";
import { Skeleton } from "@/shared";

interface CatalogSkeletonProps {
  count?: number;
}

export function CatalogSkeleton({ count = 6 }: CatalogSkeletonProps) {
  return (
    <div className="space-y-6">
      {/* Плейсхолдер счётчика "Showing X units" */}
      <div className="flex justify-end">
        <Skeleton className="h-4 w-24 rounded-md" />
      </div>

      {/* Сетка карточек товаров */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: count }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
