"use client";
import React from "react";
import hero from "@/public/hero.jpg";
import Image from "next/image";
import RedButton from "./Buttons/RedButton";
import WhiteButton from "./Buttons/WhiteButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse items-center justify-center md:flex-row md:items-center md:justify-between">
        <div className="mb-8 md:mb-0 md:mr-8 md:w-1/2">
          <motion.h1
            initial={{ color: "white" }}
            animate={{ color: "#FF0000" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-2"
          >
            Enter the Realm of Mystery
          </motion.h1>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Step into a world of intrigue and suspense, where every page holds
            secrets waiting to be uncovered. Join us on a thrilling journey
            through unsolved cases and enigmatic puzzles, as we dive deep into
            the heart of suspense.
          </p>
          <span className="flex justify-center items-center gap-3 mt-2">
            <RedButton text="Login" />
            <WhiteButton text="Explore Site" />
          </span>
        </div>
        <motion.div animate={{}} className="md:w-1/2">
          <Image
            src={hero}
            alt="hero-image"
            className="max-w-full h-auto rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
