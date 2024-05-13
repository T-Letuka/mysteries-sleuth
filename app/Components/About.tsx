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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            obcaecati praesentium similique numquam fugit qui quae? Pariatur
            cumque cum esse dolore quia placeat aut, illo architecto dicta vitae
            inventore ex.
          </p>
          <div className="flex items-center gap-5 mt-6">
            {" "}
            <WhiteButton text="Sign In" />
            <RedButton text="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
