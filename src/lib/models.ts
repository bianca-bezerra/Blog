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

interface IMensage {

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

const mensageSchema = new Schema<IMensage>({
  name: {
    type: String
  }
  email:,
  number: 
  mensage: 
});

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export const Post =  mongoose.models.Post || mongoose.model<IPost>("Post",postSchema)