import React from "react";
import DessertCard from "./ui/DessertCard";

const Desert = () => {
  return (
    <>
      <div className="space-y-4">
        <div>
          <h1 className="text-[2rem] text-center font-bold">Dessert</h1>
        </div>
        <div className="apetizer-card grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <DessertCard
              img="/images/desert1.jpg"
              name="Gulab Jamun"
              description="Yogurt-based drink with spices and herbs, served chilled."
              price="5.99"
            />
          </div>
          <div>
            <DessertCard
              img="/images/desert2.jpg"
              name="Ras Malai"
              description="Creamy paneer dessert with cardamom, saffron, and nuts."
              price="6.99"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Desert;
