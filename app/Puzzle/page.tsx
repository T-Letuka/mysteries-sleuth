"use client";
import React from "react";
import ResponsiveNav from "../Components/ResponsiveNav";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import folder from "@/public/folder.png";
import folder1 from "@/public/folder1.png";
import hero6 from "@/public/malware.png";
import hero from "@/public/wanted.png";
import hero1 from "@/public/wanted2.png";
import Cases from "../Components/Cases";
import Footer from "../Components/Footer";
import Riddles from "../Components/Riddles";

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
const page = () => {
  return (
    <>
      <ResponsiveNav />
      <div className="pt-[3rem] pb-[3rem]">
        <h2 className="heading mb-2">Puzzles</h2>
        <div className="w-[80%] mx-auto mt-6 ">
          <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={false}
            centerMode={false}
            responsive={responsive}
            itemClass="item"
            showDots={true}
          >
            <Riddles title="PUZZLE 1" image={folder.src} />
            <Riddles title="PUZZLE 2" image={folder.src} />
            <Riddles title="PUZZLE 3" image={folder1.src} />
            <Riddles title="PUZZLE 4" image={folder1.src} />
            <Riddles title="PUZZLE 5" image={folder.src} />
          </Carousel>
          <h1 className="heading mt-4">THE RIDDLES</h1>
          <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={false}
            centerMode={false}
            responsive={responsive}
            itemClass="item"
            showDots={true}
          >
            <Riddles title="Pack 1" image={hero1.src} />
            <Riddles title="Pack 2" image={hero6.src} />
            <Riddles title="Pack 3" image={hero1.src} />
            <Riddles title="Pack 4" image={hero.src} />
            <Riddles title="Pack 5" image={hero6.src} />
          </Carousel>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
