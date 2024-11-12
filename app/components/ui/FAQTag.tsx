"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface TFaqCard {
  faqQuestion: string;
  faqAnswer: string;
}

const FAQTag = ({ faqQuestion, faqAnswer }: TFaqCard) => {
  const [toggle, setToggle] = useState(false);

  const handleQuestion = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <section>
        <div className="questions lg:px-[10rem] md:px-[2rem] px-[1rem]">
          <div className="accordion border bg-primary text-white rounded">
            <div className="question flex justify-between xs:px-7 px-4 xs:py-4 py-2 rounded-tl rounded-tr">
              <h1 className="xs:text-[1.1rem] text-[0.9rem] font-medium tracking-wide">{faqQuestion}</h1>

              <p
                className="cursor-pointer text-[1.1rem]"
                onClick={handleQuestion}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  width={15}
                  height={15}
                  className={`${toggle ? "rotate-180" : "rotate-0"
                    } transition-transform duration-500 `}
                />
              </p>
            </div>

            <div
              className={`answer bg-black text-white rounded-bl rounded-br transition-all duration-700 ease-in-out ${toggle ? "max-h-[100rem] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              style={{
                maxHeight: toggle ? "100rem" : "0rem",
              }}
            >
              <p className="text-[1rem] px-8 py-5 leading-7 tracking-wide">{faqAnswer}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQTag;
