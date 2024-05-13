import React from "react";
import ResponsiveNav from "./Components/ResponsiveNav";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import PopularCases from "./Components/PopularCases";
import About from "./Components/About";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <ResponsiveNav />
      <Hero />
      <Features />
      <PopularCases />
      <About />
    </div>
  );
};

export default Home;
