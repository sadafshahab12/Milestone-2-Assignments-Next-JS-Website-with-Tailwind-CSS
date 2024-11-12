import React from "react";

interface Tbutton {
  btnText: string;
}
const Button = ({ btnText }: Tbutton) => {
  return (
    <>
      <button className="rounded-md bg-primary hover:bg-black duration-500 text-white py-[0.5rem] px-5 text-[1rem] font-medium xs:w-auto w-[12.5rem] ">
        {btnText}
      </button>
    </>
  );
};

export default Button;
