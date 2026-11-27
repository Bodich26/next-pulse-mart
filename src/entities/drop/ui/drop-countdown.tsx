"use client";
import { useEffect, useState } from "react";
import { Clock, Package } from "lucide-react";
import { DropStatus, TimeParts } from "../model/drop-type";
import { getRemainingParts, INITIAL_TIME } from "../model/drop-remaining-part";
import { getDropTimingState } from "../model/drop-phase";
import { StatusStyles } from "@/shared";

interface DropCountdownProps {
  startsAtIso: string;
  endsAtIso: string;
  antiSnipeLabel?: string;
  onExpire?: () => void;
  onPhaseChange?: (phase: DropStatus) => void;
}

export const DropCountdown = ({
  startsAtIso,
  endsAtIso,
  antiSnipeLabel = "Anti-Snipe: +30s",
  onExpire,
  onPhaseChange,
}: DropCountdownProps) => {
  const [status, setStatus] = useState<DropStatus>("SCHEDULED");
  const [time, setTime] = useState<TimeParts>(INITIAL_TIME);

  useEffect(() => {
    let expiredNotified = false;
    let lastStatus: DropStatus | undefined;

    const syncTime = () => {
      const nowMs = Date.now();
      const state = getDropTimingState(startsAtIso, endsAtIso, nowMs);

      if (state.phase !== lastStatus) {
        lastStatus = state.phase;
        setStatus(state.phase);
        onPhaseChange?.(state.phase);
      }

      setTime(getRemainingParts(state.targetMs, nowMs));
      if (state.phase === "ENDED" && !expiredNotified) {
        expiredNotified = true;
        onExpire?.();
      }
    };

    const initialTimer = setTimeout(syncTime, 0);
    const intervalId = setInterval(syncTime, 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalId);
    };
  }, [startsAtIso, endsAtIso, onExpire, onPhaseChange]);

  const endsMs = new Date(endsAtIso).getTime();

  return (
    <>
      <div className="flex items-center justify-between text-xs font-medium">
        <span className="flex items-center gap-2 font-bold text-foreground">
          <Package className="h-4 w-4 text-primary" />
          <span>Current Drop</span>
        </span>
        <StatusStyles status={status} />
      </div>

      <div className="mt-6 rounded-2xl border border-border/60 bg-muted/40 p-5">
        <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>Time Remaining</span>
          </span>
          <span>{status === "LIVE" ? antiSnipeLabel : status}</span>
        </div>

        <time
          dateTime={new Date(endsMs).toISOString()}
          className="mt-2 block text-3xl font-bold tracking-tight text-foreground sm:text-4xl tabular-nums"
        >
          {time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
        </time>
      </div>
    </>
  );
};
