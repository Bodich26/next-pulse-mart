import { RotateCcw, ShieldCheck, Truck } from "lucide-react";

export const Delivery = () => {
  return (
    <div className="grid grid-cols-3 gap-3 border-t border-border pt-6 text-[11px] font-medium text-muted-foreground text-center uppercase">
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-muted/50 p-3.5 border border-border/60">
        <Truck className="h-4 w-4 text-primary" />
        <span>Secure Freight</span>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-muted/50 p-3.5 border border-border/60">
        <ShieldCheck className="h-4 w-4 text-primary" />
        <span>Original Hardware</span>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-muted/50 p-3.5 border border-border/60">
        <RotateCcw className="h-4 w-4 text-primary" />
        <span>14-Day Return</span>
      </div>
    </div>
  );
};
