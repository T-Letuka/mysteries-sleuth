"use client";
import React from "react";
import ResponsiveNav from "../Components/ResponsiveNav";
import Footer from "../Components/Footer";
import MysteryCases from "../Components/MysteryCases";
import { motion } from "framer-motion";
import AnimatedText from "../Components/Animatedtext";
const page = () => {
  return (
    <>
      <ResponsiveNav />
      <div className="pt-[3rem] pb-[3rem] w-[90%] md:w-[80%] mx-auto">
        <h1 className="heading ">Cases</h1>
        <AnimatedText />
      </div>
      <div className="pt-[1rem] pb-[1rem]">
        <MysteryCases />
      </div>

      <Footer />
    </>
  );
};

export default page;
