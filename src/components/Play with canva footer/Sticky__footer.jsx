import React from "react";
import "./style.css";
const Sticky__footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center fixed-bottom bg-light shadow-lg">
      <p className="px-5 w-70  ">
        Make yourself at home! Log in to keep your work safely stored to your
        account.
      </p>
      <div className="buttons d-flex px-5">
        <button className="mx-2">play with canva</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Sticky__footer;
