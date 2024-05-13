import React from "react";
import { PiDetectiveLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-[100%]  text-center border-t-2 border-[#FF0800]">
      <h1 className="text-[16px] md:text-[25px] gap-2 font-bold  flex items-center justify-center ">
        <span className="text-[27px] md:text-[40px] text-black">
          <PiDetectiveLight size={50} color="black" />
        </span>
        <span className="text-[27px] md:text-[40px] text-[#FE0000]">
          Sleuth Scribes
        </span>
        <p className="text-white text-[15px] text-opacity-50">2024</p>
      </h1>
    </div>
  );
};

export default Footer;
