export interface Drop {
  id: string;
  time: string;
  title: string;
  description: string;
  countdown: string;
  slug: string;
  image: string;
  craftsmanship: string;
  price: number;
  quantity: number;
}

export type UpcomingDropCardProps = Omit<
  Drop,
  "quantity" | "price" | "craftsmanship"
>;
