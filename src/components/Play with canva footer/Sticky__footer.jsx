import React from "react";
import "./style.css";
const Sticky__footer = () => {
  return (
    <div className="sticky__footer mx-auto  d-flex justify-content-between align-items-center fixed-bottom  shadow-lg ">
      <p className="mt-2 sticky__footer-pera">
        <span className="sticky__footer-span"> Make yourself at home!</span> Log
        in to keep your work safely stored to your account.
      </p>
      <div className="buttons  ">
        <button className="my__btn btn__light me-3">play with canva</button>
        <button className="my__btn btn__purple">Login</button>
      </div>
    </div>
  );
};

export default Sticky__footer;
