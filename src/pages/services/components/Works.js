import React from "react";
import { Cards } from ".";
import bombeos from "../../../assets/img/bombeos.webp";
import cementaciones from "../../../assets/img/cementaciones.webp";
import estimulaciones from "../../../assets/img/estimulaciones.webp";
import lineaAcero from "../../../assets/img/linea-acero.webp";
import reparacion from "../../../assets/img/reparacion.webp";
import tuberia from "../../../assets/img/tuberia.webp";

const Works = () => {
  return (
    <section className="container mx-auto grid grid-cols-3 grid-rows-2 gap-4 mb-18">
      <div>
        <Cards title="Bombeos Diversos" img={bombeos}>
          <div className="text-gray-500 p-5 text-center mt-6 text-xl">
            <p className="mb-5">
              Contamos con servicios de bombeo con unidades de alta presión
              Onshore y Offshore:
            </p>
            <ul className="list-disc text-justify pl-5 mb-5">
              <li>Bombeo de productos químicos.</li>
              <li>Bombeo en estimulaciones.</li>
              <li>Bombeo en cementaciones.</li>
              <li>Pruebas de hermeticidad.</li>
              <li>Bombeo en limpiezas químicas.</li>
              <li>Bombeos continuos.</li>
            </ul>
            <p className="mb-5">SISTEMA ADQUISICIÓN DE DATOS EN TIEMPO REAL:</p>
            <ul className="list-disc text-justify pl-5 mb-5">
              <li>Presión</li>
              <li>Gasto</li>
              <li>Volumen</li>
              <li>Generación de Código ASCII</li>
            </ul>
          </div>
        </Cards>
      </div>
      <div>
        <Cards title="Cementaciones" img={cementaciones}>
          <div className="text-gray-500 p-5 text-center mt-6 text-xl">
            <p>Diseño y ejecución de cementaciones:</p>
            <ul className="list-disc text-justify pl-5 mb-5">
              <li>Cementación de tubería conductora.</li>
              <li>Cementación de tubería superficial.</li>
              <li>Cementación de tubería intermedia.</li>
              <li>Cementaciones forzadas.</li>
              <li>
                Cementación de tapones para desvió, circulación y abandono.
              </li>
              <li>Sistemas para control de pérdida.</li>
            </ul>
            <p className="mb-4">Pruebas de Laboratorio:</p>
            <ul className="list-disc text-justify pl-5 mb-5">
              <li>Determinación de densidad</li>
              <li>Perdida de filtrado (Fluid Lost).</li>
              <li>Tiempo Bombeable.</li>
              <li>Esfuerzo compresivo (Método No Destructivo).</li>
              <li>Compatibilidad de sistemas (Lodo, Espaciador).</li>
              <li>Propiedades Tixotrópicas.</li>
              <li>Propiedades Reológicas.</li>
            </ul>
          </div>
        </Cards>
      </div>
      <div>
        <Cards
          title="Estimulaciones de Limpia y Matriciales"
          img={estimulaciones}
        >
          <div className="text-gray-500 p-5 text-center mt-6 text-xl">
            <p className="mb-5">
              Representamos una nueva generación de sistemas químicos patentados
              y diseñados para minimizar el daño a tuberías, elaborados en Base
              Aceite y Base Agua con aditivos para evitar corrosión con el fin
              de generar una mejor integración a la corriente de crudo sin
              alterar las propiedades físicas de los aceites o fluidos a tratar.
            </p>
            <ul className="list-disc text-justify pl-5 mb-5">
              <li>Sistemas orgánicos - Solvente (Xileno).</li>
              <li>Sistemas inorgánicos (HCL, HCl : HF).</li>
              <li>Sistemas ácidos vis cosificados.</li>
              <li>Sistemas ácidos emulsionados.</li>
              <li>Sistemas no ácidos orgánicos.</li>
            </ul>
            <a
              href="#nuestros-servicios"
              className="h-12 bg-white w-72 rounded-md flex justify-center items-center my-0 mx-auto"
            >
              <span className="border-none no-underline	 text-black text-sm">
                OBTÉN MÁS INFORMACIÓN
              </span>
            </a>
          </div>
        </Cards>
      </div>
      <div>
        <Cards title="Línea de Acero" img={lineaAcero}>
          <div className="text-gray-500 p-5 text-center mt-6 text-xl">
            <p className="mb-5">
              Contamos con una Unidad de Línea de Acero para ofrecer los
              siguientes servicios:
            </p>
            <ul className="list-disc text-justify pl-5 mb-5">
              <li>Calibración de Tubería de Producción.</li>
              <li>Colocación y/o recuperación de Válvulas Gas Lift.</li>
              <li>Colocación y/o recuperación de Válvula de Pie.</li>
              <li>Apertura y/o cierre de camisa deslizable.</li>
              <li>Limpieza de parafina.</li>
              <li>Toma de muestra con cubeta o barril.</li>
              <li>
                Colocación y/o recuperación de accesorios en niple de asiento.
              </li>
              <li>Alojar o recuperar válvulas de circulación (Tipo Jet).</li>
            </ul>
            <p>
              Toma de información de gradientes estáticos, dinámicos y pruebas
              de variación de presión con sondas de memoria de 0-175°C
            </p>
          </div>
        </Cards>
      </div>
      <div>
        <Cards title="Terminación y Reparación de Pozos" img={reparacion}>
          <div className="text-gray-500 p-5 text-center mt-6 text-xl">
            <p className="mb-5">
              Contamos con equipo de terminación y reparación, que al integrar
              nuestra gama de servicios generamos soluciones y servicios
              integrales.
            </p>
            <ul className="list-disc text-justify pl-5 mb-5">
              <li>Reparación Mayor y Menor</li>
              <li>Pescas</li>
              <li>Moliendas</li>
              <li>Cambio de Aparejo de Producción</li>
              <li>Perforación</li>
            </ul>
          </div>
        </Cards>
      </div>
      <div>
        <Cards title="Tubería Flexible" img={tuberia}>
          <div className="text-gray-500 p-5 text-center mt-6 text-xl">
            <p className="mb-5">
              Ofrece soluciones con servicios de Tubería Flexible en diámetro de
              1 ¾” para los siguientes servicios:
            </p>
            <ul className="list-disc text-justify pl-5 mb-5">
              <li>Estimulación matricial (orgánica e inorgánica).</li>
              <li>Inducción de pozo.</li>
              <li>Limpieza mecánica (des carbonatación)</li>
              <li>Colocación de tapón mecánico.</li>
              <li>Corte de tubería.</li>
              <li>Sarta de Velocidad.</li>
              <li>Cementación</li>
              <li>Inyección de N2.</li>
            </ul>
          </div>
        </Cards>
      </div>
    </section>
  );
};

export default Works;
