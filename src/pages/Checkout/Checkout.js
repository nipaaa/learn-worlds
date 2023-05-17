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
          <div className="flex justify-between p-[22px] bg-[#f9fcff] items-center mb-[25px] shadow-sm rounded-[7px]">
            <div className="flex gap-[30px] items-center">
              <div className="w-[189px] h-[94px] rounded-[5px]">
                <img
                  className="w-full h-full rounded-[5px]"
                  src="https://i.ytimg.com/vi/rMfZaozkoWY/maxresdefault.jpg"
                  alt=" "
                />
              </div>
              <div>
                <p className="font-[500] text-[20px] text-[#2E3331]">
                  Web Development
                </p>
                <p className="font-[400] text-[16px] text-[#8A9995]">
                  by Angelou Canales
                </p>
              </div>
            </div>
            <p className="font-[500] text-[20px] text-[#2E3331]">$29</p>
          </div>
          <div className="flex justify-between p-[22px] bg-[#f9fcff] items-center mb-[25px] shadow-sm rounded-[7px]">
            <div className="flex gap-[30px] items-center">
              <div className="w-[189px] h-[94px] rounded-[5px]">
                <img
                  className="w-full h-full rounded-[5px]"
                  src="https://i.ytimg.com/vi/rMfZaozkoWY/maxresdefault.jpg"
                  alt=" "
                />
              </div>
              <div>
                <p className="font-[500] text-[20px] text-[#2E3331]">
                  Web Development
                </p>
                <p className="font-[400] text-[16px] text-[#8A9995]">
                  by Angelou Canales
                </p>
              </div>
            </div>
            <p className="font-[500] text-[20px] text-[#2E3331]">$29</p>
          </div>
        </div>

        <div className="w-1/4 px-[45px] py-[30px] shadow-sm rounded-[7px] h-[309px]">
          <p className="font-[600] text-[20px] text-[#31374D] mb-[25px]">
            Your Order
          </p>
          <div className="flex justify-between font-[400] text-[16px] text-[#2E3331] mb-[15px]">
            <p>Items</p>
            <p>Total</p>
          </div>
          <div className="flex justify-between font-[300] text-[12px] text-[#8A9995] mb-[25px]">
            <p>Web Development x 01</p>
            <p>$58.00</p>
          </div>
          <div className="flex justify-between mb-[30px]">
            <p className="font-[400] text-[16px] text-[#2E3331]">Subtotal</p>
            <p className="font-[500] text-[14px] text-[#C65631]">$58.00</p>
          </div>
          <button className="btn border-0 w-full font-[600] text-[16px] text-white bg-[#747474a6] ">
            Buy Course
          </button>
        </div>
      </div>

      <h4 className="font-[700] text-[24px] text-[#31374D] mb-[10px] mt-[45px]">
        Select Payment Mood
      </h4>
      <p className="font-[400] text-[16px] text-[#8A9995] mb-[40px]">
        Select any one methods from the bellow and proceed forward.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[940px]">
        <div className="flex gap-[49px] border px-[30px]  border-[#74747473] rounded-[15px]">
          <input type="radio" name="" />
          <div className="flex gap-[5px] items-center">
            <img src={visa} alt="" />
            <img src={dbbl} alt="" />
            <img src={master} alt="" />
            <img src={american} alt="" />
          </div>
        </div>
        <div className="flex gap-[49px] border px-[30px] py-[21px]  border-[#74747473] rounded-[15px]">
          <input type="radio" name="" />
          <div>
            <img src={bikash} alt="" />
          </div>
        </div>
        <div className="flex gap-[49px] border px-[30px]  border-[#74747473] rounded-[15px]">
          <input type="radio" name="" />
          <div>
            <img src={nogod} alt="" />
          </div>
        </div>
        <div className="flex gap-[49px] border px-[30px] py-[18px] border-[#74747473] rounded-[15px]">
          <input type="radio" name="" />
          <div>
            <img src={rocket} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
