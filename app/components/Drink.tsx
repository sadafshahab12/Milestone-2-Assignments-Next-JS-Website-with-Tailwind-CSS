import React from "react";
import DrinkCard from "@/app/components/ui/DrinkCard";

const Drink = () => {
  return (
    <>
      <div className="space-y-4">
        <div>
          <h1 className="text-[2rem] text-center font-bold">Drinks</h1>
        </div>
        <div className="apetizer-card grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <DrinkCard
              img="/images/drink1.webp"
              name=" Lassi"
              description="Yogurt-based drink with spices and herbs, served chilled."
              price="2.99"
            />
          </div>
          <div>
            <DrinkCard
              img="/images/drink2.jpg"
              name="Kashmiri Chai"
              description="Spiced tea with cardamom, cinnamon, and black tea."
              price="1.99"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Drink;
