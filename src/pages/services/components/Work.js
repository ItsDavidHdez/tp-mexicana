import React from "react";
import { Cards } from "../components";
import bombeos from "../../../assets/img/bombeos.webp";
import cementaciones from "../../../assets/img/cementaciones.webp";
import estimulaciones from "../../../assets/img/estimulaciones.webp";
import lineaAcero from "../../../assets/img/linea-acero.webp";
import reparacion from "../../../assets/img/reparacion.webp";
import tuberia from "../../../assets/img/tuberia.webp";

const Work = () => {
  return (
    <section className="Services">
      <div className="Container">
        <Cards title="Bombeos Diversos" img={bombeos}>
          <div className="Services--info">
            <p>
              Contamos con servicios de bombeo con unidades de alta presión
              Onshore y Offshore:
            </p>
            <ul className="Services--info__ul">
              <li>Bombeo de productos químicos.</li>
              <li>Bombeo en estimulaciones.</li>
              <li>Bombeo en cementaciones.</li>
              <li>Pruebas de hermeticidad.</li>
              <li>Bombeo en limpiezas químicas.</li>
              <li>Bombeos continuos.</li>
            </ul>
            <p>SISTEMA ADQUISISCIÓN DE DATOS EN TIEMPO REAL:</p>
            <ul className="Services--info__ul">
              <li>Presión</li>
              <li>Gasto</li>
              <li>Volumen</li>
              <li>Generación de Código ASCII</li>
            </ul>
          </div>
        </Cards>
      </div>
      <div className="Container">
        <Cards title="Cementaciones" img={cementaciones}>
          <div className="Services--info">
            <p>Diseño y ejecución de cementaciones:</p>
            <ul className="Services--info__ul">
              <li>Cementación de tubería conductora.</li>
              <li>Cementación de tubería superficial.</li>
              <li>Cementación de tubería intermedia.</li>
              <li>Cementaciones forzadas.</li>
              <li>
                Cementación de tapones para desvió, circulación y abandono.
              </li>
              <li>Sistemas para control de pérdida.</li>
            </ul>
            <p>Pruebas de Laboratorio:</p>
            <ul className="Services--info__ul">
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
      <div className="Container">
        <Cards
          title="Estimulaciones de Limpia y Matriciales"
          img={estimulaciones}
        >
          <div className="Services--info">
            <p>
              Representamos una nueva generación de sistemas químicos patentados
              y diseñados para minimizar el daño a tuberías, elaborados en Base
              Aceite y Base Agua con aditivos para evitar corrosión con el fin
              de generar una mejor integración a la corriente de crudo sin
              alterar las propiedades físicas de los aceites o fluidos a tratar.
            </p>
            <ul className="Services--info__ul">
              <li>Sistemas orgánicos - Solvente (Xileno).</li>
              <li>Sistemas inorgánicos (HCL, HCl : HF).</li>
              <li>Sistemas ácidos vis cosificados.</li>
              <li>Sistemas ácidos emulsionados.</li>
              <li>Sistemas no ácidos orgánicos.</li>
            </ul>
            <button type="button" className="Services--info__button">
              OBTÉN MÁS INFORMACIÓN
            </button>
          </div>
        </Cards>
      </div>
      <div className="Container">
        <Cards title="Línea de Acero" img={lineaAcero}>
          <div className="Services--info">
            <p>
              Contamos con una Unidad de Línea de Acero para ofrecer los
              siguientes servicios:
            </p>
            <ul className="Services--info__ul">
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
      <div className="Container">
        <Cards title="Terminación y Reparación de Pozos" img={reparacion}>
          <div className="Services--info">
            <p>
              Contamos con equipo de terminación y reparación, que al integrar
              nuestra gama de servicios generamos soluciones y servicios
              integrales.
            </p>
            <ul className="Services--info__ul">
              <li>Reparación Mayor y Menor</li>
              <li>Pescas</li>
              <li>Moliendas</li>
              <li>Cambio de Aparejo de Producción</li>
              <li>Perforación</li>
            </ul>
          </div>
        </Cards>
      </div>
      <div className="Container">
        <Cards title="Tubería Flexible" img={tuberia}>
          <div className="Services--info">
            <p>
              Ofrece soluciones con servicios de Tubería Flexible en diámetro de
              1 ¾” para los siguientes servicios:
            </p>
            <ul className="Services--info__ul">
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

export default Work;
