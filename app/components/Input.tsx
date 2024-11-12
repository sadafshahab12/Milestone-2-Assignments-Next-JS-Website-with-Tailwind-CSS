import React from "react";

interface TInput {
  placeHolder: string;
}
const Input = ({ placeHolder }: TInput) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeHolder}
        className="border outline-none py-2 px-3 rounded w-full text-[0.9rem] placeholder:text-slate-500"
      />
    </>
  );
};

export default Input;
