import { Drop, UpcomingDropCard } from "@/entities/drop";

type Props = {
  drops: Drop[];
};

export const UpcomingDrops = ({ drops }: Props) => {
  return (
    <section aria-labelledby="upcoming-drops-heading" className="space-y-6">
      <div>
        <h2
          id="upcoming-drops-heading"
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Upcoming Drops.{" "}
          <span className="text-muted-foreground font-semibold">
            Mark your calendar.
          </span>
        </h2>
      </div>
      <div className="divide-y divide-border overflow-hidden rounded-3xl bg-card shadow-sm border border-border">
        {drops.map((drop) => (
          <UpcomingDropCard key={drop.id} {...drop} />
        ))}
      </div>
    </section>
  );
};
