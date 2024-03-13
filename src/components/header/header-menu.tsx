"use client";

import React from "react";
import {
  Link,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

const HeaderMenu = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { title: "performance", href: "/performance" },
    { title: "reliability", href: "/reliability" },
    { title: "scale", href: "/scale" },
    { title: "snippets", href: "/snippets" },
    { title: "discuss", href: "/discuss" },
  ];
  return (
    <NavbarItem>
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={`${item.href}`}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarItem>

    // <div className="w-full bg-gray-800 text-white z-10">
    //   <nav className="container flex flex-wrap items-center justify-between mx-auto px-8 py-4">

    //     <div className="space-x-4 text-xl">
    //       <Link href="/performance">performance</Link>
    //       <Link href="/reliability">reliability</Link>
    //       <Link href="/scale">scale</Link>
    //       <Link href="/snippets">snippets</Link>
    //       <Link href="/discuss">discuss</Link>

    //       <Link href="/api/auth/signin">Sign In</Link>
    //       <Link href="/api/auth/signout">Sign Out</Link>
    //     </div>
    //   </nav>
    // </div>
  );
};
export default HeaderMenu;
