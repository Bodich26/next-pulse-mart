import { Skeleton } from "@/shared";

export const HeaderNavSkeleton = () => {
  return (
    <div className="flex  gap-6">
      <Skeleton className="w-[41px] h-[16px] rounded-2xl" />
      <Skeleton className="w-[41px] h-[16px] rounded-2xl" />
      <Skeleton className="w-[41px] h-[16px] rounded-2xl" />
      <Skeleton className="w-[41px] h-[16px] rounded-2xl" />
    </div>
  );
};
