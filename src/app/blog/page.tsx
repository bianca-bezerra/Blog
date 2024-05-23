/* eslint-disable react/jsx-key */
import PostCard from "@/components/post/postCard";
import { getPosts } from "@/lib/data";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { Key } from "react";
// 



const BlogPage = async () => {
  const posts = await getPosts()
  const author = "Bianca Bezerra"
  return (
    <div className="flex flex-row gap-16 flex-wrap justify-center pt-10">
      {posts.map((post: { title: string; body: string; id: string; }) => (
        <PostCard post={post}/>
      ))}
    </div>
  );
};

export default BlogPage;
