import React from "react";
import "./styles/Location.css";

const Location = ({ img, title, children }) => {
  return (
    <div className="Location--card__container">
      <div className="Location--card__img">
        <img src={img} alt={title} />
      </div>
      <h3 className="Location--subtitle">{title}</h3>
      {children}
    </div>
  );
};

export default Location;
