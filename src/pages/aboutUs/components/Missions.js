import React from "react";
import "./styles/Objectives.css";

const Objectives = ({ img, title, children }) => {
  return (
    <div className="Objectives">
      <div className="Objectives--info">
        <h3 className="Objectives--info__title">{title}</h3>
        {children}
      </div>
      <div className="Objectives--img">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default Objectives;
