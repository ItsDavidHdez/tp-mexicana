import React from "react";
import { Datas, Works } from "./components";
import "./index.css";

const Services = () => {
  return (
    <div className="container mx-auto px-4 font-sans">
      <h1 className="text-6xl text-center	mb-6">Nuestros Servicios</h1>
      <Works />
      <Datas />
    </div>
  );
};

export default Services;
