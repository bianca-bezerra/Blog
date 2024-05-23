import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getAuthor, getPost } from "@/lib/data";
import Image from "next/image";
import React from "react";



const SinglePostPage = async ({params}) => {
  const {slug} = params

  const post = await getPost(slug)
  const userId = post["userId"]
  const author = await getAuthor(userId)
  
  return (
    <div className="flex flex-row gap-16 text-white max-md:flex-col max-md:items-center max-md:gap-10 ">
      <div className="w-1/3 max-md:w-full flex flex-col gap-5 max-md:items-center">
        <h1 className="max-h-1/4 font-b text-4xl md:hidden">{post["title"]}</h1>
        <Image
          src="/winding-tree-towers-over-landscape.jpg"
          height={550}
          width={550}
          alt="tree"
        />
      </div>
      <div className="flex flex-col gap-10 w-2/3 max-md:w-full">
        <div className="flex flex-col gap-5">
          <h1 className="max-h-1/4 font-b text-4xl max-md:hidden">
            {post["title"]}
          </h1>

          <div className="flex flew-row gap-5">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/chorro-timido.JPG" height={40} width={40} />
            </Avatar>

            <div>
              <h1 className="font-s opacity-50">Author:</h1>
              <span>{author["name"]}</span>
            </div>

            <div>
              <h1 className="font-s opacity-50">Published:</h1>
              <span>May 8 2024</span>
            </div>
          </div>
        </div>

        <p className="h-full">
          {post["body"]}
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
