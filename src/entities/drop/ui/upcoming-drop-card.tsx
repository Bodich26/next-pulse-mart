import Image from "next/image";
import Link from "next/link";
import { UpcomingDropCardProps } from "../model/drop-type";
import { dropFormatStartDate } from "../model/drop-format-time";
import { StatusStyles } from "@/shared";

export const UpcomingDropCard = ({
  id,
  lotNumber,
  startsAtIso,
  image,
  title,
  miniDescription,
  slug,
  status,
}: UpcomingDropCardProps) => {
  return (
    <article
      key={id}
      className="flex flex-col justify-between gap-4 p-6 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center sm:gap-6"
    >
      <div className="flex min-w-0 flex-1 items-start gap-4 sm:items-center sm:gap-5">
        <div className="relative h-16 w-16 shrink-0 rounded-2xl border border-border/40">
          <Image
            src={image}
            alt={title}
            fill
            sizes="64px"
            className="object-contain p-1"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground tabular-nums">
              {lotNumber}
            </span>
            <StatusStyles status={status} className=" text-sm" />
          </div>

          <h3 className="mt-1.5 truncate text-base font-semibold text-foreground">
            {title}
          </h3>

          <p className="mt-0.5 text-sm text-muted-foreground">
            {miniDescription}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border pt-4 sm:shrink-0 sm:flex-col sm:items-end sm:justify-center sm:gap-2 sm:border-t-0 sm:pt-0">
        <time
          dateTime={startsAtIso}
          className="whitespace-nowrap text-sm font-semibold text-muted-foreground tabular-nums sm:order-2"
        >
          {dropFormatStartDate(startsAtIso)}
        </time>

        <Link
          href={`/drop/${slug}`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:order-1"
        >
          <span>Watch Now</span>
        </Link>
      </div>
    </article>
  );
};
