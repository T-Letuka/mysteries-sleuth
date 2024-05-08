import React from "react";
import Image from "next/image";

interface CardContent {
  title: string;
  paragraph: string;
  image: string;
}

const Cards = ({ title, paragraph, image }: CardContent) => {
  return (
    <div
      className="text-center bg-[#7C0902] p-4  rounded-lg hover:shadow-lg transition-all duration-300
  cursor-pointer hover:scale-110"
    >
      <Image
        src={image}
        alt="icon"
        width={100}
        height={100}
        className="mx-auto"
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-white ">
        {title}
      </h1>
      <p className="mt-[1rem] text-white font-semibold opacity-90 text-[15px]">
        {paragraph}
      </p>
    </div>
  );
};

export default Cards;
