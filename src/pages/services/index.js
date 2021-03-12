import React from "react";
import { Datas, Works } from "./components";
import "./index.css";

const Services = () => {
  return (
    <div className="App">
      <h1 className="Services--title">Nuestros Servicios</h1>
      <Works />
      <Datas />
    </div>
  );
};

export default Services;
