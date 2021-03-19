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
        <div className="flex">
          <FaFacebook size="25" className="mr-6" />
          <FaInstagram size="25" className="mr-6" />
          <FaLinkedin size="25" className="mr-6" />
        </div>
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
