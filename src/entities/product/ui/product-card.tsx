import Link from "next/link";
import { Check } from "lucide-react";
import { Product } from "../model/product-type";
import Image from "next/image";
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  PriceFormat,
} from "@/shared";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.stockCount > 0;

  return (
    <Card className="group flex flex-col justify-between rounded-3xl bg-card text-card-foreground shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div>
        <CardHeader className="flex items-center justify-between text-[11px] font-medium">
          <span className="text-muted-foreground">{product.sku}</span>
          {isAvailable ? (
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <Check className="h-3 w-3" />
              In Stock ({product.stockCount})
            </span>
          ) : (
            <span className="text-destructive">Sold Out</span>
          )}
        </CardHeader>
        <CardContent>
          <Link
            href={`/product/${product.slug}`}
            className="relative mt-4 flex aspect-square w-full items-center justify-center rounded-2xl bg-muted/60 p-4 transition-colors group-hover:bg-muted"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="mt-4">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
              {product.category}
            </span>
            <CardTitle className="mt-1 text-base font-bold text-foreground leading-snug">
              <Link
                href={`/product/${product.slug}`}
                className="hover:text-primary transition-colors"
              >
                {product.title}
              </Link>
            </CardTitle>
            <CardDescription className="mt-1.5 text-xs text-muted-foreground">
              <p>{product.specs}</p>
            </CardDescription>
          </div>
        </CardContent>
      </div>

      <CardFooter className="flex items-center justify-between border-t border-border pt-4 text-xs">
        <div>
          <span className="block text-[11px] text-muted-foreground">
            Unit Price
          </span>
          <span className="text-base font-bold text-foreground">
            <PriceFormat price={product.price} />
          </span>
        </div>
        <CardAction>
          {isAvailable ? (
            <Button type="button">Add to Bag</Button>
          ) : (
            <Button type="button" disabled>
              Unavailable
            </Button>
          )}
        </CardAction>
      </CardFooter>
    </Card>
  );
}
