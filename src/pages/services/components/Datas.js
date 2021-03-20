import React from "react";
import { Link } from "react-router-dom";
import servicio1 from "../../../assets/img/servicios1.jpeg";
import servicio2 from "../../../assets/img/servicios2.jpeg";

const Datas = () => {
  return (
    <section className="Datos">
      <Link name="nuestros-servicios" to="#" />
      <h2 className="text-5xl text-center mt-24 mb-20">
        Hojas de Datos de Sistemas Organicos
      </h2>
      <div className="flex justify-center">
        <div className="w-96 h-32 px-6 py-6 bg-card mr-8">
          <p className="text-center text-lg">SO-FOAM-CHEM (pdf)</p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://img1.wsimg.com/blobby/go/21b56b5b-4094-4b30-b824-87315dec2468/downloads/SO-FOAM-CHEM.pdf?ver=1609007077300"
              className="h-8 w-32 bg-white rounded-md flex justify-center items-center my-0 mx-auto"
            >
              <span className="border-none no-underline	 text-black text-sm">
                DESCARGAR
              </span>
            </a>
          </div>
        </div>
        <div className="w-96 h-32 px-6 py-6 bg-card ml-8">
          <p className="text-center text-lg">SI-FOAM-CHEM (pdf)</p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://img1.wsimg.com/blobby/go/21b56b5b-4094-4b30-b824-87315dec2468/downloads/SI-FOAM-CHEM.pdf?ver=1609007077301"
              className="h-8 w-32 bg-white rounded-md flex justify-center items-center my-0 mx-auto"
            >
              <span className="border-none no-underline	 text-black text-sm">
                DESCARGAR
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-24 mx-0 mb-16">
        <img className="mr-1 w-96" alt="SO-FOAM-CHEM" src={servicio1} />
        <img className="ml-1 w-96" alt="SI-FOAM-CHEM" src={servicio2} />
      </div>
    </section>
  );
};

export default Datas;
