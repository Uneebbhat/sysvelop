// hooks/useGetBlogById.ts
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

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

export default function useGetBlogById(): { blog: Blog | undefined } {
  const [blog, setBlog] = useState<Blog | undefined>(undefined);
  const params = useParams() as { blogId: string };

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`/api/blogs/${params.blogId}`);
      setBlog(res.data.data);
      // console.log(res.data.data);
    };

    if (params?.blogId) fetchBlog();
  }, [params?.blogId]);

  return { blog };
}
