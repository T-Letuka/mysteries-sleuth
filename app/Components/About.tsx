"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import about01 from "@/public/about01.jpg";

const About = () => {
  return (
    <div className="pt-[1rem] pb-[3rem] bg-black ">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center pt-[5rem]">
        <div className="order-2 lg:order-1 hidden sm:block ">
          <Image
            src={about01}
            alt="about-image"
            className="rounded-lg
        "
          />
        </div>

        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="order-1 lg:order-2"
        >
          <h1
            className="text-[20px] md:text-[25px] lg:text-[28px] text-white font-bold leading-[2rem] 
          md:leading-[3rem]"
          >
            Enter the Realm of Mystery
          </h1>
          <p className="mt-[1.5rem] mb-[1.5rem] text-white opacity-90 text-[18px] md:text-[20px] ">
            Welcome to the gateway of intrigue and enigma! Step into a world
            where mysteries abound and secrets whisper in the shadows. Our
            website is a haven for those who revel in the thrill of the unknown,
            where each click leads you deeper into the labyrinth of suspense and
            curiosity. From unsolved crimes to supernatural phenomena, we delve
            into the realms of the mysterious, offering tantalizing tales and
            thought-provoking puzzles for the curious mind. Join us on this
            journey of discovery, where every page holds the promise of
            unraveling a new mystery.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
