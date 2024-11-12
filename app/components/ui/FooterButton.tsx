"use client"
import React from "react";
import { useRouter } from "next/navigation";
interface Tbutton {
  btnText: string;
  btnText2: string;
}
const FooterButton = ({ btnText, btnText2 }: Tbutton) => {
  const route = useRouter();
  return (
    <>
      <div className="flex gap-4 lg:items-center lg:flex-row flex-col">
        <button onClick={()=> route.push("/orderonline")} className="rounded-md bg-primary text-white hover:bg-white duration-500 hover:text-black py-[0.5rem] px-5 text-[1rem] font-medium">
          {btnText}
        </button>
        <button className="rounded-md border bg-transparent text-white hover:bg-white duration-500 hover:text-black py-[0.5rem] px-5 text-[1rem] font-medium">
          {btnText2}
        </button>
      </div>
    </>
  );
};

export default FooterButton;
