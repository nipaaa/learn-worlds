import React, { useState } from "react";

const CouponModal = ({ showModal, setShowModal }) => {
  const [coponApplied, setCoponApplied] = useState("");
  const handleApplyCoupon = () => {
    setCoponApplied("");
    setShowModal(false);
  };
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        checked={showModal}
      />
      <div className="modal ">
        <div className="modal-box relative bg-white p-10">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-5 top-5 hover:bg-[##ff4f39] "
            onClick={() => setShowModal(false)}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            <p className="font-[600] text-[18px] text-[#31374D]">
              Coupon Discount
            </p>
          </h3>
          <p className="py-4">
            <div className="w-full h-[75px] my-[30px]">
              <input
                type="text"
                name=""
                placeholder="Enter your coupon code"
                value={coponApplied}
                className="w-full h-full px-[25px] py-[22px] border-[1px] border-[#74747499] rounded-[7px] min-w-[250px]"
                onChange={(e) => setCoponApplied(e.target.value)}
              />
            </div>
            <button
              className={`btn border-0 px-[42px] py-[18px] bg-[#ababab59] w-full rounded-[7px] ${
                coponApplied && "apply-gradiant-btn hover:text-white"
              } hover:bg-[#ababab59] disabled:bg-[#ababab59]`}
              disabled={!coponApplied}
              onClick={handleApplyCoupon}
            >
              APPLY COUPON
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default CouponModal;
