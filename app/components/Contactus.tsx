import React from "react";
import Input from "./Input";
import BlackBtn from "./ui/BlackBtn";

const Contactus = () => {
  return (
    <>
      <section className="bg-orange-400 md:p-14 sm:p-7 p-3">
        <div className=" grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5 ">
          <div className="contact space-y-10 ">
            <div>
              <h1 className="text-[2rem] font-bold">Contact Us!</h1>
              <p>Get in touch with us!</p>
            </div>

            <div className="form">
              <form action="" className="space-y-5">
                <div>
                  <Input placeHolder="Enter Your Name" />
                </div>
                <div>
                  <Input placeHolder="Enter Your Email" />
                </div>

                <div>
                  <Input placeHolder="Enter Your Phone Number" />
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter Your Message Here..."
                    className="border py-2 px-3 rounded w-full text-[0.9rem] placeholder:text-slate-500 outline-none"
                  ></textarea>
                </div>
                <BlackBtn btnText="Submit" />
              </form>
            </div>
          </div>
          {/* ------------------------------------ */}
          <div className="space-y-8 grid">
            <div className="working space-y-5 sm:order-none order-3">
              <div>
                <h1 className="text-[1.5rem] font-bold">Working Hours:</h1>
              </div>
              <div className="space-y-3">
                <div className="flex gap-7 items-center">
                  <p className="font-semibold">Monday - Thursday:</p>
                  <p>11am - 10pm</p>
                </div>
                <div className="flex gap-7 items-center">
                  <p className="font-semibold">Friday - Saturday:</p>
                  <p>11am - 11pm</p>
                </div>
                <div className="flex gap-7 items-center">
                  <p className="font-semibold">Sunday:</p>
                  <p>12pm - 9pm</p>
                </div>
              </div>
            </div>
            <div className="newsletter space-y-5 sm:order-none order-1">
              <div>
                <h1 className="text-[1.5rem] font-bold">
                  Subscrie News Letter
                </h1>
                <p>Stay updated on promotions and new menu items</p>
              </div>

              <div>
                <Input placeHolder="Enter Your Email" />
              </div>
              <div>
                <BlackBtn btnText="Subscribe Newsletter" />
              </div>
            </div>
            <div className="sm:order-none order-2">
              <p>Have a question or feedback? Contact us today!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
