import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProductRelatedCardType } from "../model/product-type";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared";

export function ProductRelatedCard({
  id,
  title,
  price,
  image,
  slug,
}: ProductRelatedCardType) {
  return (
    <Card
      key={id}
      className="group flex flex-col justify-between rounded-3xl bg-card text-card-foreground p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-muted/60 p-4">
        <CardHeader className="p-0 relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vh, 25vw"
            className="object-cover transition-transform duration-300"
          />
        </CardHeader>
      </div>
      <CardContent className="p-0">
        <CardTitle className="text-base font-bold text-foreground">
          <Link
            href={`/product/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </CardTitle>
      </CardContent>

      <CardFooter className="p-0 flex items-center justify-between border-t border-border pt-4 ">
        <span className="text-base font-bold text-foreground">${price}</span>
        <Link
          href={`/product/${slug}`}
          className="inline-flex items-center gap-1 font-medium text-primary"
        >
          <span>Inspect</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
