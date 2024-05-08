"use client";
import React from "react";
import Cards from "@/app/Components/Cards";
import coldcase from "@/public/coldcase.png";
import murder from "@/public/knife_12440741.png";
import riddle from "@/public/riddle.png";
import { motion } from "framer-motion";

const Sneakpeak = () => {
  return (
    <div className="pb-[3rem] pt-[5rem] bg-black">
      <motion.h1
        initial={{ color: "white" }}
        animate={{ color: "#FF0000" }}
        transition={{ delay: 3 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-2 uppercase text-center"
      >
        Explore Cases
      </motion.h1>
      <div
        className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2
     lg:grid-cols-3 items-center gap-[1.4rem]"
      >
        <div>
          <Cards
            image={riddle.src}
            title="Riddle"
            paragraph="Ready for a thrill? Dive into mysteries and riddles on our website. Join the adventure today!"
          />
        </div>
        <div>
          <Cards
            image={murder.src}
            title="Murder Cases"
            paragraph="Ready to unravel secrets and conquer challenges? Join us now!"
          />
        </div>
        <div>
          <Cards
            image={coldcase.src}
            title="Cold Cases"
            paragraph="Ready for the ultimate challenge? Dive into cold cases with us. It only gets tougher from here. Join the investigation today!"
          />
        </div>
      </div>
    </div>
  );
};

export default Sneakpeak;
