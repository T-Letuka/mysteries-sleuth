"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cases from "../Components/Cases";
import Link from "next/link";

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
      <h2 className="heading mb-2">Mystery Cases </h2>
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
          <Link href="/HeistCase">
            <Cases
              title="The heist:Stolen Star"
              paragraph="A priceless artifact, the Star of Alexandria, has been stolen from the Museum of Antiquities.Can you solve the enigma of the stolen star?"
              difficulty="Easy"
            />
          </Link>
          <Link href="/VanishingRelic">
            <Cases
              title="The Enigmatic Hest at Ravenwood Manor"
              paragraph="lorem"
              difficulty="medium"
            />
          </Link>

          <Cases
            title="The Enigmatic Hest at Ravenwood Manor"
            paragraph="lorem"
            difficulty="medium"
          />
          <Cases
            title="The Enigmatic Hest at Ravenwood Manor"
            paragraph="lorem"
            difficulty="medium"
          />
          <Cases
            title="The Enigmatic Hest at Ravenwood Manor"
            paragraph="lorem"
            difficulty="medium"
          />
          <Cases
            title="The Enigmatic Hest at Ravenwood Manor"
            paragraph="lorem"
            difficulty="medium"
          />
          <Cases
            title="The Enigmatic Hest at Ravenwood Manor"
            paragraph="lorem"
            difficulty="medium"
          />
          <Cases
            title="The Enigmatic Hest at Ravenwood Manor"
            paragraph="lorem"
            difficulty="medium"
          />
        </Carousel>
      </div>
    </>
  );
};

export default page;
