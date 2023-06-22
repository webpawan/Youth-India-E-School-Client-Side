import React from "react";
import "./style.css";
const Sections__one = () => {
  return (
    <div>
      <div className="section__one ">
        <div className="section__one-container-1 mt-5 pt-5 mx-auto  text-center">
          <h1 className="display-5 font-weight-bold">
            What will you design today?
          </h1>
          <h5 className="mt-4 font-weigh-light">
            Canva makes it easy to create professional designs and to share or
            print them.
          </h5>
          <button className="text-center mx-auto d-flex mt-4">
            Sign up for free
          </button>
        </div>
        <div className="section__one-container-2 ">
          <div className="video__container mt-5">
            <video
              autoPlay
              draggable="false"
              loop
              playsInline
              src="https://content-management-files.canva.com/943bd1b3-ffd6-4892-a4df-b107cb33e657/hero-banner-en-1600x852.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections__one;
