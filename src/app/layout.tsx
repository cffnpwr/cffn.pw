"use client";

import { NextPage } from "next";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import "./globals.css";

type rootLayoutProps = {
  children: ReactNode;
};

const RootLayout: NextPage<rootLayoutProps> = (props) => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const pathArray = path.split("/");

    if (pathArray[1] !== "r") router.replace(`/r${path}`);
  }, [path, router]);

  return (
    <html lang="jp">
      <head></head>
      {props.children}
    </html>
  );
};

export default RootLayout;
