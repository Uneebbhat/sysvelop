"use client";

import React from "react";
import Image from "next/image";
import useGetBlogById from "@/hooks/useGetBlogById";
import Loading from "../loading";

// Define proper types for the blog
interface Blog {
  _id: string;
  title: string;
  content: string;
  description: string;
  createdAt: string;
  author?: string;
  tags?: string[];
  date?: string;
}

const BlogDetail = () => {
  const { blog } = useGetBlogById() as { blog: Blog };

  // Add loading state handling
  if (!blog) {
    return (
      <div className="p-5 md:p-20">
        <div className="container mx-auto max-w-4xl">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-[20px] md:p-[80px]">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Image */}
        <div className="mb-10">
          <Image
            src={"/web.png"}
            alt={blog.title || "Blog post image"}
            width={1200}
            height={600}
            className="rounded-xl w-full h-[300px] object-cover"
          />
        </div>

        {/* Meta Info */}
        <div className="mb-6 text-sm text-muted-foreground flex flex-wrap justify-between items-center">
          <span>
            {blog.createdAt &&
              new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </span>
          {blog.author && <span>By {blog.author}</span>}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {blog.title}
        </h1>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag: string, index: number) => (
              <span
                key={`tag-${index}`}
                className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="prose max-w-none text-gray-800 leading-relaxed prose-p:mb-4">
          {blog.content.split("\n").map((para: string, index: number) => (
            <p key={`para-${index}`}>{para.trim()}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
