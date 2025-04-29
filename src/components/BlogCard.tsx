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

const BlogCard = () => {
  // const blogblog = [
  //   {
  //     id: 1,
  //     title: "The Future of Web Development in 2025",
  //     description:
  //       "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
  //     content:
  //       "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
  //     date: "April 25, 2025",
  //     image: "/web.png",
  //   },
  //   {
  //     id: 2,
  //     title: "The Future of Web Development in 2025",
  //     description:
  //       "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
  //     content:
  //       "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
  //     date: "April 25, 2025",
  //     image: "/web.png",
  //   },
  //   {
  //     id: 3,
  //     title: "The Future of Web Development in 2025",
  //     description:
  //       "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
  //     content:
  //       "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
  //     date: "April 25, 2025",
  //     image: "/web.png",
  //   },
  //   {
  //     id: 4,
  //     title: "The Future of Web Development in 2025",
  //     description:
  //       "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
  //     content:
  //       "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
  //     date: "April 25, 2025",
  //     image: "/web.png",
  //   },
  //   {
  //     id: 5,
  //     title: "The Future of Web Development in 2025",
  //     description:
  //       "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
  //     content:
  //       "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
  //     date: "April 25, 2025",
  //     image: "/web.png",
  //   },
  //   {
  //     id: 6,
  //     title: "The Future of Web Development in 2025",
  //     description:
  //       "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
  //     content:
  //       "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
  //     date: "April 25, 2025",
  //     image: "/web.png",
  //   },
  // ];

  const { blogs } = useGetAllBlogs();

  // const date = new Date(blogs.createdAt);
  return (
    <>
      {blogs.map((blog: any) => (
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
