import Image from "next/image";
import Link from "next/link";
import { UpcomingDropCardProps } from "../model/drop-type";

export const UpcomingDropCard = ({
  id,
  time,
  image,
  title,
  description,
  countdown,
  slug,
}: UpcomingDropCardProps) => {
  return (
    <article
      key={id}
      className="flex flex-col justify-between gap-4 p-6 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center"
    >
      <div className="flex items-center gap-5">
        <time className="hidden w-12 text-sm font-semibold text-muted-foreground tabular-nums sm:block">
          {time}
        </time>

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
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 border-t border-border pt-4 sm:border-t-0 sm:pt-0">
        <div className="text-left sm:text-right">
          <span className="block text-[11px] font-medium text-muted-foreground">
            Starts in
          </span>
          <time className="text-sm font-semibold text-foreground tabular-nums">
            {countdown}
          </time>
        </div>

        <Link
          href={`/drop/${slug}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <span>Watch Now</span>
        </Link>
      </div>
    </article>
  );
};
