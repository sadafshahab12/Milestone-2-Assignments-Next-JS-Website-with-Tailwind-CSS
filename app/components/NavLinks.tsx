import React from "react";
import Link from "next/link";
interface TNavbar {
  page1: string;
  page2: string;
  page3: string;
  page4: string;
}
const NavLinks = ({ page1, page2, page3, page4 }: TNavbar) => {
  return (
    <>
      <nav className="navlinks flex flex-col justify-center  space-y-3 text-[0.9rem] text-orange-300">
        <Link
          href="/"
          className="cursor-pointer hover:text-gray-100 duration-500 font-medium"
        >
          {page1}
        </Link>
        <Link
          href="/menu"
          className="cursor-pointer hover:text-gray-100 duration-500 font-medium"
        >
          {page2}
        </Link>
        <Link
          href="/contact"
          className="cursor-pointer hover:text-gray-100 duration-500 font-medium"
        >
          {page3}
        </Link>
        <Link
          href="/orderonline"
          className="cursor-pointer hover:text-gray-100 duration-500 font-medium"
        >
          {page4}
        </Link>
      </nav>
    </>
  );
};

export default NavLinks;
