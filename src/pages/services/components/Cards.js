import React from "react";

const Cards = ({ title, img, children }) => {
  return (
    <>
      <h3 className="text-3xl text-center h-12 flex justify-center items-center mt-auto mb-12">
        {title}
      </h3>
      <div className="md:w-auto flex justify-center">
        <img className="w-96" src={img} alt={title} />
      </div>
      {children}
    </>
  );
};

export default Cards;
