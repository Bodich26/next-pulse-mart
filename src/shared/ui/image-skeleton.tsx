import { Image as ImageIcon } from "lucide-react";
import { Skeleton } from "./skeleton";

export const ImageSkeleton = () => {
  return (
    <Skeleton className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl">
      <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
    </Skeleton>
  );
};
