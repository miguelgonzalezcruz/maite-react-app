import React from "react";
import "../blocks/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__name-content">
        <p className="footer__text">Maite Reciclando</p>
      </div>
      <p className="footer__text">
        Developed by Miguel González | {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
