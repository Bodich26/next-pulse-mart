import type { ReactNode } from "react";
import { cn } from "@/shared";

interface PanelProps {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
  innerClassName?: string;
  sticky?: boolean;
}

export const DetailPanel = ({
  children,
  ariaLabel,
  className,
  innerClassName,
  sticky = true,
}: PanelProps) => {
  return (
    <aside
      aria-label={ariaLabel}
      className={cn(
        "lg:col-span-5",
        sticky && "lg:sticky lg:top-24",
        className,
      )}
    >
      <div
        className={cn(
          "h-full rounded-3xl bg-card text-card-foreground p-8 shadow-sm border border-border space-y-6",
          innerClassName,
        )}
      >
        {children}
      </div>
    </aside>
  );
};
