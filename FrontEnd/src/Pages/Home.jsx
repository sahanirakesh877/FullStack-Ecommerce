import React from "react";
import Hero from "../componentsEcomm.jsx/Hero";
import Caraosel from "../componentsEcomm.jsx/Caraosel";
import Sliders from "../componentsEcomm.jsx/Sliders";

import Products from "./Products";

const Home = () => {
  return (
    <> 
    <Caraosel />
    <Products/>
    <Sliders/>
      <Hero />
    </>
  );
};

export default Home;
