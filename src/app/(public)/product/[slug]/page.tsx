import { ProductGallery } from "@/entities/product";
import { Delivery } from "@/widgets/delivery";
import { TechnicalProductSpecs } from "@/widgets/product-details/ui/technical-product-specs";
import { Button, DetailPanel, NavTrail, PriceFormat } from "@/shared";
import {
  ProductContentSkeleton,
  RelatedProducts,
} from "@/widgets/product-details";
import { Suspense } from "react";

// Моковые данные для демонстрации (в продакшене получается из Prisma по slug)
const MOCK_PRODUCT = {
  id: "prod-1",
  sku: "PM-KB-001",
  title: "Cyber-Deck 75% Mechanical Keyboard",
  category: "Peripherals",
  price: 249,
  stockCount: 14,
  description:
    "Engineered for extreme performance and heavy daily abuse. Built around a solid milled aircraft-grade aluminum chassis, gasket-mounted plate, and hot-swappable PCB with custom factory-lubed tactile heavy switches.",
  specs: [
    { label: "Chassis", value: "CNC Milled Aluminum (Anodized Matte Black)" },
    { label: "Layout", value: "75% Compact Tenkeyless (82 Keys)" },
    { label: "Switches", value: "Custom Tactile Heavy (67g actuation)" },
    { label: "Connectivity", value: "Detachable USB-C Braided Cable" },
    { label: "Weight", value: "1.85 kg" },
  ],
  images: [
    "/catalog/keyboard-1.png",
    "/catalog/keyboard-2.png",
    "/catalog/keyboard-3.png",
    "/catalog/keyboard-4.png",
  ],
};

const RELATED_PRODUCTS = [
  {
    id: "prod-2",
    title: "Monitor Zero Headphones",
    price: 430,
    slug: "monitor-zero-headphones",
    image: "/catalog/keyboard-1.png",
  },
  {
    id: "prod-7",
    title: "Tungsten Artisan ESC Keycap",
    price: 65,
    slug: "tungsten-artisan-keycap",
    image: "/catalog/keyboard-1.png",
  },
  {
    id: "prod-8",
    title: "Anthology Vol. II Vinyl",
    price: 89,
    slug: "anthology-vol-2-vinyl",
    image: "/catalog/keyboard-1.png",
  },
];

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function ProductContent({ params }: ProductPageProps) {
  const { slug } = await params;

  // В реальном проекте здесь будет запрос: prisma.product.findUnique({ where: { slug } })
  void slug;
  const product = MOCK_PRODUCT;
  const isAvailable = product.stockCount > 0;

  return (
    <>
      <NavTrail
        items={[
          { label: "Home", href: "/" },
          { label: "Catalog", href: "/catalog" },
          { label: product.sku },
        ]}
      />
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        <div className="space-y-4 lg:col-span-7">
          <ProductGallery title={product.title} images={product.images} />
        </div>
        <DetailPanel ariaLabel="Product Purchase Panel">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-primary uppercase tracking-wider font-semibold">
              {product.category}
            </span>
            {isAvailable ? (
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                In Stock ({product.stockCount} units)
              </span>
            ) : (
              <span className="text-destructive font-semibold">Sold Out</span>
            )}
          </div>

          {/* Название и SKU */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {product.title}
            </h1>
            <p className="mt-1 text-xs text-muted-foreground">
              SKU: {product.sku}
            </p>
          </div>

          {/* Цена */}
          <div className="border-t border-b border-border py-4">
            <span className="block text-[11px] font-medium text-muted-foreground">
              Unit Price (Direct Purchase)
            </span>
            <span className="text-3xl font-bold tracking-tight text-foreground">
              <PriceFormat price={product.price} />
            </span>
          </div>

          {/* Описание */}
          <p className="text-xs leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Кнопки действий */}
          <div className="space-y-3 pt-2">
            {isAvailable ? (
              <>
                <Button type="button" className="w-full ">
                  Add to Bag
                </Button>
                <Button type="button" variant={"secondary"} className="w-full ">
                  Buy Now in 1-Click
                </Button>
              </>
            ) : (
              <Button type="button" disabled className="w-full">
                Unavailable / Sold Out
              </Button>
            )}
          </div>
          <Delivery />
        </DetailPanel>
      </section>
      <TechnicalProductSpecs
        specs={product.specs}
        title={"Technical Specifications"}
      />

      <RelatedProducts products={RELATED_PRODUCTS} />
    </>
  );
}

export default function Product({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<ProductContentSkeleton />}>
      <ProductContent params={params} />
    </Suspense>
  );
}
