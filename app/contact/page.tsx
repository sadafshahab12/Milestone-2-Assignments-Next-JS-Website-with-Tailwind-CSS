import React from "react";
import Contactus from "@/app/components/Contactus";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Sadaf Shahab",
};
const Contact = () => {
  return (
    <>
      <Contactus />
    </>
  );
};

export default Contact;
