import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

// interface postProps {
//   post: {
//     title: string,
//     body: string,
//     id: string
//   };
// }

function PostCard({ post }: any) {
  return (
    <Card className="bg-transparent border-hidden text-white p-0 flex flex-col gap-5 w-full">
      <CardHeader className="flex flex-row p-0 items-center gap-10">
        <Image
          src="/winding-tree-towers-over-landscape.jpg"
          height={300}
          width={300}
          alt="photo"
        />
      </CardHeader>

      <CardContent className="p-0 flex flex-col gap-3 w-full">
        <h1 className="w-full">May 8</h1>
        <h1 className="font-s text-2xl">{post.title}</h1>
        <p>{post.body}</p>
      </CardContent>

      <CardFooter className="p-0 justify-end">
        <Link className="font-bold hover:text-orange-600 " href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </CardFooter>
    </Card>
  );
}

export default PostCard;
