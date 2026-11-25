import type { ReactNode } from "react";
import { cn } from "@/shared";

interface PanelProps {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
}
export const DetailPanel = ({ children, ariaLabel, className }: PanelProps) => {
  return (
    <aside
      aria-label={ariaLabel}
      className={cn("lg:col-span-5 lg:sticky lg:top-24", className)}
    >
      <div className="rounded-3xl bg-card text-card-foreground p-8 shadow-sm border border-border space-y-6">
        {children}
      </div>
    </aside>
  );
};
