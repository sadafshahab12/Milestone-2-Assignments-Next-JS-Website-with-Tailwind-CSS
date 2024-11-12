import FAQ from "@/app/components/FAQ";
import FeaturedDishes from "@/app/components/FeaturedDishes";
import Hero from "@/app/components/Hero";
import Testimonial from "@/app/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Sadaf Shahab",
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <Testimonial />
      <FAQ />
    </>
  );
}
