import React from "react";
interface Props {
  text: string;
}
const WhiteButton = ({ text }: Props) => {
  return (
    <button
      className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-white
      relative hover:bg-gradient-to-r 
    hover:from-bg-black hover:to-bg-white text-black hover:ring-2 hover:ring-offset-2
     hover:ring-blue-600
    transition-all ease-out duration-300"
    >
      <span
        className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 trasnform trasnlate-x-12 
      group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"
      ></span>
      <span className="relative"> {text} </span>
    </button>
  );
};

export default WhiteButton;
