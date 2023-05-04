import { IconExternalLink } from "@tabler/icons-react";
import { NextPage } from "next";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

type ExternalLinkProps = {
  href: Url;
  children: ReactNode;
};

const ExternalLink: NextPage<ExternalLinkProps> = (props) => {
  return (
    <Link
      href={props.href}
      className="text-coffee-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
      <IconExternalLink className="mb-[0.1rem] inline h-4" />
    </Link>
  );
};

export default ExternalLink;
