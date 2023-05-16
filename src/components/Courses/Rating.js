import React from "react";

const Rating = () => {
  return (
    <div className="mb-[50px]">
      <h3 className="text-[28px] font-[700] text-[#31374D] mb-[40px]">
        Rating
      </h3>
      <div className="bg-[#F9FDFF] py-[41px] px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[70px]">
          <div className="text-center border-r-[3px]">
            <h3 className="uppercase   text-[20px] text-[#31374D] font-[600] mb-[14px]">
              Average rating
            </h3>
            <h1 className="text-[50px] font-[600] leading-[75px] mb-[14px]">
              4.5
            </h1>
            <div className="rating mb-[5px]">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2  bg-orange-400"
              />
            </div>
            <p className="text-[#5F6765] text-[16px] font-[400]">(150 votes)</p>
          </div>
          <div className="col-span-2">
            <div className="flex items-center gap-[25px] mb-[25px]">
              <div className="rating gap-[5px]">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <progress
                className="progress w-100"
                value="90"
                max="100"
              ></progress>

              <p>90%</p>
            </div>
            <div className="flex items-center gap-[25px] mb-[25px]">
              <div className="rating gap-[5px]">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <progress
                className="progress w-100"
                value="90"
                max="100"
              ></progress>

              <p>20%</p>
            </div>
            <div className="flex items-center gap-[25px] mb-[25px]">
              <div className="rating gap-[5px]">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <progress
                className="progress w-100"
                value="90"
                max="100"
              ></progress>

              <p>10%</p>
            </div>
            <div className="flex items-center gap-[25px] mb-[25px]">
              <div className="rating gap-[5px]">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <progress
                className="progress w-100"
                value="90"
                max="100"
              ></progress>

              <p>05%</p>
            </div>
            <div className="flex items-center gap-[25px] mb-[25px]">
              <div className="rating gap-[5px]">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <progress
                className="progress w-100"
                value="90"
                max="100"
              ></progress>

              <p>02%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
