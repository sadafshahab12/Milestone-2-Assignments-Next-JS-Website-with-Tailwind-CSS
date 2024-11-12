import {
  faCcAmex,
  faCcMastercard,
  faCcVisa,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import NavLinks from "@/app/components/NavLinks";
import {
  faCashRegister,
  faCopyright,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import FooterButton from "./ui/FooterButton";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900">
        <div className="grid md:grid-cols-3 grid-cols-1 p-5 md:p-8 lg:p-10  gap-5 md:justify-self-start justify-self-center md:text-left text-center">
          <div className="contact text-white space-y-12 md:order-none order-2">
            <div className="text-[0.9rem] space-y-3">
              <h1 className="font-black xs:text-[1.5rem] text-[1.2rem] text-white">
                Contact Us!
              </h1>
              <div className="flex gap-4 md:justify-start justify-center items-center">
                <FontAwesomeIcon icon={faPhone} width={25} height={25} />
                <p>555-555-555</p>
              </div>
              <div className="flex gap-4 md:justify-start justify-center items-center">
                <FontAwesomeIcon icon={faEnvelope} width={25} height={25} />
                <p>info@tastebite.com</p>
              </div>
              <div className="flex gap-4 md:justify-start justify-center items-center">
                <FontAwesomeIcon icon={faLocationDot} width={25} height={25} />
                <p>123 Main St, Anytown, USA</p>
              </div>
            </div>

            {/* -------------Social Links----------- */}
            <div className="social-links">
              <div>
                <h1 className="font-black xs:text-[1.5rem] text-[1.2rem] text-white">
                  Follow us:
                </h1>
              </div>
              <div className="icons flex md:justify-start justify-center  items-center gap-8 cursor-pointer">
                <Link href="/" className="xs:text-[1.5rem] text-[1.2rem]">
                  <FontAwesomeIcon icon={faFacebook} width={20} height={20} />
                </Link>
                <Link href="https://www.instagram.com/sadafshahab12/" className="xs:text-[1.5rem] text-[1.2rem]">
                  <FontAwesomeIcon icon={faInstagram} width={20} height={20} />
                </Link>
                <Link href="/" className="xs:text-[1.5rem] text-[1.2rem]">
                  <FontAwesomeIcon icon={faTwitter} width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
          {/* ---------------------------------- */}
          <div className="menu-links text-white space-y-6 md:order-none  order-3">
            <h1 className="font-black xs:text-[1.5rem] text-[1.2rem] text-white ">
              Menu
            </h1>
            <div className="navlinks">
              <NavLinks
                page1="Home"
                page2="Menu"
                page3="Contact"
                page4="Order Online"
              />
            </div>
            <div className="copyright">
              <p >
                <FontAwesomeIcon icon={faCopyright} width={20} height={20} />{" "}
                2024 TasteBite. All rights reserved.
              </p>
              <p >Terms & Conditions | Privacy Policy</p>
            </div>
          </div>
          {/* -------------------------- */}
          <div className="space-y-[1.5rem] lg:order-none order-1 ">
            <div className="space-y-0 ">
              <h1 className="font-black xs:text-[2rem] text-[1.7rem] text-white">
                Savor the <span className="text-primary">Flavor</span>
              </h1>
              <p className="xs:text-[1rem] text-[0.9rem] font-medium text-white">
                Get the best tasty food with high quality
              </p>
            </div>

            <div className="btn">
              <FooterButton
                btnText="Get Food Delivered"
                btnText2="Download App"
              />
            </div>
            <div className="payment-method text-white md:space-y-0 space-y-3">
              <h1 className="font-black xs:text-[1.5rem] text-[1.2rem] text-white ">
                Payment Options
              </h1>
              <p>We accept:</p>
              <div className="flex md:justify-start justify-center items-center gap-5">
                <div className="text-[1.5rem]">
                  <FontAwesomeIcon icon={faCcVisa} width={30} height={30} />
                </div>
                <div className="text-[1.5rem]">
                  <FontAwesomeIcon
                    icon={faCcMastercard}
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text-[1.5rem]">
                  <FontAwesomeIcon icon={faCcAmex} width={30} height={30} />
                </div>
                <div className="text-[1.5rem]">
                  <FontAwesomeIcon
                    icon={faCashRegister}
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------  */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
