export interface Drop {
  id: string;
  time: string;
  title: string;
  countdown: string;
  slug: string;
  image: string;
  miniDescription: string;
  fullDescription: string;
  craftsmanship: string;
  price: number;
  quantity: number;
  specs: DropSpecs[];
}

export interface DropSpecs {
  label: string;
  value: string;
}

export type UpcomingDropCardProps = Omit<
  Drop,
  "quantity" | "price" | "craftsmanship" | "fullDescription"
>;
