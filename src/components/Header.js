import React from "react";
import { Link } from "react-router-dom";

import "../blocks/Header.css";
import "../blocks/Navigation.css";

import logo from "../images/logo-maitereciclando.svg";

function Header({
  openRegisterPopup,
  openLoginPopup,
  isLogged,
  currentUser,
  handleLogout,
  isAdmin,
  openAddItemPopup,
}) {
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
            <div className="navigation__container">
              {isAdmin ? (
                <>
                  <p>
                    Hello {currentUser.name}, you can start adding items now.
                  </p>
                  <button
                    className="navigation__button-login"
                    onClick={openAddItemPopup}
                  >
                    Add Item
                  </button>
                  <button
                    className="navigation__button-login"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <p>Hello {currentUser.name}, you can start booking now.</p>
                  <button
                    className="navigation__button-login"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </>
              )}
            </div>
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
