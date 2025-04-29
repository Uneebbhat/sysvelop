"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface IBlog {
  _id: string;
  authorId: string;
  title: string;
  tags: string[];
  description: string;
  content: string;
}
[];

const useGetAllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data.data);
      // console.log(res.data);
    };
    fetchAllBlogs();
  }, []);

  return { blogs };
};

export default useGetAllBlogs;
