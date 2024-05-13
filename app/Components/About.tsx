import Image from "next/image";
import React from "react";
import vide from "@/public/abbout.gif";
import WhiteButton from "./Buttons/WhiteButton";
import RedButton from "./Buttons/RedButton";

const About = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 md:grid-cols-2 lg:grid-col-2 gap-[2rem]">
        <Image src={vide} alt="about-img" />
        <div>
          <h1
            className="text-[30px] md:text-[40px] lg:text-[50px]  xl:text-[60px] font-serif
          leading-[2rem] md:leading-[3rem] uppercase"
          >
            Realm of Mystery
          </h1>
          <p className="mt-[1rem] text-black text-[17px] text-opacity-70">
            Step into a world where mysteries abound and secrets whisper in the
            shadows. Our website is a haven for those who revel in the thrill of
            the unknown, where each click leads you deeper into the labyrinth of
            suspense and curiosity. From unsolved crimes to supernatural
            phenomena, we delve into the realms of the mysterious, offering
            tantalizing tales and thought-provoking puzzles for the curious
            mind. Join us on this journey of discovery, where every page holds
            the promise of unraveling a new mystery.
          </p>
          <div className="flex items-center gap-5 mt-6">
            <WhiteButton text="Sign Up" />
            <RedButton text="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
