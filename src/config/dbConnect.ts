import mongoose from "mongoose";

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
  } catch (error: any) {
    console.log("Something went wrong", error);
  }
};
