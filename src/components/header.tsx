import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="w-full bg-gray-800 text-white z-10">
      <nav className="container flex flex-wrap items-center justify-between mx-auto px-8 py-4">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/performance">performance</Link>
          <Link href="/reliability">reliability</Link>
          <Link href="/scale">scale</Link>
          <Link href="/snippets">snippets</Link>
          <Link href="/discuss">Discuss</Link>
        </div>
      </nav>
    </div>
  );
};
export default Header;
