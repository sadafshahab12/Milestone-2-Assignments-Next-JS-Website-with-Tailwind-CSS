import React from "react";
import Apetizer from "./Apetizer";
import Entrees from "./Entrees";
import Vegetarian from "./Vegetarian";
import Desert from "./Desert";
import Drink from "./Drink";
import MenuList from "./ui/MenuList";

const Menus = () => {
  return (
    <>
      <section>
        <div className="heading bg-menu-bg bg-cover bg-center md:h-[20rem] sm:h-[15rem] xs:h-[10rem] h-[8rem] flex p-5 items-center justify-evenly">
          <h1 className="sm:text-[4rem] xs:text-[2.5rem] text-[1.5rem] font-bold">
            Menu Categories
          </h1>
        </div>
        <div className="categories hidden md:flex justify-center items-center gap-[3rem] h-[4rem] mt-5">
          <MenuList cata="Apetizer" />
          <MenuList cata="Entrees" />
          <MenuList cata="Vegetarian" />
          <MenuList cata="Drink" />
          <MenuList cata="dessert" />
        </div>

        <section className="appetizer mb-5">
          <div className="sm:py-5 py-2  sm:px-10 px-5">
            <Apetizer />
          </div>
          <div className="sm:py-5 py-2 sm:px-10 px-5">
            <Entrees />
          </div>
          <div className="sm:py-5 py-2 sm:px-10 px-5">
            <Vegetarian />
          </div>
          <div className="sm:py-5 py-2 sm:px-10 px-5">
            <Desert />
          </div>
          <div className="sm:py-5 py-2 sm:px-10 px-5">
            <Drink />
          </div>
        </section>
      </section>
    </>
  );
};

export default Menus;
