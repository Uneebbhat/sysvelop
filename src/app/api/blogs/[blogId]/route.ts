import { dbConnect } from "@/config/dbConnect";
import Blog from "@/models/BlogModel.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { blogId: string } }
) {
  await dbConnect();

  const blogId = context.params.blogId;

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
