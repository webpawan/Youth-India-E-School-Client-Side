import React, { useRef } from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Section__three = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ];

  return (
    <>
      <div className="section__three   d-flex flex-column align-items-center  mt-4  ">
        <div className="section__three-body d-flex flex-column align-items-center mb-5">
          <h1 className=" mb-3 heading mb-4">
            Trusted by well known companies
          </h1>
          <div className="d-flex mt-5  ">
            <div>
              <h2> Single Item</h2>
              <Slider {...settings}>
                {data.map((item) => {
                  return <div key={item.id}>{item.name}</div>;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section__three;
