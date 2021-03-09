import React from "react";
import Locations from "./Locations";
import imgTp from "../../../assets/img/work.jpg";
import "./styles/Location.css";

const Location = () => {
  return (
    <section className="Location">
      <h2 className="Location--title">Nuestras ubicaciones</h2>
      <div className="Location--card">
        <Locations img={imgTp} title="Matriz Ciudad del Carmen" info="">
          <p className="Location--container__info">
            Calle 65, No.42, Col. Playa Norte, C.P. 24115, Ciudad del Carmen,
            Campeche
          </p>
        </Locations>
        <Locations img={imgTp} title="Matriz Ciudad del Carmen">
          <a
            href="https://www.google.com/maps/place/TPMexicana/@20.527334,-97.498612,14z/data=!4m5!3m4!1s0x0:0x307e42c54f82cea0!8m2!3d20.5273337!4d-97.4986117?hl=es-419"
            className="Location--container__info"
            id="link--location"
          >
            Carretera a la Antena de Microondas S/N, San Miguel Mecatepec,
            Tihuatlan, Veracruz, México.
          </a>
        </Locations>
        <Locations img={imgTp} title="Base Comalcalco">
          <a href="https://www.google.com/maps/place/T%C3%A9cnica+Profesional+Mexicana+S.A.+de+C.V./@18.199882,-93.224953,14z/data=!4m5!3m4!1s0x0:0x4ef0cc2cf525d58e!8m2!3d18.1998822!4d-93.2249534?hl=es-419">
            <p className="Location--container__info" id="link--location">
              Carretera Cárdenas-Comalcalco S/N, R/A Oriente quinta sección,
              Comalcalco, Tabasco
            </p>
          </a>
        </Locations>
      </div>
    </section>
  );
};

export default Location;
