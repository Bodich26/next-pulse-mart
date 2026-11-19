export type CatalogSearchParams = Promise<{
  category?: string;
  inStock?: string;
  q?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
}>;
