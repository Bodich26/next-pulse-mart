import { NavTrailSkeleton, Skeleton } from "@/shared";

export function ProductContentSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading product">
      <NavTrailSkeleton />

      {/* Основная сетка: галерея + панель покупки */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        {/* Левая колонка: галерея */}
        <div className="space-y-4 lg:col-span-7">
          <Skeleton className="aspect-[16/10] w-full rounded-3xl" />
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton key={idx} className="h-16 w-full rounded-2xl" />
            ))}
          </div>
        </div>

        {/* Правая колонка: DetailPanel */}
        <aside className="rounded-3xl border border-border bg-card p-8 shadow-sm space-y-6 lg:col-span-5">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-28 rounded-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-8 w-4/5 rounded-lg" />
            <Skeleton className="h-8 w-48 rounded-md" />
          </div>

          <div className="border-t border-b border-border py-4 space-y-2">
            <Skeleton className="h-3 w-32 rounded-md" />
            <Skeleton className="h-10 w-36 rounded-lg" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-11/12 rounded-md" />
            <Skeleton className="h-4 w-10/12 rounded-md" />
            <Skeleton className="h-4 w-3/4 rounded-md" />
          </div>

          <div className="space-y-3 pt-2 border-b py-4">
            <Skeleton className="h-10 w-full rounded-full" />
            <Skeleton className="h-10 w-full rounded-full" />
          </div>

          <Skeleton className="h-20 w-full rounded-2xl" />
        </aside>
      </section>

      {/* Технические характеристики */}
      <section className="rounded-3xl border border-border bg-card p-8 space-y-5">
        <Skeleton className="h-5 w-48 rounded-md" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Skeleton key={idx} className="h-16 w-full rounded-2xl" />
          ))}
        </div>
      </section>

      {/* Похожие товары */}
      <section className="space-y-4">
        <Skeleton className="h-6 w-40 rounded-md" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={idx} className="h-64 w-full rounded-3xl" />
          ))}
        </div>
      </section>
    </div>
  );
}
