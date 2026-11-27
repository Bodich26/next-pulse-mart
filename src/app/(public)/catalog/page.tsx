import { CATALOG_PRODUCTS, CATEGORIES } from "@/shared";
import { CatalogView } from "@/widgets/catalog";
interface CatalogPageProps {
  searchParams: Promise<{
    category?: string;
    sort?: string;
    inStock?: string;
    q?: string;
  }>;
}

export default function Catalog({ searchParams }: CatalogPageProps) {
  return (
    <CatalogView
      searchParams={searchParams}
      products={CATALOG_PRODUCTS}
      categories={CATEGORIES}
    />
  );
}
