import React from "react";
import { Link } from "react-router-dom";
import servicio1 from "../../../assets/img/servicios1.jpeg";
import servicio2 from "../../../assets/img/servicios2.jpeg";

const Datas = () => {
  return (
    <section className="Datos">
      <Link name="nuestros-servicios" to="#" />
      <h2 className="Datos--title">Hojas de Datos de Sistemas Organicos</h2>
      <div className="Datos--cards">
        <div className="Datos--card" id="card1">
          <p className="Datos--card__p">SO-FOAM-CHEM (pdf)</p>
          <div className="Datos--card__button">
            <div className="Datos--card__a">
              <a href="https://img1.wsimg.com/blobby/go/21b56b5b-4094-4b30-b824-87315dec2468/downloads/SO-FOAM-CHEM.pdf?ver=1609007077300">
                DESCARGAR
              </a>
            </div>
          </div>
        </div>
        <div className="Datos--card" id="card2">
          <p className="Datos--card__p">SI-FOAM-CHEM (pdf)</p>
          <div className="Datos--card__button">
            <div className="Datos--card__a">
              <a href="https://img1.wsimg.com/blobby/go/21b56b5b-4094-4b30-b824-87315dec2468/downloads/SI-FOAM-CHEM.pdf?ver=1609007077301">
                DESCARGAR
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Datos--img">
        <img id="img1" alt="SO-FOAM-CHEM" src={servicio1} />
        <img id="img2" alt="SI-FOAM-CHEM" src={servicio2} />
      </div>
    </section>
  );
};

export default Datas;
