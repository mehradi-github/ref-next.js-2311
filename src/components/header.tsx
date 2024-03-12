"use client";
import { options } from "@/app/api/auth/[...nextauth]/options";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { Fragment } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const session = useSession();
  const menuItems = [
    { title: "performance", href: "/performance" },
    { title: "reliability", href: "/reliability" },
    { title: "scale", href: "/scale" },
    { title: "snippets", href: "/snippets" },
    { title: "discuss", href: "/discuss" },
  ];

  return (
    <Navbar>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-3xl">
            Home
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem>
          {session?.user ? <div>Sing In</div> : <div>Sing Out</div>}
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            {session.data?.user ? (
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            ) : (
              <Avatar />
            )}
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            {session.data?.user ? (
              <DropdownSection>
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="signout" color="danger">
                  <Link href="/api/auth/signout">Sign Out</Link>
                </DropdownItem>
              </DropdownSection>
            ) : (
              <DropdownItem key="signin">
                <Link href="/api/auth/signin">Sign In</Link>
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
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
    </Navbar>
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
export default Header;
