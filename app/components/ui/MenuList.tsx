import React from "react";
import Link from "next/link";

interface TCategories {
  cata: string;
}
const MenuList = ({ cata }: TCategories) => {
  return (
    <>
      <div className="hover:bg-slate-800 border border-slate-700 py-2 px-4 rounded-full hover:text-white  duration-500 cursor-pointer">
        {" "}
        <Link href="/">{cata}</Link>
      </div>
    </>
  );
};

export default MenuList;
