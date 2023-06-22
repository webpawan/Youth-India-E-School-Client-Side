import React from "react";
import "./style.css";
import Card from "./Card";
const Sections__two = () => {
  return (
    <>
      <div className="container section__two pt-5 d-flex flex-column  align-items-center  px-5">
        <h1 className="pt-5 heading mt-5">A perfect fit for everyone</h1>
        <div className="container mt-5">
          <div className="section__two--card-container mt-3 row mx-auto px d-flex justify-content-center">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <p className="section__two-peragraph d-flex mx-auto w-100 justify-content-center">
          <span className=" special__text"> Educational organisations</span> and{" "}
          <span className="special__text">nonprofits</span> can enjoy premium
          Canva features for free
        </p>
      </div>
    </>
  );
};

export default Sections__two;
