import { Skeleton } from "./Skeleton";

const PostSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Skeleton className="w-[316px] h-[375px]" />
      </div>
      <Skeleton className="w-[316px] h-[24px]" />
      <Skeleton className="w-[316px] h-[95px]" />
      <Skeleton className="w-[316px] h-[120px]" />
      <Skeleton className="w-[316px] h-[24px]" />
    </div>
  );
};

export default PostSkeleton;
