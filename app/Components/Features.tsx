import React from "react";
import card from "@/public/card.jpg";
import card1 from "@/public/card1.jpg";
import card2 from "@/public/card3.jpg";
import Image from "next/image";

const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        Explore the Mysteries <br />
        with Sleuth Scribe
      </h1>
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 gap-[3rem]">
        <div>
          <div className="p-6 md:w-[350px] hover:bg-gray-300 rounded-lg transition-all duration-200">
            <Image
              src={card}
              alt="card-image"
              width={400}
              height={400}
              className="rounded-3xl mx-auto"
            />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-mono">
              Mysteries
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              sint aliquid tempore possimus voluptas dolor voluptatem? Adipisci
              aliquid temporibus amet!
            </p>
          </div>
        </div>
        <div>
          <div className="p-6 md:w-[350px] lg:translate-y-[3rem] hover:bg-gray-200 rounded-lg transition-all duration-200">
            <Image
              src={card1}
              alt="card-image"
              className="rounded-3xl mx-auto"
              width={400}
              height={400}
            />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-mono">
              Riddles
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              sint aliquid tempore possimus voluptas dolor voluptatem? Adipisci
              aliquid temporibus amet!
            </p>
          </div>
        </div>
        <div>
          <div className="p-6 md:w-[350px] hover:bg-gray-200 rounded-lg transition-all duration-200">
            <Image
              src={card2}
              alt="card-image"
              width={400}
              height={400}
              className="rounded-3xl mx-auto"
            />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-mono">
              Puzzles
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              sint aliquid tempore possimus voluptas dolor voluptatem? Adipisci
              aliquid temporibus amet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
