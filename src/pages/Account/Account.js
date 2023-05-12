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
    <section className="max-w-[872px] mx-auto mt-[97px] mb-[100px]">
      <div className="flex justify-between items-center">
        <p className="font-[500] text-[45px] text-[#31374C]">Profile</p>
        <div className="flex gap-[15px]">
          <button className="w-[97px] h-[50px] font-[500] text-[18px] outline-gradiant-button">
            Edit
          </button>
          <button className="w-[100px] h-[50px] font-[500] text-[18px] text-white save-gradiant-button">
            Save
          </button>
        </div>
      </div>

      <div className=" w-full flex gap-[136px] mt-[35px]">
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
            className="absolute top-5 right-[-5px] cursor-pointer"
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
        <div className="w-5/6">
          <div className="w-full ">
            <label>Full Name</label>
            <input type="text" required className="block border w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
