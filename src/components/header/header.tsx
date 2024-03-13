import {
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";
import HeaderMenu from "./header-menu";

const Header = () => {
  return (
    <Navbar>
      <NavbarContent justify="start">
        <HeaderMenu />
        <NavbarItem>
          <NavbarBrand>
            <Link href="/" className="font-bold text-3xl">
              Home
            </Link>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};
export default Header;
