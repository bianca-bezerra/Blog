import axios from "axios";
import { revalidatePath } from "next/cache";

export const getPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  revalidatePath("/blog");
  console.log(res.data);
  return res.data;
};

export const getPost = async (slug: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  if (res.status != 200) {
    throw new Error("deu ruim");
  }
  return res.data;
};

export const getAuthor = async (userId: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (res.status != 200) {
    throw new Error("deu ruim");
  }
  return res.data;
};
