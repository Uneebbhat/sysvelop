import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";

const BlogDetail = () => {
  const blog = {
    id: 1,
    title: "Mastering Full-Stack Development with TypeScript",
    date: "April 25, 2025",
    author: "Uneeb Bhatti",
    image: "/web.png",
    tags: ["TypeScript", "Full-Stack", "Web Development"],
    content: `
      In the ever-evolving world of software development, staying updated with modern tools and frameworks is essential...
      TypeScript offers powerful features such as static typing, interfaces, and strong tooling which make it ideal for both frontend and backend.
      
      On the backend, using TypeScript with Node.js and Express improves code reliability and maintainability. On the frontend, frameworks like React and Next.js leverage TypeScript to provide a more robust developer experience.
      
      Building full-stack applications using a shared language across both client and server unlocks massive productivity benefits, especially in teams and growing codebases.
      
      This article dives into practical use-cases, architecture tips, and real-world examples to help you level up your full-stack development skills with TypeScript.
    `,
  };

  return (
    <section className="p-5 md:p-20">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Image */}
        <div className="mb-10">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={600}
            className="rounded-xl w-full h-[300px] object-cover"
          />
        </div>

        {/* Meta Info */}
        <div className="mb-6 text-sm text-muted-foreground flex flex-wrap justify-between items-center">
          <span>{blog.date}</span>
          <span>By {blog.author}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {blog.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="prose max-w-none text-gray-800 leading-relaxed prose-p:mb-4">
          {blog.content.split("\n").map((para, index) => (
            <p key={index}>{para.trim()}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
