import React from "react";
import ResponsiveNav from "./Components/ResponsiveNav";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Cardsection from "./Components/Cardsection";
import Cases from "./Components/Cases";
import Casess from "./Components/Casess";

const page = () => {
  return (
    <div>
      <ResponsiveNav />
      <Hero />
      <Cardsection />
      <Casess />
    </div>
  );
};

export default page;
