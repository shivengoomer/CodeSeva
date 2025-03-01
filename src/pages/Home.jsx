import React from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Services from "../components/Services";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="pt-[6rem] lg:pt-[8rem] xl:pt-[10rem] overflow-hidden">
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
        <Footer />

      </div>
    </>
  );
};

export default Home;
