export type DropStatus = "SCHEDULED" | "LIVE" | "ENDED";

export interface DropSpec {
  label: string;
  value: string;
}

export interface Drop {
  id: string;
  slug: string;
  sku: string;
  lotNumber: string;
  title: string;
  miniDescription: string;
  fullDescription: string;
  status: DropStatus;
  price: number;
  minIncrement: number;
  currency: "USD";
  quantity: number;
  craftsmanship: string;
  startsAtIso: string;
  endsAtIso: string;
  antiSnipeSeconds?: number;
  image: string;
  gallery?: string[];
  specs: DropSpec[];
}

export type UpcomingDropCardProps = Pick<
  Drop,
  | "id"
  | "lotNumber"
  | "startsAtIso"
  | "image"
  | "title"
  | "miniDescription"
  | "slug"
  | "status"
>;

//-------
export interface TimeParts {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
