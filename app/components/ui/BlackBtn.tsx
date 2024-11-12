import React from "react";

interface Tbutton {
  btnText: string;
}
const BlackBtn = ({ btnText }: Tbutton) => {
  return (
    <div>
      <button className="rounded-md bg-black  text-white py-[0.5rem] px-5 lg:text-[1rem] text-[0.8rem] font-medium">
        {btnText}
      </button>
    </div>
  );
};

export default BlackBtn;
