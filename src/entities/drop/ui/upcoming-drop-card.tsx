import Image from "next/image";
import Link from "next/link";
import { UpcomingDropCardProps } from "../model/drop-type";
import { dropFormatStartDate } from "../model/drop-format-time";

export const UpcomingDropCard = ({
  id,
  lotNumber,
  startsAtIso,
  image,
  title,
  miniDescription,
  slug,
}: UpcomingDropCardProps) => {
  return (
    <article
      key={id}
      className="flex flex-col justify-between gap-4 p-6 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center"
    >
      <div className="flex items-center gap-5">
        <div className="relative h-16 w-16 rounded-2xl border border-border/40">
          <Image
            src={image}
            alt={title}
            fill
            sizes="64px"
            className="object-contain p-1"
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground">
            <span>{lotNumber} - </span>
            {title}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
            {miniDescription}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-4 sm:border-t-0 sm:pt-0">
        <Link
          href={`/drop/${slug}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <span>Watch Now</span>
        </Link>
        <time
          dateTime={startsAtIso}
          className="hidden w-12 tabular-nums sm:block text-sm font-semibold text-muted-foreground "
        >
          {dropFormatStartDate(startsAtIso)}
        </time>
      </div>
    </article>
  );
};
