import React, { useRef, useState } from "react";
import "./Account.css";
import camera from "../../assets/illustration/camera.png";

const Account = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <section className="max-w-[872px] mx-auto mt-[97px] mb-[100px] md:px-10">
      <div className="flex justify-between items-center px-5 md:px-0">
        <p className="font-[500] text-[25px] md:text-[45px] text-[#31374C]">
          Profile
        </p>
        <div className="flex gap-[15px]">
          <button className="w-[60px] md:w-[97px] h-[30px] md:h-[50px] font-[500] text-[12px] md:text-[18px] outline-gradiant-button">
            Edit
          </button>
          <button className="w-[60px]  md:w-[100px] h-[30px] md:h-[50px] font-[500] text-[12px] md:text-[18px] text-white save-gradiant-button">
            Save
          </button>
        </div>
      </div>

      <div className=" w-full flex gap-[136px] mt-[35px] flex-col md:flex-row items-center md:items-start">
        <div className="w-1/6 relative">
          <div className="w-[128px] h-[128px] border-[6px] border-white rounded-full profile-drop-shadow">
            <img
              className="object-cover w-full h-full rounded-full"
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              }
              alt=""
            />
          </div>
          <img
            className="absolute top-5 right-[-60px] md:right-[-15px] lg:right-[-5px] cursor-pointer"
            src={camera}
            alt=""
            onClick={handleClick}
          />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            ref={inputRef}
          />
        </div>
        <div className="w-5/6 flex flex-col gap-[20px]">
          <div className="w-full ">
            <label className="font-[400] text-[14x] mb-[10px]">FULL NAME</label>
            <input
              type="text"
              required
              className="block border w-full h-[60px] input-border"
              placeholder="Mohiuddin Khan"
            />
          </div>
          <div className="w-full ">
            <label className="font-[400] text-[14x] mb-[10px]">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              required
              className="block border w-full h-[60px] input-border"
              placeholder="mohi.opediatech@gmail.com"
            />
          </div>
          <div className="w-full ">
            <label className="font-[400] text-[14x] mb-[10px]">
              PHONE NUMBER
            </label>
            <input
              type="tel"
              required
              className="block border w-full h-[60px] input-border"
              placeholder="+8801975519178"
            />
          </div>
          <div className="w-full ">
            <label className="font-[400] text-[14x] mb-[10px]">
              PRESENT ADDRESS
            </label>
            <input
              type="text"
              required
              className="block border w-full h-[60px] input-border"
              placeholder="Shaymoli, Dhaka"
            />
          </div>
          <div className="w-full ">
            <label className="font-[400] text-[14x] mb-[10px]">DISTRICT</label>
            <input
              type="text"
              required
              className="block border w-full h-[60px] input-border"
              placeholder="Dhaka"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
