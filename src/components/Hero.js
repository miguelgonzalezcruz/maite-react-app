import React from "react";
import "../blocks/Hero.css";
import heroimage from "../images/hero-image.jpeg";

function Hero({ openRegisterPopup, isLogged }) {
  return (
    <div className="hero">
      {isLogged ? (
        <>
          <div></div>
        </>
      ) : (
        <>
          <div className="hero__container">
            <div className="hero__image-container">
              <img className="image" src={heroimage} alt="showcase" />
            </div>
            <div className="hero__text">
              <h1 className="hero__title">
                Venta privada de muebles restaurados
              </h1>
              <p className="hero__subtitle">
                Muebles asequibles de calidad con una segunda vida
              </p>
              <button className="hero__button" onClick={openRegisterPopup}>
                Descúbrelos Gratis
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
