import React from "react";
import { Link } from "react-router-dom";

import "../blocks/Header.css";
import "../blocks/Navigation.css";

import logo from "../images/logo-maitereciclando.svg";

function Header({ openRegisterPopup, openLoginPopup, isLogged, currentUser }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img
            className="header__logo"
            src={logo}
            alt="logo Maite Reciclando"
          />
        </Link>

        <div className="navigation__container">
          {isLogged ? (
            <>
              <Link to="/profile" className="navigation__username">
                {currentUser.name}
              </Link>
            </>
          ) : (
            <>
              <button
                className="navigation__button-signup"
                onClick={openRegisterPopup}
              >
                Sign Up
              </button>
              <button
                className="navigation__button-login"
                onClick={openLoginPopup}
              >
                Log In
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
// import Navigation from "./Navigation";

// import "../blocks/Header.css";
// import logo from "../images/logo-maitereciclando.svg";

// function Header({ handleRegister }) {
//   return (
//     <header className="header">
//       <div className="header__container">
//         <img className="header__logo" src={logo} alt="Logo Maite Reciclando" />
//         <div className="navigation__container">
//           <Navigation handleRegister={handleRegister} />
//         </div>
//       </div>
//       <div className="header__divider"></div>
//     </header>
//   );
// }
