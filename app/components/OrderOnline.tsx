import React from "react";
import OrderInput from "./ui/OrderInput";
import Image from "next/image";
import Button from "./ui/Button";
const OrderOnline = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 ">
        <div className="bg-slate-800 sm:order-none order-2 ">
          <div className="image sm:h-[20rem]  ">
            <Image
              src="/images/order.jpg"
              width={500}
              height={500}
              alt="contact-img"
              className="w-full h-full object-cover"
            />
            <p className="text-white p-5 leading-7 tracking-wider">
              {`"Order Online Today! Simply select your menu items, choose pickup
              or delivery, and pay securely online. Review your order summary
              and confirm. We'll prepare your meal fresh and have it ready
              for pickup or deliver it right to your door. Order Now & Enjoy!"`}
            </p>
          </div>
        </div>

        <div className="p-5 sm:order-none order-1">
          <div className="space-y-3 mb-10">
            <h1 className="md:text-[2rem] text-[1.5rem] text-center font-bold">
              <span className="text-primary">Experience Pakistani Cuisine</span>
            </h1>
            <div className="space-x-3 flex justify-center items-center ">
              <p className="md:text-[1.5rem] text-[1rem]  font-medium text-center ">
                Skip the line,
              </p>
              <span className="text-orange-400 font-bold md:text-[1.5rem] text-[1rem] bg-black px-2 py-1 rounded-lg">
                Order online
              </span>
            </div>
          </div>
          <div className="form">
            <form action="" className="space-y-8">
              <fieldset className="space-y-5">
                <legend className="text-[1rem]">Customer Information</legend>
                <div className="space-y-4">
                  <div>
                    <OrderInput type="text" placeholder="Name" />
                  </div>
                  <div>
                    <OrderInput type="email" placeholder="Email" />
                  </div>
                  <div>
                    <OrderInput type="text" placeholder="Phone" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="space-y-4">
                <legend>Order Details</legend>

                <div>
                  <OrderInput
                    type="text"
                    placeholder="Which dish/dessert/drink do you want to order?"
                  />
                </div>
                <div className="space-y-4">
                  <label>Pickup or Delivery:</label>
                  <div className="flex items-center gap-7">
                    <div className="flex justify-start items-center gap-3">
                      <input
                        type="radio"
                        name="deliverydetails"
                        value="pickup"
                        id="pickup"
                      />
                      <label htmlFor="pickup">Pickup</label>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                      <input
                        type="radio"
                        name="deliverydetails"
                        value="delivery"
                        id="delivery"
                      />
                      <label htmlFor="delivery">Delivery</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Special Instructions --> */}
                <div className="space-y-4">
                  <label>Special Instructions:</label>
                  <textarea
                    name="special-instructions"
                    className="border border-slate-700 outline-none py-2 px-3 rounded w-full text-[0.9rem] placeholder:text-slate-700 focus:shadow-md"
                  ></textarea>
                </div>

                {/* <!-- Payment Information --> */}
                <label>Payment Method:</label>
                <div className="grid md:grid-cols-3 grid-cols-1  md:gap-[5rem] gap-[1rem]  items-center">
                  <div className="flex md:justify-center justify-start  items-center gap-3">
                    <input
                      type="radio"
                      name="payment-method"
                      value="credit-debit"
                      id="credit"
                    />
                    <label htmlFor="credit">Credit/Debit Card</label>
                  </div>
                  <div className="flex  items-center gap-3">
                    <input
                      type="radio"
                      name="payment-method"
                      value="paypal"
                      id="paypal"
                    />
                    <label htmlFor="paypal">PayPal</label>
                  </div>
                  <div className="flex  md:justify-center justify-start items-center gap-3">
                    <input
                      type="radio"
                      name="payment-method"
                      value="cash"
                      id="cash"
                    />
                    <label htmlFor="cash">Cash</label>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1   md:gap-[5rem] gap-[2rem]">
                  <div>
                    <label htmlFor="card-num">Card Number:</label>
                    <OrderInput type="text" name="card-number" id="card-num" />
                  </div>

                  <div>
                    <label htmlFor="exp-date">Expiration Date:</label>
                    <OrderInput
                      type="date"
                      name="expiration-date"
                      id="exp-date"
                    />
                  </div>

                  <div>
                    <label htmlFor="cvv">CVV:</label>
                    <OrderInput type="text" name="cvv" id="cvv" />
                  </div>
                </div>

                <Button btnText="Place Order" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
