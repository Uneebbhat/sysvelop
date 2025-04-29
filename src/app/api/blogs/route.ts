import { dbConnect } from "@/config/dbConnect";
import Blog from "@/models/BlogModel.model";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const getAllBlogs = await Blog.find();
    if (!getAllBlogs) {
      return NextResponse.json({ message: "No blogs found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Blogs fetched successfully",
        length: getAllBlogs.length,
        data: getAllBlogs,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  await dbConnect();

  const { authorId, title, tags, description, content } = await req.json();

  try {
    const newBlog = await Blog.create({
      authorId,
      title,
      tags,
      description,
      content,
    });
    if (!newBlog) {
      return NextResponse.json(
        { error: "An error occured while creating the blog" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Blog created successfully", data: newBlog },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
