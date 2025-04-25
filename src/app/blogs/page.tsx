import BlogCard from "@/components/BlogCard";
import React from "react";

const Blogs = () => {
  return (
    <>
      <section className="p-[20px] md:p-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
