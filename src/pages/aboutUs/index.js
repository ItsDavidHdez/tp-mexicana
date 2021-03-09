import React from "react";
import { Missions, Objectives, Location } from "./components";
import imgTp from "../../assets/img/work.jpg";
import organization from "../../assets/img/organization.webp";
import imgGroup from "../../assets/img/group.jpg";
import imgPolitics from "../../assets/img/politica-integral.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="App">
      <section className="History">
        <h1 className="History--title">Nosotros</h1>
        <h3 className="History--subtitle">Historia</h3>
        <div className="History--container">
          <img
            className="History--container__img"
            src={imgGroup}
            alt="Nosotros"
          />
        </div>
        <p className="History--info">
          TPMexicana inicia sus operaciones al abrir su base operativa en el año
          2005 en la Ciudad de Poza Rica, Veracruz ofreciendo al mercado
          petrolero servicios de registro de parámetros en tiempo real. En 2009
          comienza a proveer servicios de bombeos con Unidades de Alta Presión,
          en 2011 traslada su matriz a Ciudad del Carmen, Campeche y abre su
          segunda base operaciones en Comalcalco, Tabasco continuando la línea
          de servicios de Bombeo a Alta Presión consolidándose como un fuerte
          competidor en el mercado. Más tarde en 2016 expande sus líneas de
          servicios, incorporando los servicios de Tubería Flexible,
          Estimulaciones, Cementaciones y Línea de Acero, para finalmente en
          2017 integrar la línea de terminación y reparación de pozos. <br /> En
          la actualidad ofrecemos soluciones y servicios integrales con
          Ingeniería aplicada y personal técnico calificado fortaleciendo su
          competencia en el mercado petrolero mexicano.
        </p>
      </section>
      <section className="Mission">
        <h2 className="Mission--title">
          Política Integral, Misión, Visión, Valores
        </h2>
        <Objectives img={imgPolitics} title="Política Integral">
          <p className="Objectives--info__par">
            Técnica Profesional Mexicana S.A de C.V. realiza servicios a la
            industria petrolera cumpliendo con los más altos estándares de
            calidad satisfaciendo plenamente los requerimientos y expectativas
            de sus clientes, proporcionando condiciones de trabajo seguras y
            saludables para la prevención de lesiones y deterioro de la salud,
            comprometiéndonos a establecer controles para la eliminación de los
            peligros y reducción de los riesgos a la salud y seguridad del
            trabajador, cumpliendo con los requisitos legales vigentes;
            generando conciencia y compromiso al personal para proteger el medio
            ambiente y prevenir la contaminación. <br /> Promoviendo la
            participación y consulta de los trabajadores para el desarrollo del
            sistema de gestión integrado para así garantizar una mejora
            continua, así como el desempeño en materia de seguridad industrial,
            seguridad operativa y protección ambiental. Esta política deberá ser
            cumplida por contratistas, subcontratistas, proveedores y
            prestadores de servicios
          </p>
        </Objectives>
        <Missions img={imgTp} title="Misión">
          <p className="Objectives--info__par">
            Somos una compañía Mexicana, dedicada a proveer servicios en el
            ámbito de la industria. Buscando siempre prestar el mejor servicio,
            brindando calidad, seguridad, responsabilidad y protección al medio
            ambiente. Para así lograr una plena satisfacción de nuestros
            clientes.
          </p>
        </Missions>
        <Objectives img={imgTp} title="Visión">
          <p className="Objectives--info__par">
            Seguir proporcionado a nuestros clientes, la alternativa más viable
            para resolver sus necesidades, utilizando los más altos estándares
            de calidad en nuestros servicios.
          </p>
        </Objectives>
        <Missions img={imgTp} title="Valores" info="">
          <p className="Objectives--info__par">
            Trabajamos con calidad, entusiasmo y esmero por ser siempre los
            mejores, de la misma manera esperamos con nuestros servicios
            contribuir al desarrollo en armonía de nuestros clientes.
          </p>
          <ul className="Objectives--info__par">
            <li>
              Honestidad: El valor innato en nuestra organización y un sello de
              distinción que nos representa y nos distingue en nuestra vida.
            </li>
            <li>
              Calidad: Nos gusta hacer las cosas bien, con eficacia y
              eficiencia, entendiendo a nuestros clientes y trabajando siempre
              por ser mejores.
            </li>
            <li>
              Cumplimiento: Vital para responder de manera organizada y clara a
              nuestros clientes ya que depositaron su confianza en nosotros.
            </li>
            <li>
              Seguridad: Indispensable para satisfacer las necesidades de
              nuestros clientes ofreciendo garantía de trabajar con seguridad y
              realizar un servicio seguro.
            </li>
            <li>
              Trabajo en equipo: desarrollamos nuestro trabajo con respeto,
              colaboración, comunicación y tolerancia.
            </li>
          </ul>
        </Missions>
      </section>
      <section className="Organization">
        <h2 className="Organization--title">Organigrama</h2>
        <div className="Organization--img">
          <img src={organization} alt="Organigrama" />
        </div>
      </section>
      <Location />
    </div>
  );
};

export default AboutUs;
