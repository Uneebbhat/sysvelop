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

const BlogCard = () => {
  const blogData = [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      description:
        "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
      content:
        "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
      date: "April 25, 2025",
      image: "/web.png",
    },
    {
      id: 2,
      title: "The Future of Web Development in 2025",
      description:
        "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
      content:
        "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
      date: "April 25, 2025",
      image: "/web.png",
    },
    {
      id: 3,
      title: "The Future of Web Development in 2025",
      description:
        "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
      content:
        "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
      date: "April 25, 2025",
      image: "/web.png",
    },
    {
      id: 4,
      title: "The Future of Web Development in 2025",
      description:
        "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
      content:
        "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
      date: "April 25, 2025",
      image: "/web.png",
    },
    {
      id: 5,
      title: "The Future of Web Development in 2025",
      description:
        "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
      content:
        "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
      date: "April 25, 2025",
      image: "/web.png",
    },
    {
      id: 6,
      title: "The Future of Web Development in 2025",
      description:
        "Exploring trends, tools, and technologies that will shape the web development landscape in the coming years.",
      content:
        "Stay ahead of the curve by learning about AI integrations, serverless architecture, and the rise of Jamstack in modern web development.",
      date: "April 25, 2025",
      image: "/web.png",
    },
  ];
  return (
    <>
      {blogData.map((data) => (
        <Card className="w-full rounded-2xl shadow-md" key={data.id}>
          <CardHeader>
            <Image
              src={data.image}
              alt={data.title}
              width={400}
              height={200}
              className="rounded-xl object-cover w-full h-48"
            />
            <CardTitle className="text-xl mt-4">{data.title}</CardTitle>
            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full inline-block w-fit">
              {data.date}
            </span>

            <CardDescription className="text-muted-foreground">
              {data.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground mt-2">
            {data.content}
          </CardContent>
          <CardFooter className="mt-4">
            <Link href={`/blogs/${data.id}`} className="w-full">
              <Button className="primary w-full">Read More</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default BlogCard;
