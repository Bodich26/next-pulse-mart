export function dropFormatStartDate(startsAtIso: string): string {
  const date = new Date(startsAtIso);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}
