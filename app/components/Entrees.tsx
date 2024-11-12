import React from "react";

import EntreesCard from "@/app/components/ui/EntreesCard";


const Entrees = () => {
  return (
    <>
      <div className="space-y-4">
        <div>
          <h1 className="text-[2rem] text-center font-bold" >Entrees</h1>
        </div>
        <div className="apetizer-card grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <EntreesCard
              img="/images/entree1.jpg"
              name="Beef Nihari"
              description="Slow-cooked beef stew in a rich and flavorful broth with spices, herbs, and bone marrow."
              price="16.99"
            />
          </div>
          <div>
            <EntreesCard
              img="/images/entree2.webp"
              name="Chicken Karahi"
              description="Stir-fried chicken cooked in a spicy tomato-based sauce with bell peppers, onions, and herbs."
              price="14.99"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Entrees;
