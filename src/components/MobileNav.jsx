"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center ">
        <CiMenuFries className="text-[32px] text-accent-DEFUALT " />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <div className="mt-32 mb-32 text-2xl text-center md:mt-16 md:mb-6">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ziyin Ab<span className="text-accent-DEFUALT">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent-DEFUALT border-b-2 border-accent-DEFUALT"
                } texl-xl capitalize hover:text-accent-DEFUALT transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
