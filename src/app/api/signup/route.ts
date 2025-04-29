import { dbConnect } from "@/config/dbConnect";
import User from "@/models/UserModel.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  dbConnect();

  const { name, email, password } = await req.json();

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (!newUser) {
      return NextResponse.json(
        { error: "An error occured while creating your account" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Account created successfully", data: newUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 5000 }
    );
  }
}
