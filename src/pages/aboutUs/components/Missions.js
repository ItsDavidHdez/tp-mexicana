import React from "react";
import "./styles/Objectives.css";

const Objectives = ({ img, title, children }) => {
  return (
    <div className="flex justify-around mb-28 mt-16">
      <div className="text-base	w-2/4">
        <h3 className="text-3xl	text-center mb-8">{title}</h3>
        {children}
      </div>
      <div className="self-center w-2/4 flex justify-center">
        <img className="w-96" src={img} alt={title} />
      </div>
    </div>
  );
};

export default Objectives;
