import React, { useState } from "react";
import crossColorful from "../../assets/icon/cross-gradient.png";
import cross from "../../assets/icon/cross-fadded.png";
import "./Cart.css";
import CouponModal from "../../utils/Modals/CouponModal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleGoToCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <section className="container mt-[139px] mb-[150px]">
      <h1 className="font-[700] text-[50px] text-[#31374D] mb-[64px]">Cart</h1>

      <div className="flex flex-col lg:flex-row justify-between gap-[50px]">
        {/* cart table start */}

        <div className="overflow-x-auto lg:w-2/3">
          <table class="table-auto  w-full lg:max-w-[1180px] mx-auto mb-[60px]">
            <thead className="">
              <tr className="text-center border">
                <th className="text-start px-[32px] py-[24px]">Item Name</th>
                <th className="px-[32px]">Price</th>
                {/* <th className="px-[32px]">Quantity</th> */}
                {/* <th>Total</th> */}
                {/* <th className="px-[32px]">
                <img className=" mx-auto " src={crossColorful} alt="" />
              </th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-[#ff800a56] cursor-pointer ">
                <td className="text-start flex items-center gap-[71px] p-[32px] ">
                  <div className="w-[136px] h-[68px] rounded-[7px] overl">
                    <img
                      src="https://i.ytimg.com/vi/rMfZaozkoWY/maxresdefault.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-[7px]"
                    />
                  </div>
                  <div>
                    <h6 className="font-[500] text-[18px] text-[#2E3331] ">
                      Web Development
                    </h6>
                    <p className="font-[400] text-[14px] text-[#8A9995] ">
                      By Angela Yu
                    </p>
                  </div>
                </td>
                <td className="font-[500] text-[16px] text-[#5F6765]">$ 29</td>
                {/* <td className="font-[500] text-[16px] text-[#5F6765]">
                {" "}
                <span className=" px-[26px] py-[9px] bg-[#F3FBFF] rounded-[5px]">
                  {" "}
                  01
                </span>
              </td> */}
                {/* <td className="font-[500] text-[16px] text-[#5F6765]">$ 29</td> */}
                {/* <td>
                <img className="mx-auto cursor-pointer" src={cross} alt="" />
              </td> */}
              </tr>
              <tr className="text-center hover:bg-[#ff800a56] cursor-pointer ">
                <td className="text-start flex items-center gap-[71px] p-[32px] ">
                  <div className="w-[136px] h-[68px] rounded-[7px] overl">
                    <img
                      src="https://i.ytimg.com/vi/rMfZaozkoWY/maxresdefault.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-[7px]"
                    />
                  </div>
                  <div>
                    <h6 className="font-[500] text-[18px] text-[#2E3331] ">
                      Web Development
                    </h6>
                    <p className="font-[400] text-[14px] text-[#8A9995] ">
                      By Angela Yu
                    </p>
                  </div>
                </td>
                <td className="font-[500] text-[16px] text-[#5F6765]">$ 29</td>
                {/* <td className="font-[500] text-[16px] text-[#5F6765]">
                {" "}
                <span className=" px-[26px] py-[9px] bg-[#F3FBFF] rounded-[5px]">
                  {" "}
                  01
                </span>
              </td> */}
                {/* <td className="font-[500] text-[16px] text-[#5F6765]">$ 29</td> */}
                {/* <td>
                <img className="mx-auto cursor-pointer" src={cross} alt="" />
              </td> */}
              </tr>
              <tr className="text-center hover:bg-[#ff800a56] cursor-pointer ">
                <td className="text-start flex items-center gap-[71px] p-[32px] ">
                  <div className="w-[136px] h-[68px] rounded-[7px] overl">
                    <img
                      src="https://i.ytimg.com/vi/rMfZaozkoWY/maxresdefault.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-[7px]"
                    />
                  </div>
                  <div>
                    <h6 className="font-[500] text-[18px] text-[#2E3331] ">
                      Web Development
                    </h6>
                    <p className="font-[400] text-[14px] text-[#8A9995] ">
                      By Angela Yu
                    </p>
                  </div>
                </td>
                <td className="font-[500] text-[16px] text-[#5F6765]">$ 29</td>
                {/* <td className="font-[500] text-[16px] text-[#5F6765]">
                {" "}
                <span className=" px-[26px] py-[9px] bg-[#F3FBFF] rounded-[5px]">
                  {" "}
                  01
                </span>
              </td> */}
                {/* <td className="font-[500] text-[16px] text-[#5F6765]">$ 29</td> */}
                {/* <td>
                <img className="mx-auto cursor-pointer" src={cross} alt="" />
              </td> */}
              </tr>
            </tbody>
          </table>
        </div>
        {/* cart table end */}

        {/* <div className="flex flex-col lg:flex-row gap-20 items-center lg:justify-between mx-auto max-w-[1180px]"> */}
        <div className="lg:w-1/3 mx-auto">
          {/* copon discount section start */}
          {/* <div>
          <p className="font-[600] text-[18px] text-[#31374D]">
            Coupon Discount
          </p>
          <div className="max-w-[340px] h-[75px] my-[30px]">
            <input
              type="text"
              name=""
              placeholder="Enter your coupon code"
              className="w-full h-full px-[25px] py-[22px] border-[1px] border-[#74747499] rounded-[7px] min-w-[250px]"
              onChange={(e) => setCoponApplied(e.target.value)}
            />
          </div>
          <button
            className={`btn border-0 px-[42px] py-[18px] bg-[#ababab59] rounded-[7px] ${
              coponApplied && "apply-gradiant-btn hover:text-white"
            } hover:bg-[#ababab59]`}
          >
            APPLY COUPON
          </button>
        </div> */}
          {/* copon discount section end */}

          {/* checkout start */}
          <div className="max-w-[407px] h-[308px] px-[50px] py-[45px] rounded-[7px] cart-total">
            <p className="font-[600] text-[18px] text-[#31374D] text-center">
              Cart Total
            </p>
            <div className="mt-[40px] flex justify-between mb-[20px]">
              <p className="font-[400] text-[18px] text-[#2E3331]">
                SUB TOTAL:
              </p>
              <p className="font-[600] text-[18px] text-[#2E3331]">$87.00</p>
            </div>
            <p
              className="text-center mb-[20px] cursor-pointer font-semibold text-[#ff4f39]"
              onClick={() => setShowModal(true)}
            >
              Apply Coupon
            </p>
            <button
              className="checout-btn font-[600] md:text-[20px] px-[10px] md:px-[43px]  py-[20px]"
              onClick={handleGoToCheckOut}
            >
              Proceed To Checkout
            </button>
          </div>
          {/* checkout end */}
        </div>
      </div>
      {/* modal */}
      <CouponModal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default Cart;
