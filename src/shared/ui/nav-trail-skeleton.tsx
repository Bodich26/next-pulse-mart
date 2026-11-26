import { Skeleton } from "./skeleton";

export const NavTrailSkeleton = () => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Skeleton className="h-4 w-12 rounded-md" />
      <Skeleton className="h-4 w-3 rounded-md" />
      <Skeleton className="h-4 w-16 rounded-md" />
      <Skeleton className="h-4 w-3 rounded-md" />
      <Skeleton className="h-4 w-24 rounded-md" />
    </div>
  );
};
