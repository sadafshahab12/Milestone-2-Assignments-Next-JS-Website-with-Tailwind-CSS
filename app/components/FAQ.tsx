"use client";
import FAQTag from "./ui/FAQTag";

const FAQ = () => {

  return (
    <>
      <section>
        <div className="md:p-10 xs:p-4 p-2">
          <div className="faqs md:my-10 my-5">
            <h1 className="md:text-[2.5rem] xs:text-[2rem] text-[1.5rem] text-center font-bold">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="xs:space-y-5 space-y-3 mb-5">
            <FAQTag
              faqQuestion=" What is TasteBite?"
              faqAnswer="TasteBite is a food delivery and discovery platform that connects customers with local restaurants and food establishments, offering a wide variety of cuisines and dishes for delivery or pickup."
            />
            <FAQTag
              faqQuestion="How do I place an order?"
              faqAnswer="To place an order, simply browse our menu, select your desired dishes, and follow the checkout process. You can also filter by cuisine, location, or dietary preferences. Our user-friendly interface makes it easy to order your favorite foods."
            />
            <FAQTag
              faqQuestion="What payment options do you accept?"
              faqAnswer="TasteBite accepts various payment methods, including credit cards (Visa, Mastercard, Amex), debit cards, PayPal, and online banking. We ensure secure transactions and protect your payment information"
            />
            <FAQTag
              faqQuestion="How long does delivery take?"
              faqAnswer="Delivery times vary depending on your location and the restaurant's preparation time. On average, deliveries take 30-60 minutes. You can track your order's status in real-time through our website or mobile app."
            />
            <FAQTag
              faqQuestion="Can I cancel or modify my order?"
              faqAnswer="Yes, you can cancel or modify your order within a reasonable time frame (usually 15-30 minutes after placing the order). Please contact our customer support team or use our website's self-service option to make changes. Refunds or adjustments will be processed accordingly."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
