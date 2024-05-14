import React from "react";
import { IoIosStar } from "react-icons/io";
import RedButton from "./Buttons/RedButton";

interface CardContent {
  title: string;
  paragraph: string;
  difficulty: string;
}

const Cards = ({ title, paragraph, difficulty }: CardContent) => {
  return (
    <div className="bg-[#003049] p-6 m-3 rounded-lg">
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-white">{title}</h1>
      <p className="mt-[1rem] text-white font-semibold opacity-90 text-[15px]">
        {paragraph}
      </p>
      <div className="flex items-center mt-[0.5rem] space-x-3 ">
        <div className="flex items-center">
          <IoIosStar className="w-[1rem] h-[1rem] text-white" />
          <IoIosStar className="w-[1rem] h-[1rem] text-white" />
          <IoIosStar className="w-[1rem] h-[1rem] text-white" />
          <IoIosStar className="w-[1rem] h-[1rem] text-white" />
        </div>
      </div>
      <p className="text-[16px] text-white text-opacity-70 uppercase mt-2">
        difficulty: {difficulty}
      </p>
      <div className="flex items-center justify-center mt-4">
        <RedButton text="open" />
      </div>
    </div>
  );
};

export default Cards;
