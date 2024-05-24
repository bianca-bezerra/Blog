/* eslint-disable react/jsx-key */

import { AllPosts } from "@/components/post/allPosts";
import { Suspense } from "react";
import Loading from "./loading";

const BlogPage = () => {
  return (
    <div className="flex flex-col justify-center items-center content-center">
      <h1 className="text-white text-4xl font-bold">All posts</h1>
      <Suspense fallback={<Loading/>}>
        <AllPosts />
      </Suspense>
    </div>
  );
};

export default BlogPage;
