import React from "react";
import "../blocks/Hero.css";
import heroimage from "../images/hero-image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1 className="hero__title">Venta privada de muebles restaurados</h1>
          <p className="hero__subtitle">
            Muebles asequibles de calidad con una segunda vida
          </p>
          <button className="hero__button">Descúbrelos Gratis</button>
        </div>
        <div className="hero__image-container">
          <img className="image" src={heroimage} alt="showcase" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
