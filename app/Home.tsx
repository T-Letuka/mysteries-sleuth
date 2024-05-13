import React from "react";
import ResponsiveNav from "./Components/ResponsiveNav";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import PopularCases from "./Components/PopularCases";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <ResponsiveNav />
      <Hero />
      <Features />
      <PopularCases />
    </div>
  );
};

export default Home;
