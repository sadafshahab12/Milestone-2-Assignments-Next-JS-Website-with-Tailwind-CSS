"use client"
import React from "react";
import Button from "@/app/components/ui/Button";
import ButtonNoBg from "@/app/components/ui/ButtonNoBg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const route = useRouter();
  return (
    <>
      <section className="lg:p-10 sm:p-5 p-3">
        <div className=" flex-col md:flex-row flex justify-center items-center ">
          <div className="left md:space-y-14 space-y-7 lg:p-10 sm:p-5 xs:p-2 p-0 md:w-[50%] w-full md:text-left text-center">
            <div >
              <h1 className="font-extrabold lg:text-[4rem]  md:text-[2.5rem] xs:text-[3.5rem] text-[2rem]">
                Savor the <span className="text-primary">Flavor</span>
              </h1>
              <p className="lg:text-[1.6rem] md:text-[1.2rem] xs:text-[1.5rem] text-[1.2rem] font-medium">
                Experience the{" "}
                <span className="text-primary font-semibold">best cuisine</span>{" "}
                in town
              </p>
            </div>

            <p className="text-gray-600 xs:text-[1.1rem] text-[0.9rem] text-wrap">
              Welcome to{" "}
              <span className="text-primary font-semibold">TasteBite</span>,
              where flavor meets passion. Our chefs use only the freshest
              ingredients to craft dishes that delight your senses.
            </p>
            <div className="right md:w-[50%] w-full flex justify-center items-center md:hidden ">
              <div className="w-full h-full">
                <Image
                  src="/images/hero2.jpg"
                  alt="burger"
                  width={700}
                  height={500}
             className="rounded-lg"
                />
              </div>
            </div>
            <div className="btns flex xs:flex-row flex-col items-center gap-3">
              <div onClick={()=> route.push("/orderonline")}>

              <Button btnText="Order Now" />
            </div>
              <ButtonNoBg  
                NoBgbtnText="Make a Reservation"
              />
            </div>
          </div>
          <div className="right md:w-[50%] w-full hidden md:flex justify-center items-center">
            <div className="w-[25rem] h-[20rem] md:w-[40rem] md:h-[25rem] lg:w-[50rem] lg:h-[35rem] rounded-full">
              <Image
                src="/images/hero2.jpg"
                alt="burger"
                width={700}
                height={500}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
