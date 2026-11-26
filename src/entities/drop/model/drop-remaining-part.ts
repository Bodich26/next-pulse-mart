import { TimeParts } from "./drop-type";

export const INITIAL_TIME: TimeParts = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

export function pad2(value: number): string {
  return String(Math.max(0, value)).padStart(2, "0");
}

export function getRemainingParts(targetMs: number, nowMs: number): TimeParts {
  const diff = Math.max(0, targetMs - nowMs);
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: pad2(days),
    hours: pad2(hours),
    minutes: pad2(minutes),
    seconds: pad2(seconds),
  };
}
