import React from "react";
import "../blocks/Navigation.css";

function Navigation() {
  return (
    <div className="navigation__container">
      <button className="navigation__button-signup">Sign up</button>
      <button className="navigation__button-login">Log in</button>
    </div>
  );
}

export default Navigation;
