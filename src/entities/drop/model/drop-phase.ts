import { DropStatus } from "./drop-type";

interface DropTimingState {
  phase: DropStatus;
  targetMs: number;
}

export function getDropTimingState(
  startsAtIso: string,
  endsAtIso: string,
  nowMs: number,
): DropTimingState {
  const startsMs = new Date(startsAtIso).getTime();
  const endsMs = new Date(endsAtIso).getTime();

  if (nowMs < startsMs) {
    return { phase: "SCHEDULED", targetMs: startsMs };
  }

  if (nowMs < endsMs) {
    return { phase: "LIVE", targetMs: endsMs };
  }

  return { phase: "ENDED", targetMs: endsMs };
}
