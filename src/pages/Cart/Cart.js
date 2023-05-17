import React from "react";
import crossColorful from "../../assets/icon/cross-gradient.png";
import cross from "../../assets/icon/cross-fadded.png";
import "./Cart.css";

const Cart = () => {
  return (
    <section className="container mt-[139px] mb-[150px]">
      <h1 className="font-[700] text-[50px] text-[#31374D] mb-[64px]">Cart</h1>

      <table class="table-auto mx-[106px] w-full mb-[60px]">
        <thead className="">
          <tr className="text-center border">
            <th className="text-start px-[32px] py-[24px]">Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>
              <img className=" mx-auto" src={crossColorful} alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center ">
            <td className="text-start flex items-center gap-[71px] p-[32px]">
              <div className="w-[136px] h-[68px] rounded-[7px]">
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
            <td className="font-[500] text-[16px] text-[#5F6765]">
              {" "}
              <span className=" px-[26px] py-[9px] bg-[#F3FBFF] rounded-[5px]">
                {" "}
                01
              </span>
            </td>
            <td className="font-[500] text-[16px] text-[#5F6765]">$ 29</td>
            <td>
              <img className="mx-auto" src={cross} alt="" />
            </td>
          </tr>
          <tr className="text-center ">
            <td className="text-start flex items-center gap-[71px] p-[32px]">
              <div className="w-[136px] h-[68px] rounded-[7px]">
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
            <td className="font-[500] text-[16px] text-[#5F6765]">
              {" "}
              <span className=" px-[26px] py-[9px] bg-[#F3FBFF] rounded-[5px]">
                {" "}
                01
              </span>
            </td>
            <td className="font-[500] text-[16px] text-[#5F6765]">$ 29</td>
            <td>
              <img className="mx-auto" src={cross} alt="" />
            </td>
          </tr>
          <tr className="text-center border-b">
            <td className="text-start flex items-center gap-[71px] p-[32px]">
              <div className="w-[136px] h-[68px] rounded-[7px]">
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
            <td className="font-[500] text-[16px] text-[#5F6765]">
              {" "}
              <span className=" px-[26px] py-[9px] bg-[#F3FBFF] rounded-[5px]">
                {" "}
                01
              </span>
            </td>
            <td className="font-[500] text-[16px] text-[#5F6765]">$ 29</td>
            <td>
              <img className="mx-auto" src={cross} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between mx-[106px]">
        <div>
          <p className="font-[600] text-[18px] text-[#31374D]">
            Coupon Discount
          </p>
          <div className="w-[340px] h-[75px] my-[30px]">
            <input
              type="text"
              name=""
              placeholder="Enter your coupon code"
              className="w-full h-full px-[25px] py-[22px] border-[1px] border-[#74747499] rounded-[7px]"
            />
          </div>
          <button className="btn border-0 px-[42px] py-[18px] bg-[#ababab59] rounded-[7px] hover:bg-[#ababab59]">
            APPLY COUPON
          </button>
        </div>
        <div className="w-[407px] h-[308px] px-[50px] py-[45px] rounded-[7px] cart-total">
          <p className="font-[600] text-[18px] text-[#31374D] text-center">
            Cart Total
          </p>
          <div className="mt-[40px] flex justify-between mb-[60px]">
            <p className="font-[400] text-[18px] text-[#2E3331]">SUB TOTAL:</p>
            <p className="font-[600] text-[18px] text-[#2E3331]">$87.00</p>
          </div>
          <button className="checout-btn">Proceed To Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
