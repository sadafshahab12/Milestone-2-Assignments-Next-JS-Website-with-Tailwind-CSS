import React from "react";
import Image from "next/image";

interface TCTestCard {
  testimonialImg: string;
  clientName: string;
  clientQuote: string;
}
const TestimonialCard = ({
  testimonialImg,
  clientName,
  clientQuote,
}: TCTestCard) => {
  return (
    <>
      <div className="customers-review bg-black p-5 flex flex-col justify-center items-center rounded-lg">
        <div className="customer-img w-[10rem] h-[10rem] rounded-full ">
          <Image
            src={testimonialImg}
            alt="customer"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="pt-5 text-center space-y-3">
          <h2 className="xs:text-[1.4rem] text-[1.1rem] font-bold text-primary">{clientName}</h2>
          <p className="xs:text-[1.1rem] text-[0.9rem]  text-white">{clientQuote}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
