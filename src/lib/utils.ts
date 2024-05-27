import { type ClassValue, clsx } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";
const uri = process.env.MONGO 

// const clientOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function connectToDB() {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log("NAO CONECTOU POR", error)
  }
  
}

// export async function disconnectDb() {
//   await mongoose.disconnect()
// }
