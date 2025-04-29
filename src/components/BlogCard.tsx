"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";

interface IBlog {
  _id: string;
  authorId: string;
  title: string;
  tags: string[];
  description: string;
  content: string;
  createdAt: Date;
}
[];

const BlogCard = () => {
  const { blogs } = useGetAllBlogs();

  // const date = new Date(blogs.createdAt);
  return (
    <>
      {blogs.map((blog: IBlog) => (
        <Card className="w-full rounded-2xl shadow-md" key={blog._id}>
          <CardHeader>
            <Image
              src={"/web.png"}
              alt={"Hello"}
              width={400}
              height={200}
              className="rounded-xl object-cover w-full h-48"
            />
            <CardTitle className="text-xl mt-4">{blog.title}</CardTitle>
            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full inline-block w-fit">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>

            <CardDescription className="text-muted-foreground line-clamp-3 text-ellipsis">
              {blog.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground line-clamp-5 text-ellipsis mt-2">
            {blog.content}
          </CardContent>
          <CardFooter className="mt-4">
            <Link href={`/blogs/${blog._id}`} className="w-full">
              <Button className="primary w-full">Read More</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default BlogCard;
