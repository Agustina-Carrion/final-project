import { Disclosure } from "@headlessui/react";
import { Link } from "wouter";
import {
  Logo,
  MobileHamburgerMenu,
  MobileHamburgerMenuItems,
  MenuItem,
  NavBarButtons,
} from "../componentExports.js";

function Navbar() {
  const menu = [
    { text: "Home", target: "home" },
    { text: "Contact", target: "contact" },
  ];

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <MobileHamburgerMenu />
                <Logo />
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <div className="inline-flex items-center px-1 pt-1 text-xl font-bold text-gray-900">
                    RIP AA
                  </div>
                  {menu.map((menuItem, index) => (
                    <Link key={index} href={menuItem.target}>
                      <MenuItem
                        key={menuItem.text}
                        text={menuItem.text}
                        target={menuItem.target}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <NavBarButtons />
              </div>
            </div>
          </div>
          <MobileHamburgerMenuItems />
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
