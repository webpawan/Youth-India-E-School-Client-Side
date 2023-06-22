import React from "react";
import "./style.css";
const Card = () => {
  return (
    <>
      <div className="col-10 col-sm-6 col-md-4 px-4">
        <div className="my__card   ">
          <div className="card-body  ">
            <h2 className="card-title text-center heading mb-4">
              {" "}
              <span className="me-1">
                <i class="fa-solid fa-crown bg__gold"></i>
              </span>{" "}
              Canva Free
            </h2>
            <p className="card-text text-center">
              For anyone wanting to design anything, on your own or with others.
              No design experience required, and it's free forever.
            </p>
            <button className="my__btn btn__purple w-100 rounded mt-2 ">
              Get Canva Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
