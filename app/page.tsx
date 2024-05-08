import React from "react";
import ResponsiveNav from "./Components/ResponsiveNav";
import About from "./Components/About";
import Hero from "./Components/Hero";

const page = () => {
  return (
    <div>
      <ResponsiveNav />
      <Hero />
      <About />
    </div>
  );
};

export default page;
