import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
          <a href="https://www.facebook.com/TPMexicana">
            <FaFacebook size="25" color="white" />
          </a>
          <a href="https://www.instagram.com/tecnicaprofesionalmexicana/">
            <FaInstagram size="25" color="white" />
          </a>
          <a href="https://www.linkedin.com/in/recursos-humanos-193126200/">
            <FaLinkedin size="25" color="white" />
          </a>
        </div>
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
