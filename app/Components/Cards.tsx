import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import WhiteButton from "./Buttons/WhiteButton";

interface CardContent {
  title: string;
  paragraph: string;
  image: string;
  difficulty: string;
}

const Cards = ({ title, paragraph, image, difficulty }: CardContent) => {
  return (
    <div className="bg-[#F8F4FF] p-6 m-3 rounded-lg">
      <div className="w-[200px] mx-auto h-[200px]">
        <Image
          src={image}
          alt="icon"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>

      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-black">{title}</h1>
      <p className="mt-[1rem] text-black font-semibold opacity-90 text-[15px]">
        {paragraph}
      </p>
      <div className="flex items-center mt-[0.5rem] space-x-3 ">
        <div className="flex items-center">
          <IoIosStar className="w-[1rem] h-[1rem] text-red-700" />
          <IoIosStar className="w-[1rem] h-[1rem] text-red-700" />
          <IoIosStar className="w-[1rem] h-[1rem] text-red-700" />
          <IoIosStar className="w-[1rem] h-[1rem] text-red-700" />
        </div>
      </div>
      <p className="text-[16px] text-opacity-70 uppercase mt-2">
        difficulty:{difficulty}
      </p>
      <div className="flex items-center justify-center mt-4">
        <WhiteButton text="Open" />
      </div>
    </div>
  );
};

export default Cards;
