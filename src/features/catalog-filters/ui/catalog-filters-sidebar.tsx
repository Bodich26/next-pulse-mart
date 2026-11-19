import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";

interface CategoryItem {
  id: string;
  label: string;
  count: number;
}

interface CatalogFiltersSidebarProps {
  categories: CategoryItem[];
  activeCategory: string;
  onlyInStock: boolean;
  searchQuery?: string;
}

export function CatalogFiltersSidebar({
  categories,
  activeCategory,
  onlyInStock,
  searchQuery,
}: CatalogFiltersSidebarProps) {
  return (
    <aside aria-label="Catalog Filters" className="space-y-6 lg:col-span-3">
      <div className="rounded-3xl bg-card text-card-foreground p-6 shadow-sm border border-border">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="flex items-center gap-2 text-xs font-semibold text-foreground">
            <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
            <span>Parameters</span>
          </span>
          <Link
            href="/catalog"
            className="text-[11px] font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Reset
          </Link>
        </div>

        <form method="GET" action="/catalog" className="mt-5 space-y-6 text-xs">
          <div>
            <label
              htmlFor="catalog-search"
              className="block font-medium text-muted-foreground"
            >
              Search SKU / Model
            </label>
            <div className="relative mt-2">
              <input
                id="catalog-search"
                name="q"
                type="search"
                defaultValue={searchQuery}
                placeholder="PM-KB-001..."
                className="w-full rounded-2xl border border-input bg-muted/60 py-2.5 pr-8 pl-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none transition-colors"
              />
              <Search className="pointer-events-none absolute top-3 right-3 h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </div>

          <fieldset>
            <legend className="font-medium text-muted-foreground">
              Category Sector
            </legend>
            <ul className="mt-3 space-y-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <li key={cat.id}>
                    <Link
                      href={`/catalog?category=${cat.id}${onlyInStock ? "&inStock=true" : ""}`}
                      className={`flex items-center justify-between rounded-2xl px-3.5 py-2.5 transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
                          : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className="text-[11px] opacity-80">
                        [{cat.count}]
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          <div className="border-t border-border pt-4">
            <label className="flex cursor-pointer items-center gap-3 font-medium text-foreground">
              <input
                type="checkbox"
                name="inStock"
                value="true"
                defaultChecked={onlyInStock}
                className="h-4 w-4 rounded border-input accent-primary"
              />
              <span>In Stock Only</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-primary px-4 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Apply Filters
          </button>
        </form>
      </div>
    </aside>
  );
}
