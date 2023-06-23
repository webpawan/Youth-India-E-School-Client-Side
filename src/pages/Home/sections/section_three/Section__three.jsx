import React, { useRef } from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Section__three = () => {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      src: "https://static.canva.com/anon_home/logos/hubspot-monochrome.png",
    },
    {
      id: 2,
      src: "	https://static.canva.com/anon_home/logos/sony-music-monochrome.png",
    },
    {
      id: 3,
      src: "https://static.canva.com/anon_home/logos/salesforce-grayscale.png",
    },
    {
      id: 4,
      src: "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
    },
    {
      id: 5,
      src: "https://static.canva.com/anon_home/logos/reddit-monochrome.png",
    },
    {
      id: 6,
      src: "https://static.canva.com/anon_home/logos/danone-grayscale.png",
    },
  ];

  return (
    <>
      <div className="section__three   d-flex flex-column align-items-center  mt-4 mb-3  ">
        <div className="section__three-body d-flex flex-column align-items-center ">
          <h1 className="  heading ">Trusted by well known companies</h1>
        </div>
      </div>

      <div className="row section__three-brands  mx-auto mb-5 py-2 ">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="img__slider-container d-flex mb-3 align-items-center"
              >
                <img src={item.src} className="img-fluid " alt="" srcset="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Section__three;
