import { getPosts } from "@/lib/data";
import React from "react";
import PostCard from "./postCard";

export const AllPosts = async () => {
  const posts = await getPosts();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="flex flex-row gap-16 flex-wrap justify-center pt-10">
      {posts.map((post: { title: string; body: string; id: string }) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

