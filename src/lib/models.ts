import mongoose, { Schema, model } from "mongoose";

interface IPost {
    title: string,
    body: string,
    userId: string
}

interface IUser {
    username: string,
    password: string,
    email: string,
    name: string
}

const postSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true,
        max: 50
    },
    body: {
        type: String,
        required: true,
        max: 300
    },
    userId: {
        type: String,
        required: true
    }
})

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        max: 20,
        min:2
    },
    password: {
        type: String,
        required: true,
        min:6
    }
})

export const User = model<IUser>("User",userSchema) || mongoose.models.User
export const Post = model<IPost>("Post",postSchema) || mongoose.models.Post