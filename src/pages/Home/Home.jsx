import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img className="banner-img" src={hero_banner} alt="" />
        <div className="hero-caption">
          <img className="hero-title" src={hero_title} alt="" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards title={"Action Movies"}/>
        <TitleCards title={"Comedy Movies"}/>
        <TitleCards title={"Rom Com Movies"}/>
      </div>
    </div>
  );
};

export default Home;
