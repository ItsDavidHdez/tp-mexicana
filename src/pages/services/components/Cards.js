import React from "react";

const Cards = ({ title, img, children }) => {
  return (
    <div className="Services--container">
      <h3 className="Services--container__title">{title}</h3>
      <div className="Services--container__img">
        <img className="Services--img" src={img} alt={title} />
      </div>
      {children}
    </div>
  );
};

export default Cards;
