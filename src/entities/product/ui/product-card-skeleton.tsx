import { Skeleton } from "@/shared";

export function ProductCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col justify-between rounded-3xl bg-card text-card-foreground p-6 shadow-sm border border-border"
    >
      <div>
        {/* Верхняя строка: SKU и статус наличия */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-3.5 w-20 rounded-md" />
          <Skeleton className="h-3.5 w-24 rounded-md" />
        </div>

        {/* Квадратное превью товара */}
        <Skeleton className="mt-4 aspect-square w-full rounded-2xl" />

        {/* Категория, заголовок и характеристики */}
        <div className="mt-4 space-y-2">
          <Skeleton className="h-3 w-16 rounded-md" />
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-7.5 w-4/5 rounded-md" />
          <Skeleton className="h-3.5 w-full rounded-md" />
        </div>
      </div>

      {/* Нижняя панель: цена и кнопка */}
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-12 rounded-md" />
          <Skeleton className="h-5 w-16 rounded-md" />
        </div>
        <Skeleton className="h-8 w-24 rounded-full" />
      </div>
    </div>
  );
}
