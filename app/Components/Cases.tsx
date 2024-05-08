"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

const images = [
  { src: "/folder.png", title: "Title 1" },
  { src: "/folder1.png", title: "Title 2" },
  { src: "/folder2.png", title: "Title 3" },
  { src: "/folder3.png", title: "Title 4" },
  { src: "/folder.png", title: "Title 5" },
];

const Cases = () => {
  const [current, setCurrent] = useState(0);

  const PrevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24">
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <div className="relative w-full max-w-[1500px] flex items-center">
          <div className="absolute left-2 right-2 flex justify-between z-10">
            <button onClick={PrevSlide}>
              <ArrowLeftIcon className="h-8 w-7" />
            </button>
            <button onClick={onNextClick}>
              <ArrowRightIcon className="h-8 w-7" />
            </button>
          </div>
          <motion.div
            animate={{ x: `calc(-${current * 100}vw)` }}
            className="flex gap-4"
          >
            {images.map((image, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <motion.img
                  src={image.src}
                  alt="images"
                  animate={{ opacity: idx === current ? 1 : 0.3 }}
                  className="object-fit w-full"
                />
                <p>{image.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </MotionConfig>
    </div>
  );
};

export default Cases;
