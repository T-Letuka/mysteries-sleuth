import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import WhiteButton from "./Buttons/WhiteButton";
import BlueButton from "./Buttons/BlueButton";
import RedButton from "./Buttons/RedButton";

interface CardContent {
  title: string;

  image: string;
}

const Riddles = ({ title, image }: CardContent) => {
  return (
    <div className="bg-black p-6 m-3 rounded-lg">
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-white  text-center uppercase">
        {title}
      </h1>
      <div className="w-[200px] mx-auto h-[200px]">
        <Image
          src={image}
          alt="icon"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>

      <div className="flex items-center justify-center mt-4">
        <RedButton text="Open" />
      </div>
    </div>
  );
};

export default Riddles;
