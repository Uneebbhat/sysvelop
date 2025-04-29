import { dbConnect } from "@/config/dbConnect";
import Blog from "@/models/BlogModel.model";
import { NextResponse } from "next/server";

export default async function GET(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  await dbConnect();

  const blogId = params.blogId;

  try {
    const getBlogById = await Blog.findOne({ _id: blogId });
    if (!getBlogById) {
      return NextResponse.json(
        { error: "No blog found with this blogId" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Blog found", data: getBlogById },
      { status: 200 }
    );
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
}
