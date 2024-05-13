"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hero3 from "@/public/hero4.jpg";
import hero from "@/public/hero5.jpg";
import hero1 from "@/public/hero6.jpg";
import Image from "next/image";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
        showDots={true}
      >
        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-black md:clip_path">
          <div className="w-[80%] grid grid-col-1 md:grid-cols-2 justify-center items-center gap-10 mx-auto">
            <Image src={hero3} alt="hero-img" className="hidden md:block" />
            <div>
              <h1 className="text-[40px] font-semibold text-white">
                SLEUTH SCRIBES
              </h1>
              <h2 className="text-[60px] leading-[4rem] uppercase text-[#FF0800] font-bold">
                Mystery <br /> Maven
              </h2>
              <p className="text-white mt-[1rem] text-[18px] text-opacity-75 ">
                Dive into a world of mystery and adventure. Explore thrilling
                cases, uncover hidden clues, and sharpen your detective skills
                with us. Let the adventure begin!
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-black md:clip_path">
          <div className="w-[80%] p-1 grid grid-col-1 md:grid-cols-2 justify-center items-center gap-10 mx-auto">
            <Image src={hero} alt="hero-img" className="hidden md:block" />
            <div>
              <h1 className="text-[40px] font-semibold text-white">
                SLEUTH SCRIBES
              </h1>
              <h2 className="text-[60px] leading-[4rem] uppercase text-[#FF0800] font-bold">
                Unraveling
                <br /> Mysteries
              </h2>
              <p className="text-white mt-[1rem] text-[18px] text-opacity-75 ">
                Where mysteries await your keen eye and sharp mind. Join us on a
                journey of intrigue, discovery, and adventure. Get ready to
                unravel secrets and solve captivating cases. Let's embark on
                this thrilling adventure together!
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-[#111111] md:clip_path">
          <div className="w-[80%] grid grid-col-1 md:grid-cols-2 justify-center items-center gap-10 mx-auto">
            <Image src={hero1} alt="hero-img" className="hidden md:block" />
            <div>
              <h1 className="text-[40px] font-semibold text-white">
                SLEUTH SCRIBES
              </h1>
              <h2 className="text-[60px] leading-[5rem] uppercase text-[#FF0800] font-bold">
                Unlocking
                <br /> Secrets
              </h2>
              <p className="text-white mt-[1rem] text-[18px] text-opacity-75 ">
                Dive into mysteries, uncover clues, and embark on thrilling
                adventures. Let's solve the puzzle together!
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
