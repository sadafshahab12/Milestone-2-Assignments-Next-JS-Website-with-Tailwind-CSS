import React from "react";
import OrderOnline from "../components/OrderOnline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Online | Sadaf Shahab",
};
const Projects = () => {
  return (
    <div>
      <OrderOnline />
    </div>
  );
};

export default Projects;
