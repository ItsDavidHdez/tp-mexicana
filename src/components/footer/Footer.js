import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <p className="Footer--info">
          Copyright © 2020 Técnica Profesional Mexicana S.A. de C.V. - <br />
          Todos los derechos reservados.
        </p>
        <div className="Footer--social">
          <img alt="Facebook" />
          <img alt="Instagram" />
          <img alt="linkedin" />
        </div>
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
