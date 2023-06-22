import React from "react";
import "./style.css";
import Card from "./Card";
const Sections__two = () => {
  return (
    <>
      <div className="section__two py-5 d-flex flex-column  align-items-center">
        <h1 className="pt-5">A perfect fit for everyone</h1>
        <div className="container mt-5">
          <div className="row mx-auto  d-flex justify-content-center">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <p className="section__two-peragraph">
          Educational organisations and nonprofits can enjoy premium Canva
          features for free
        </p>
      </div>
    </>
  );
};

export default Sections__two;
