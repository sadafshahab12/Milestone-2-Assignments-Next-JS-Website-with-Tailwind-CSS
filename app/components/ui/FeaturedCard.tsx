import Image from "next/image";
import React from "react";

interface TCard {
  dishSrc: string;
  dishName: string;
  dishDescription: string;
  dishPrice: number;
}
const FeaturedCard = ({
  dishSrc,
  dishName,
  dishDescription,
  dishPrice,
}: TCard) => {
  return (
    <div className="border rounded-lg shadow-lg">
      <div className="image lg:h-[15rem] md:h-[13rem] xs:h-[20rem] h-[12rem] rounded-tr-lg rounded-tl-lg overflow-hidden">
        <Image
          src={dishSrc}
          width={500}
          height={500}
          alt="card-image"
          className="w-full h-full object-cover rounded-tr-lg rounded-tl-lg duration-500 hover:scale-110 "
        />
      </div>
      <div className="lg:space-y-7 xs:space-y-4 space-y-2  lg:p-8 md:p-3 xs:p-8 p-4 bg-white rounded-bl-lg rounded-br-lg">
        <h1 className="lg:text-[1.3rem] md:text-[1rem] xs:text-[1.3rem] text-[1.1rem] font-bold">{dishName}</h1>
        <p className="md:text-[0.9rem] xs:text-[1rem] text-[0.9rem]   tracking-wide leading-6 text-gray-600">{dishDescription}</p>
        <p className="lg:text-[1.4rem] md:text-[1.2rem] xs:text-[1.4rem] text-[1.2rem]">${dishPrice}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
