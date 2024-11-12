import React from "react";

import ApetizerCard from "@/app/components/ui/ApetizerCard";

const Apetizer = () => {
  return (
    <>
      <div className="space-y-4">
        <div>
          <h1 className="text-[2rem] text-center font-bold">Apetizer</h1>
        </div>
        <div className="apetizer-card grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <ApetizerCard
              img="/images/apetizer1.jpg"
              name="Samosas"
              description="Crispy fried filled with spiced potatoes and peas"
              price="4.99"
            />
          </div>
          <div>
            <ApetizerCard
              img="/images/apetizer2.jpg"
              name="Pakora"
              description="Deep-fried vegetable or chicken fritters"
              price="5.99"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Apetizer;
