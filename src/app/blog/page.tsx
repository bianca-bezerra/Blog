/* eslint-disable react/jsx-key */

import { AllPosts } from "@/components/post/allPosts";
import { Suspense } from "react";
import Loading from "./loading";
import { Button } from "@/components/button/button";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="flex flex-col justify-center items-center content-center">
      <Link href={"/blog/add-post"}>
        <Button className="text-white bg-orange-600 font-bold hover:bg-orange-700">
          Add new post
        </Button>
      </Link>

      <h1 className="text-white text-4xl font-bold">All posts</h1>
      <Suspense fallback={<Loading />}>
        <AllPosts />
      </Suspense>
    </div>
  );
};

export default BlogPage;
