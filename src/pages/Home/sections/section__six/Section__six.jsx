import React from "react";
import "./style.css";
const Section__six = () => {
  return (
    <div className="section__six container d-flex flex-column align-items-center justify-content-start ">
      <h1 className="text-center heading mb-4">
        Create your best work, together
      </h1>
      <p className="text-center">
        Try Canva for Teams, the all-in-one solution for teams of all sizes to
        create and collaborate together.
      </p>
      <div className="section__siz-body row mt-5 ">
        <div className="col-11 col-md-5 mx-auto px-5 mt-5 pt-4">
          <ul>
            <li className="d-flex ">
              <span className="mx-3">
                <i class="fa-regular fa-folder-closed"></i>
              </span>
              <p className="w-100">
                Team folders help you stay organised, store brand assets, and
                manage content
              </p>
            </li>
            <li className="d-flex ">
              <span className="mx-3">
                <i class="fa-solid fa-mobile"></i>
              </span>
              <p className="w-100">
                Plan, create, schedule, and publish your social media posts
                directly from Canva
              </p>
            </li>{" "}
            <li className="d-flex ">
              <span className="mx-3">
                <i class="fa-solid fa-user-plus"></i>
              </span>
              <p className="w-100 ">
                Real-time collaboration across countries, companies, and
                departments
              </p>
            </li>{" "}
            <li className="d-flex ">
              <span className="mx-3">
                <i class="fa-regular fa-comment"></i>
              </span>
              <p className="w-100">
                Built-in comments to communicate, keep content moving, and
                resolve suggestions in real-time
              </p>
            </li>{" "}
          </ul>
        </div>
        <div className="col-11 col-md-6 mx-auto d-flex align-items-end justify-content-top   ">
          <video
            autoPlay
            draggable="false"
            loop
            playsInline
            className="img-fluid"
            src="https://static.canva.com/anon_home/teams-en-974x720.mp4"
          ></video>
        </div>
      </div>
      <button className="">Try Canva for Team</button>
    </div>
  );
};

export default Section__six;
