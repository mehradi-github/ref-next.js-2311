"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HeaderAuth = () => {
  const session = useSession();

  let avatarNav: React.ReactNode;
  if (session.data?.user) {
    avatarNav = (
      <Avatar
        isBordered
        as="button"
        className="transition-transform"
        color="secondary"
        name={session.data?.user?.name || ""}
        size="sm"
        src={session.data?.user?.image || ""}
      />
    );
  } else {
    avatarNav = <Avatar />;
  }

  let authNav: React.ReactNode;
  if (session.data?.user) {
    authNav = (
      <DropdownSection>
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{session.data?.user?.email || ""}</p>
        </DropdownItem>
        <DropdownItem key="signout" color="danger">
          <Link href="/api/auth/signout">Sign Out</Link>
        </DropdownItem>
      </DropdownSection>
    );
  } else {
    authNav = (
      <DropdownItem key="signin">
        <Link href="/api/auth/signin">Sign In</Link>
      </DropdownItem>
    );
  }

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>{avatarNav}</DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {authNav}
      </DropdownMenu>
    </Dropdown>
  );
};
export default HeaderAuth;
