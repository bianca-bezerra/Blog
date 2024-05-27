import { getPosts } from "@/lib/data";
import React from "react";
import PostCard from "./postCard";

export const AllPosts = async () => {
  const posts = await getPosts();
  
  return (
    <div className="grid grid-cols-3 gap-20 pt-8">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

