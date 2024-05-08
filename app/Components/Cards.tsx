import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
        <div>
          <Cards title="Study Techniques" image={studyt.src} />
        </div>
        <div>
          <Cards title="Quiz" image={Quiz.src} />
        </div>
        <div>
          <Cards title="Learning Styles" image={learning.src} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
