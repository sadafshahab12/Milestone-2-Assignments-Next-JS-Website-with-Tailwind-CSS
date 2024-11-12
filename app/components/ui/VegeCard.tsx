import React from "react";
import Image from "next/image";
import BlackBtn from "@/app/components/ui/BlackBtn";

interface TVegeCard {
  img: string;
  name: string;
  description: string;
  price: string;
}
const VegeCard = ({ img, name, description, price }: TVegeCard) => {
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-2 bg-gradient-to-t from-orange-400 to-slate-200 shadow-lg p-5 items-center rounded">
        <div className="content sm:space-y-6 space-y-3 overflow-hidden ">
          <h1 className="md:text-[1.5rem] text-[1.3rem] font-bold">{name}</h1>
          <p className="text-[1rem] tracking-wide">{description}</p>
          <div className="image w-[16rem] h-[10rem] xss:w-[25rem] xss:h-[16rem] xs:w-[16rem] xs:h-[15rem] sm:w-[16rem] sm:h-[10rem] xs:justify-self-start  sm:justify-self-center md:hidden sm:block xs:hidden block">
            <Image
              src={img}
              alt="apetizers"
              width={500}
              height={500}
              className="w-full h-full object-cover "
            />
          </div>
          <p className="text-[1.2rem] font-semibold">${price}</p>
          <BlackBtn btnText="Order Now" />
        </div>
        <div className="image lg:w-[15rem] md:w-[12rem] sm:w-[10rem] lg:h-[14rem] md:h-[12rem] sm:h-[10rem] rounded-lg justify-self-center md:block sm:hidden xs:block hidden ">
          <Image
            src={img}
            alt="apetizers"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default VegeCard;
