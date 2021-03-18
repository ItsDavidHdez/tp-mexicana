import React from "react";
import "./styles/Location.css";

const Location = ({ img, title, children }) => {
  return (
    <div className="Location--card__container">
      <div className="inline-block relative rounded-full w-44 h-44">
        <img className="w-96 -ml-16" src={img} alt={title} />
      </div>
      <h3 className="Location--subtitle">{title}</h3>
      {children}
    </div>
  );
};

export default Location;
