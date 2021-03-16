import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-info">
        <div className="Contact-info--title">
          <h1 className="Contact-info--title__h1">Comunícate con nosotros</h1>
        </div>
        <div className="Contact-info--subtitle">
          <h2 className="Contact-info--subtitle__h2">
            O, aún mejor, ¡ven a visitarnos!
          </h2>
          <p className="Contact-info--subtitle__par">
            Nos encanta recibir a nuestros clientes, así que ven en cualquier
            momento durante las horas de oficina.
          </p>
        </div>
        <div className="Contact-info--">
          <h3>TPMexicana</h3>
        </div>
        <p>
          Carretera Cárdenas-Comalcalco S/N, R/A Oriente quinta sección,
          Comalcalco, Tabasco
        </p>
        <Link to="#">contactot@tpmexicana.com</Link>
      </div>
      <div className="Contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3789.4466332410175!2d-93.20981478506323!3d18.23533588757577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d18.2354745!2d-93.20744239999999!4m5!1s0x85ee8f12ca570cf9%3A0x39fa7f5d3fec25e!2sLos%204%20Acuerdos%2C%20Cocina%20Contempor%C3%A1nea%2C%20Carretera%20federal%20Comalcalco-Cardenas%20R%2Fa%20Oriente%201era%20Secci%C3%B3n%2C%2086650%20Comalcalco%2C%20Tab.!3m2!1d18.2353754!2d-93.2075138!5e0!3m2!1ses!2smx!4v1615705103371!5m2!1ses!2smx"
          title="map"
          width="953"
          height="777"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
