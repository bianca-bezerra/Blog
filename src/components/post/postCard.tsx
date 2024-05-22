import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

interface postProps {
  post: {
    photo_url: string;
    title: string;
    description: string;
    date: string;
    link: string;
  };
}

function PostCard({ post }: postProps) {
  return (
    <Card className="bg-transparent border-hidden text-white p-0 flex flex-col gap-5 h-auto">

      <CardHeader className="flex flex-row p-0 items-center space-y-0">
        <Image src={post.photo_url} height={300} width={300} alt="photo" />
        <h1 className="rotate-90">{post.date}</h1>
      </CardHeader>

      <CardContent className="p-0 flex flex-col gap-3">
        <h1 className="font-s text-2xl">{post.title}</h1>
        <p>{post.description}</p>
      </CardContent>

      <CardFooter className="p-0">
        <Link className="font-b" href={post.link}>READ MORE</Link>
      </CardFooter>

    </Card>
  );
}

export default PostCard;
