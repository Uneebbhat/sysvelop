import mongoose from "mongoose";
import { NextResponse } from "next/server";

console.log(process.env.MONGODB_URI);

export const dbConnect = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error(
        "❌ MongoDB URI is not defined in the environment variables."
      );
      process.exit(1);
    }
    const conn = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Internal Server Error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
