import { NextPage } from "next";
import { ReactNode } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

type rootLayoutProps = {
  children: ReactNode;
};

const RootLayout: NextPage<rootLayoutProps> = (props) => {
  return (
    <body className="mx-auto flex h-screen max-w-6xl flex-col justify-between bg-neutral-300 font-koruri text-lg text-coffee-700">
      <Header />
      <div className="scroll flex grow flex-col overflow-y-scroll rounded-xl">
        <div className="grow rounded-xl bg-neutral-100 p-6 drop-shadow">{props.children}</div>
        <Footer />
      </div>
    </body>
  );
};

export default RootLayout;
