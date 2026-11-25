import { ProductSpecs, ProductSpecsProps } from "@/entities/product";

export const TechnicalProductSpecs = ({ specs, title }: ProductSpecsProps) => {
  return (
    <section
      aria-labelledby="technical-specs-heading"
      className="rounded-3xl bg-card text-card-foreground p-8 sm:p-10 shadow-sm border border-border"
    >
      <h2
        id="technical-specs-heading"
        className="text-xl font-bold tracking-tight text-foreground"
      >
        {title}
      </h2>

      <ProductSpecs specs={specs} />
    </section>
  );
};
