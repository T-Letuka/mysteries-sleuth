import React from "react";
interface Props {
  title: string;
}

const FeatureCards = ({ title }: Props) => {
  return (
    <div
      className="text-center bg-[#000814] p-4  rounded-lg hover:shadow-lg transition-all duration-300
  cursor-pointer hover:scale-110"
    >
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-white ">
        {title}
      </h1>
      <p className="mt-[1rem] text-white opacity-90 text-[15px] pb-[15px]">
        Think of it as a sneak peek into the world of effective studying. Here,
        we&apos;ve gathered the most popular, tried-and-true methods that
        students swear by to ace their exams. So, grab a seat, take a look
        around, and get ready to level up your study game!
      </p>
    </div>
  );
};

export default FeatureCards;
