"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";
import riddle from "@/public/riddle.png";
import card from "@/public/card.jpg";
import card1 from "@/public/puzzle.png";
import hero6 from "@/public/hero6.jpg";
import hero5 from "@/public/hero5.jpg";
import hero4 from "@/public/murder.png";
import hero1 from "@/public/hero1.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const PopularCases = () => {
  return (
    <div className="pt-[2rem] pb-[2rem]">
      <h1 className="heading">
        Most<span className="text-[#FF0800] underline ml-3">viewed</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <Cards
            image={riddle.src}
            title="Riddle 01"
            paragraph="A few mystery riddles"
            difficulty="Easy"
          />
          <Cards
            image={card.src}
            title="The Vanishing Relic"
            paragraph="Mystery:Missing Things"
            difficulty="medium level"
          />
          <Cards
            image={hero6.src}
            title="The Enigmatic Heist at Ravenwood Manor"
            paragraph="Mystery:Missing Things"
            difficulty="medium level"
          />

          <Cards
            image={card1.src}
            title="The Vanishing Heirloom"
            paragraph="Mystery:Missing Things"
            difficulty="medium level"
          />
          <Cards
            image={hero1.src}
            title="The Vanishing Relic"
            paragraph="Mystery:Missing Things"
            difficulty="medium level"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularCases;
