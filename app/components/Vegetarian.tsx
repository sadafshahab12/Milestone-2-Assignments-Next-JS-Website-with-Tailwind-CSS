import React from "react";

import VegeCard from "@/app/components/ui/VegeCard";


const Vegetarian = () => {
  return (
    <>
      <div className="space-y-4">
        <div>
          <h1 className="text-[2rem] text-center font-bold" >Vegetarian</h1>
        </div>
        <div className="apetizer-card grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <VegeCard
              img="/images/veg1.jpg"
              name="Matar Paneer"
              description="Peas and paneer curry cooked in a creamy tomato sauce."
              price="13.99"
            />
          </div>
          <div>
            <VegeCard
              img="/images/veg2.jpg"
              name="Dal Fry"
              description="Lentil curry cooked with onions, garlic, and spices."
              price="9.99"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vegetarian;
