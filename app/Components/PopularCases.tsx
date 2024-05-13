"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";
import riddle from "@/public/riddle.png";

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
            title="The Vanishing Relic"
            paragraph="Mystery:Missing Things"
            difficulty="medium level"
          />
          <Cards
            image={riddle.src}
            title="The Vanishing Relic"
            paragraph="Mystery:Missing Things"
            difficulty="medium level"
          />
          <Cards
            image={riddle.src}
            title="The Vanishing Relic"
            paragraph="Mystery:Missing Things"
            difficulty="medium level"
          />
          <Cards
            image={riddle.src}
            title="The Vanishing Relic"
            paragraph="Mystery:Missing Things"
            difficulty="medium level"
          />

          <Cards
            image={riddle.src}
            title="The Vanishing Relic"
            paragraph="Mystery:Missing Things"
            difficulty="medium level"
          />
          <Cards
            image={riddle.src}
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
