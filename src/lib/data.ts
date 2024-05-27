import axios from "axios";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { Post } from "./models";

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log("Erro em fecth dos posts", error);
    // } finally {
    //   disconnectDb()
    //   console.log("Disconectou do banco")
    // }
    // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // revalidatePath("/blog");
    // console.log(res.data);
    // return res.data;
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDB();
    const post = await Post.find({ slug: slug });
    return post;
  } catch (error) {
    console.log("Erro em fecth do post", error);
    // } finally {
    //   disconnectDb()
    //   console.log("Disconectou do banco")
    // }
    // const res = await axios.get(
    //   `https://jsonplaceholder.typicode.com/posts/${slug}`
    // );
    // if (res.status != 200) {
    //   throw new Error("deu ruim");
    // }
    // return res.data;
  }
};

// export const getAuthor = async (userId: string) => {
//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (res.status != 200) {
//     throw new Error("deu ruim");
//   }
//   return res.data;
// };
