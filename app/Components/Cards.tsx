import React from "react";

interface CardContent {
  title: string;
  paragraph: string;
}

const Cards = ({ title, paragraph }: CardContent) => {
  return (
    <div
      className="text-center bg-[#000814] p-4  rounded-lg hover:shadow-lg transition-all duration-300
  cursor-pointer hover:scale-110"
    >
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-white ">
        {title}
      </h1>
      <p className="mt-[1rem] text-white opacity-90 text-[15px]">{paragraph}</p>
    </div>
  );
};

export default Cards;
