import React from "react";
import ResponsiveNav from "./Components/ResponsiveNav";
import Hero from "./Components/Hero";
import Features from "./Components/Features";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <ResponsiveNav />
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
