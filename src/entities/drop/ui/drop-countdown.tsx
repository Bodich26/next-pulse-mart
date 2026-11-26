"use client";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { TimeParts } from "../model/drop-type";
import { getRemainingParts, INITIAL_TIME } from "../model/drop-remaining-part";

interface DropCountdownProps {
  targetDate: string | Date;
  antiSnipeLabel?: string;
  onExpire?: () => void;
}

export const DropCountdown = ({
  targetDate,
  antiSnipeLabel = "Anti-Snipe: +30s",
  onExpire,
}: DropCountdownProps) => {
  const targetMs = new Date(targetDate).getTime();
  const [time, setTime] = useState<TimeParts>(INITIAL_TIME);

  useEffect(() => {
    let expiredNotified = false;

    const syncTime = () => {
      const nowMs = Date.now();
      setTime(getRemainingParts(targetMs, nowMs));

      if (nowMs >= targetMs && !expiredNotified) {
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
  }, [targetMs, onExpire]);

  return (
    <div className="mt-6 rounded-2xl border border-border/60 bg-muted/40 p-5">
      <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5 text-primary" />
          <span>Time Remaining</span>
        </span>
        <span>{antiSnipeLabel}</span>
      </div>

      <time
        dateTime="P2DT14H59M32S"
        className="mt-2 block text-3xl font-bold tracking-tight text-foreground sm:text-4xl tabular-nums"
      >
        {time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
      </time>
    </div>
  );
};
