"use client";

import { NextPage } from "next";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import Footer from "@/components/footer";

const NotFound: NextPage = () => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const pathArray = path.split("/");

    if (pathArray[1] !== "r") router.replace(`/r${path}`);
  }, [path, router]);

  return (
    <body className="h-screen bg-neutral-300 p-8 text-center font-koruri text-lg text-coffee-700">
      <div className="m-auto w-fit rounded-xl bg-neutral-100 p-4">
        <h1>404 Not Found!!</h1>
        <p>このページに内容はないようです。</p>
        <p>空間が空いていて寂しいので茄子の揚げびたしでも見てください。</p>
        <Image src="/nasu.jpg" alt="茄子の揚げびたし" className="h-96" />
      </div>
      <Footer />
    </body>
  );
};

export default NotFound;
