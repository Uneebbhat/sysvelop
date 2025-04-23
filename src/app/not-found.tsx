import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-2xl container mx-auto flex flex-col items-center">
        <Image
          src="/not-found.png"
          alt="404 Not Found"
          width={400}
          height={400}
          className="mb-8 mx-auto"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="primary">Back to Home</Button>
          </Link>
          <Link href="/contact">
            <Button className="secondary">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
