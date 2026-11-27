import { DropStatus } from "@/entities/drop";
import { STATUS_LABEL } from "./status-label";

interface PhaseBadgeStyle {
  pill: string;
  dot: string;
  label: string;
}

export const PHASE_STYLES: Record<DropStatus, PhaseBadgeStyle> = {
  SCHEDULED: {
    pill: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
    label: STATUS_LABEL.SCHEDULED,
  },
  LIVE: {
    pill: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
    label: STATUS_LABEL.LIVE,
  },
  ENDED: {
    pill: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",
    dot: "bg-zinc-500",
    label: STATUS_LABEL.ENDED,
  },
};
