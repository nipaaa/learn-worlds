import React from "react";
import bikash from "../../assets/payment/bikash.png";
import nogod from "../../assets/payment/nogod.png";
import rocket from "../../assets/payment/rocket.png";
import visa from "../../assets/payment/visa.png";
import dbbl from "../../assets/payment/dbbl.png";
import master from "../../assets/payment/master-card.png";
import american from "../../assets/payment/american-express.png";

const Checkout = () => {
  return (
    <section className="container mt-[139px] mb-[150px]">
      <h1 className="font-[700] text-[24px] text-[#31374D] mb-[64px]">
        Billing Details
      </h1>
      <div className="flex gap-[43px]">
        <div className="w-3/4">
          <div className="flex justify-between p-[22px] bg-[#f9fcff] items-center mb-[25px]">
            <div className="flex gap-[30px] items-center">
              <div className="w-[189px] h-[94px] rounded-[5px]">
                <img
                  className="w-full h-full rounded-[5px]"
                  src="https://i.ytimg.com/vi/rMfZaozkoWY/maxresdefault.jpg"
                  alt
                />
              </div>
              <div>
                <p>Web Development</p>
                <p>by Angelou Canales</p>
              </div>
            </div>
            <p>$29</p>
          </div>

          <div className="flex justify-between p-[22px] bg-[#f9fcff] items-center">
            <div className="flex gap-[30px] items-center">
              <div className="w-[189px] h-[94px] rounded-[5px]">
                <img
                  className="w-full h-full rounded-[5px]"
                  src="https://i.ytimg.com/vi/rMfZaozkoWY/maxresdefault.jpg"
                  alt
                />
              </div>
              <div>
                <p>Web Development</p>
                <p>by Angelou Canales</p>
              </div>
            </div>
            <p>$29</p>
          </div>
        </div>

        <div className="w-1/4 px-[45px] py-[30px] shadow-sm h-[309px]">
          <p>Your Order</p>
          <div className="flex justify-between">
            <p>Items</p>
            <p>Total</p>
          </div>
          <div className="flex justify-between">
            <p>Web Development x 01</p>
            <p>$58.00</p>
          </div>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$58.00</p>
          </div>
          <button className="btn border-0">Buy Course</button>
        </div>
      </div>

      <h4>Select Payment Mood</h4>
      <p>Select any one methods from the bellow and proceed forward.</p>
      <div>
        <div>
          <input type="radio" name="" />
          <div></div>
        </div>
        <div>
          <input type="radio" name="" />
          <div></div>
        </div>
        <div>
          <input type="radio" name="" />
          <div></div>
        </div>
        <div>
          <input type="radio" name="" />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
