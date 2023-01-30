import React from "react";

import Navigation from "./Navigation";

import "../blocks/Header.css";
import logo from "../images/logo-maitereciclando.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Logo Maite Reciclando" />
        <div className="navigation__container">
          <Navigation />
        </div>
      </div>
      <div className="header__divider"></div>
    </header>
  );
}

export default Header;
