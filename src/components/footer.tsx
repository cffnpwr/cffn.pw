import { IconCopyright } from "@tabler/icons-react";
import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="my-4 flex items-center justify-center rounded-3xl p-6 text-coffee-700">
      <span>
        <IconCopyright className="mb-[0.1rem] inline h-4" /> 2023 CaffeinePower
      </span>
    </footer>
  );
};

export default Footer;
