import { DropStatus } from "@/entities/drop";

export const STATUS_LABEL: Record<DropStatus, string> = {
  SCHEDULED: "Starts In",
  LIVE: "Time Remaining",
  ENDED: "Drop Ended",
};
