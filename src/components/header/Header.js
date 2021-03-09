import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <nav className="Nav">
        <div className="Nav--img">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="Nav--info">
          <Link className="Nav--info--links" to="/">
            INICIO
          </Link>
          <Link className="Nav--info--links" to="/nosotros">
            QUIÉNES SOMOS
          </Link>
          <Link className="Nav--info--links" to="/experiencia">
            EXPERIENCIA
          </Link>
          <Link className="Nav--info--links" to="/servicios">
            SERVICIOS
          </Link>
          <Link className="Nav--info--links" to="/galeria">
            GALERIA
          </Link>
          <Link className="Nav--info--links" to="/contacto">
            CONTACTO
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
