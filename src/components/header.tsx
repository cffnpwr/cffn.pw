import { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <header className="z-50 my-4 flex items-center justify-between rounded-xl bg-neutral-100 p-6 text-coffee-700 drop-shadow">
      <h1>
        <Link href="/r" className="font-sans-forgetica">
          cffn.pw/r
        </Link>
      </h1>
      <div>
        <Link href="/r/about" className="mx-4 text-xl hover:underline">
          About
        </Link>
        <Link href="/r/works" className="mx-4 text-xl hover:underline">
          Works
        </Link>
        <Link href="/r/gyagu" className="mx-4 text-xl hover:underline">
          Gyagu
        </Link>
      </div>
    </header>
  );
};

export default Header;
