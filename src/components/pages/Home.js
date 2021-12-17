import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
// import Cards2 from "../Cards2";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Cards2 /> */}
      <Footer />
    </>
  );
}

export default Home;
