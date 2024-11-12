"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
interface TNavbar {
  logo: string;
  page1: string;
  page2: string;
  page3: string;
  page4: string;
  registerBtn: string;
}

const Navbar = ({ logo, page1, page2, page3, page4, registerBtn }: TNavbar) => {
  const route = useRouter();
  const [left, setLeft] = useState("-100%");

  function handleMenu() {
    setLeft(left === "-100%" ? "0%" : "-100%");
  }
  function closeMenu() {
    setLeft("-100%");
  }
  return (
    <>
      <header className="bg-slate-900 sticky top-0 left-0 w-[100%] navbar flex h-[4rem] justify-between items-center py-3 xs:px-14 px-5 shadow-md z-[100]">
        <div className="logo font-bold xs:text-[1.5rem] text-[1.2rem] text-primary">
          <Link href="/">
            <h1 className="cursor-pointer">{logo}</h1>
          </Link>
        </div>
        <nav className="navlinks space-x-10 text-[1rem] text-gray-300 hidden md:block">
          <Link
            href="/"
            className="cursor-pointer hover:text-white duration-500 font-medium"
          >
            {page1}
          </Link>
          <Link
            href="/menu"
            className="cursor-pointer hover:text-white duration-500 font-medium"
          >
            {page2}
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer hover:text-white duration-500 font-medium"
          >
            {page3}
          </Link>
          <Link
            href="/orderonline"
            className="cursor-pointer hover:text-white duration-500 font-medium"
          >
            {page4}
          </Link>
        </nav>
        <div>
          <button
            className="button rounded-md bg-primary text-white py-1 px-5 text-[1rem] cursor-pointer hover:bg-white hover:text-black duration-500 font-medium md:block hidden"
            onClick={() => route.push("/contact")}
          >
            {" "}
            {registerBtn}
          </button>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          width={20}
          height={20}
          className="cursor-pointer xs:text-[2rem] text-[1.5rem] text-white md:hidden block"
          onClick={handleMenu}
        />
      </header>

      <nav
        className={`mob-navlinks fixed top-[3.5rem] left-${left} w-full bg-slate-900 text-[1rem] text-gray-300 block md:hidden sm:pl-14 pl-7 py-7 sm:space-y-8 space-y-4 h-screen transition-all duration-700 ease-in-out z-[100]`}
        style={{
          left: left, // Dynamically set 'left' to control the slide in/out
          opacity: left === "0%" ? 1 : 0, // Add fade effect
        }}
      >
        <div>
          <Link
            href="/"
            className="cursor-pointer hover:bg-white hover:text-slate-700 py-2 px-5 duration-500 font-medium inline-block rounded-md"
            onClick={closeMenu}
          >
            {page1}
          </Link>
        </div>
        <div>
          <Link
            href="/menu"
            className="cursor-pointer hover:bg-white hover:text-slate-700 py-2 px-5 duration-500 font-medium inline-block rounded-md"
            onClick={closeMenu}
          >
            {page2}
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            className="cursor-pointer hover:bg-white hover:text-slate-700 py-2 px-5 duration-500 font-medium inline-block rounded-md"
            onClick={closeMenu}
          >
            {page3}
          </Link>
        </div>
        <div>
          <Link
            href="/orderonline"
            className="cursor-pointer hover:bg-white hover:text-slate-700 py-2 px-5 duration-500 font-medium inline-block rounded-md"
            onClick={closeMenu}
          >
            {page4}
          </Link>
        </div>

        <button
          className="button rounded-md bg-primary text-white py-2 px-5 text-[1rem] cursor-pointer hover:bg-white hover:text-black duration-500 font-medium"
          onClick={() => route.push("/contact")}
        >
          {registerBtn}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
