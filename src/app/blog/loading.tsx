import PostSkeleton from "@/components/skeleton/PostSkeleton";
import { Skeleton } from "@/components/skeleton/Skeleton";
import React from "react";

export default function Loading(){
  return (
    <div className="h-full w-full flex flex-row flex-wrap justify-center pt-10 gap-16">
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
    </div>
  );
};
