export interface Product {
  id: string;
  sku: string;
  slug: string;
  title: string;
  category: string;
  specs: string;
  image: string;
  price: number;
  stockCount: number;
}

export type ProductRelatedCardType = Pick<
  Product,
  "id" | "title" | "price" | "image" | "slug"
>;

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductSpecsProps {
  specs: ProductSpec[];
  title: string;
}
