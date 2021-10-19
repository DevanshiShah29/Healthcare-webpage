import React from "react";
import HeroBanner from "../assets/images/HeroBanner.png";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <img className="hero-image" src={HeroBanner} alt="hero" />
      <div className="title">
        <span>IDS Nederland</span>brengt patiënt en professionals in
        gezondsheidszorg dichter bij elkaar.
      </div>
      <button
        className="btn-play-video"
        data-video-id="https://www.youtube.com/embed/ppdFrLhj7us"
      ></button>
      <div className="line"></div>
    </section>
  );
};

export default HeroSection;
