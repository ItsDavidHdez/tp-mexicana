import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import group from "../assets/img/group.jpg";
import work from "../assets/img/work.jpg";
import calidad from "../assets/img/calidad.webp";
import proteccion from "../assets/img/proteccion.webp";
import seguridad from "../assets/img/seguridad.webp";
import procesos from "../assets/img/procesos.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="Home">
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          infinite="true"
          autoPlayStrategy="none"
          swipeDelta="30"
          responsive={{
            768: {
              items: 2,
            },
            1024: {
              items: 1,
            },
          }}
        >
          <img
            src={group}
            className="sliderimg"
            alt="Group"
            onDragStart={(e) => e.preventDefault()}
          />
          <img
            src={work}
            className="sliderimg"
            alt="Work"
            onDragStart={(e) => e.preventDefault()}
          />
        </AliceCarousel>
      </div>
      <div className="App">
        <section className="System">
          <h2 className="System--title">Sistema de Gestión Integral</h2>
          <div className="System--certified">
            <div className="System--certified__container">
              <img src={calidad} alt="Calidad" />
              <p>ISO 9001: 2015 - Calidad</p>
            </div>
            <div className="System--certified__container">
              <img src={proteccion} alt="Protección ambiental" />
              <p>ISO 14001:2015 - Protección ambiental</p>
            </div>
            <div className="System--certified__container">
              <img src={seguridad} alt="Salud y Seguridad" />
              <p>ISO 45001:2018 - Salud y Seguridad</p>
            </div>
          </div>
        </section>
        <section className="Map">
          <h2 className="Map--title">Sistema de Gestión Integral</h2>
          <div className="Map--imgContainer">
            <img src={procesos} alt="Procesos" />
          </div>
        </section>
        <section className="Blog">
          <h2 className="Blog--title">Mi Blog</h2>
          <div className="Blog--container">
            <div className="Blog--card">
              <Link
                className="Blog--card__a"
                to="/guía-de-diseño-de-fluidos-empacadores"
              >
                <img alt="Guía de diseño de fluidos empacadores" />
                <span>26 de enero del 2021</span>
                <h6>Guía de diseño de fluidos empacadores</h6>
                <p>Continuar leyendo</p>
              </Link>
            </div>
            <div className="Blog--card">
              <Link
                className="Blog--card__a"
                to="/guía-de-diseño-de-fluidos-empacadores"
              >
                <img alt="Guía de diseño de fluidos empacadores" />
                <span>26 de enero del 2021</span>
                <h6>Guía de diseño de fluidos empacadores</h6>
                <p>Continuar leyendo</p>
              </Link>
            </div>
            <div className="Blog--card">
              <Link
                className="Blog--card__a"
                to="/guía-de-diseño-de-fluidos-empacadores"
              >
                <img alt="Guía de diseño de fluidos empacadores" />
                <span>26 de enero del 2021</span>
                <h6>Guía de diseño de fluidos empacadores</h6>
                <p>Continuar leyendo</p>
              </Link>
            </div>
            <div className="Blog--card">
              <Link
                className="Blog--card__a"
                to="/guía-de-diseño-de-fluidos-empacadores"
              >
                <img alt="Guía de diseño de fluidos empacadores" />
                <span>26 de enero del 2021</span>
                <h6>Guía de diseño de fluidos empacadores</h6>
                <p>Continuar leyendo</p>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <h1>Carousel</h1>
        </section>
        <section>
          <h2>Nuestros principales clientes</h2>
          <span>Logos de los clientes</span>
        </section>
      </div>
    </>
  );
}

export default Home;
