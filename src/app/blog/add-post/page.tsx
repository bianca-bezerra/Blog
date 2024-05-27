import { Button } from "@/components/button/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addPost } from "@/lib/actions";
import React from "react";

const PostForm = () => {
  return (
    <Card className="bg-orange-700 flex flex-col justify-center border-0 font-semibold text-white w-1/3 self-center">
      <CardHeader>
        <p className="text-3xl font-bold">New post</p>
      </CardHeader>
      <CardContent>
        <form action={addPost} className="flex flex-col gap-2">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            className="rounded-md text-black text-base p-2"
            placeholder="title"
          />
          <label htmlFor="">Body</label>
          <input
            type="text"
            name="body"
            className="rounded-md text-black text-base p-2"
            placeholder="body"
          />
          <br />
          <Button type="submit">submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
