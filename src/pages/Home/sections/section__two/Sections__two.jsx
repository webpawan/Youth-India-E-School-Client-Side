import React from "react";
import "./style.css";

const data = [
  {
    id: 1,
    title: "canva Free",
    desc: "For anyone wanting to design anything, on your own or with others. No design experience required, and it's free forever.",
    crown: "",
  },
  {
    id: 2,
    title: "Canva Pro",
    desc: "For individuals wanting unlimited access to premium content, with special tools to grow your brand or passion project.",
    crown: "crown",
  },
  {
    id: 3,
    title: "Canva for Teams",
    desc: "For teams of all sizes wanting to create together, with premium workplace tools and approval flows.",
    crown: "crown",
  },
];

const Sections__two = () => {
  return (
    <>
      <div className="container section__two pt-5 d-flex flex-column  align-items-center  px-5">
        <h1 className="pt-5 heading mt-5">A perfect fit for everyone</h1>
        <div className="container mt-5">
          <div className="section__two--card-container mt-3 row mx-auto px d-flex justify-content-center">
            {data.map((item) => {
              return (
                <div className="col-10 col-sm-6 col-md-4 px-4">
                  <div className="my__card   ">
                    <div className="card-body  ">
                      <h2 className="card-title text-center heading mb-4">
                        {" "}
                        <span className="me-1">
                          <i class={`fa-solid fa-${item.crown} bg__gold`}></i>
                        </span>{" "}
                        {item.title}
                      </h2>
                      <p className="card-text text-center">{item.desc}</p>
                      <button className="my__btn btn__purple w-100 rounded mt-2 ">
                        Get Canva Free
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
