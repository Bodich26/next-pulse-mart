import { cn } from "cn";
import { PHASE_STYLES } from "../config";
import { DropStatus } from "@/entities/drop";

interface DropStatusBadgeProps {
  status: DropStatus;
  className?: string;
}

export const StatusStyles = ({ status, className }: DropStatusBadgeProps) => {
  const currentStyle = PHASE_STYLES[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 font-semibold",
        className,
        currentStyle.pill,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", currentStyle.dot)} />
      <span>{currentStyle.label}</span>
    </span>
  );
};
