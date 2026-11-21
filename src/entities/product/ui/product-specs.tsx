import { ProductSpec } from "../model/product-type";

interface ProductSpecsProps {
  specs: ProductSpec[];
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  if (specs.length === 0) {
    return null;
  }

  return (
    <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs">
      {specs.map((spec, index) => (
        <div
          key={`${spec.label}-${index}`}
          className="rounded-2xl bg-muted/50 p-4 border border-border/60"
        >
          <dt className="text-muted-foreground font-medium">{spec.label}</dt>
          <dd className="mt-1 font-semibold text-foreground">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
