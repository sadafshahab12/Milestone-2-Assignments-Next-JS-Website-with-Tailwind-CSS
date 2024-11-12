import React from "react";

interface TInput {
  type: string;
  placeholder?: string;
  name?: string;
  value?: string;
  id?: string;
}
const OrderInput = ({ type, placeholder, name, value, id }: TInput) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        className="border border-slate-700 outline-none py-2 px-3 rounded w-full text-[0.9rem] placeholder:text-slate-700 focus:shadow-md duration-500"
      />
    </>
  );
};

export default OrderInput;
