"use server";

import axios from "axios";
import { Post } from "./models";
import { connectToDB } from "./utils";

export async function addPost(formData: FormData) {
  const post = {
    title: formData.get("title"),
    body: formData.get("body"),
    userId: "1"
  };
  console.log("POST",post)
  connectToDB();
  const newPost = new Post(post);
  try {
    await newPost.save();
    console.log("sucessoa ao salvar no bd")
  } catch (error) {
    console.log("erro ao salvar post no bd")
  }
}

export async function addMensage(data: FormData) {
  const form_data = {
    name: data.get("name"),
    email: data.get("email"),
    number: data.get("phone"),
    mensage: data.get("mensage"),
  };
  
}

