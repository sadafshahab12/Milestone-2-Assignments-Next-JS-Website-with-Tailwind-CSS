import React from "react";
import FeaturedCard from "@/app/components/ui/FeaturedCard";

const FeaturedDishes = () => {
  return (
    <>
      <section className="bg-orange-300 mt-5">
        <div className="lg:p-14 md:p-7">
        <div className="md:mb-10 mb-2 md:pt-0 pt-5 ">
          <h1 className="sm:text-[2.5rem] text-[2rem] text-center font-bold">
            Featured Dishes
          </h1>
        </div>
        <div className="cards grid md:grid-cols-3 grid-cols-1 gap-5 md:p-0 sm:p-10 p-3">
          <div>
            <FeaturedCard
              dishSrc="/images/featured1.jpg"
              dishName="Grilled Chicken Fajitas"
              dishDescription="Sizzling fajitas with grilled chicken, bell peppers, onions."
              dishPrice={15.99}
            />
          </div>
          <div>
            <FeaturedCard
              dishSrc="/images/featured3.jpg"
              dishName="Chicken Karahi"
              dishDescription="Spicy chicken with bell peppers & tomatoes in a spice blend."
              dishPrice={8.99}
            />
          </div>
          <div>
            <FeaturedCard
              dishSrc="/images/featured4.jpg"
              dishName="Chicken Seekh Kebab"
              dishDescription="Grilled minced chicken skewers with chutney & salad."
              dishPrice={9.99}
            />
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedDishes;
