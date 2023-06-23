import React from "react";

const Card = () => {
  return (
    <>
      <div className="section__seven-card d-flex flex-column text-left ">
        <div className="section__seven--img-container">
          <img
            src="https://content-management-files.canva.com/0c47aa22-697f-4aa3-8814-1b3a44e7cc59/desktop.jpeg"
            alt=""
            srcset=""
            className="img-fluid"
          />
        </div>
        <h5>We've got a desktop app</h5>
        <p>
          Design and collaborate from the comfort of your desktop - no browser,
          no tabs, no distractions. Download the app for free!
        </p>
      </div>
    </>
  );
};

export default Card;
