import React from "react";
import ResponsiveNav from "./Components/ResponsiveNav";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import PopularCases from "./Components/PopularCases";
import About from "./Components/About";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <ResponsiveNav />
      <Hero />
      <About />
      <Features />
      <PopularCases />

      <Footer />
    </div>
  );
};

export default Home;
