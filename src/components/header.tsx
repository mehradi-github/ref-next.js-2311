import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div>
      <Link href="/"></Link>
      <Link href="/performance">performance</Link>
      <Link href="/reliability">reliability</Link>
      <Link href="/scale">scale</Link>
    </div>
  );
};
export default Header;
