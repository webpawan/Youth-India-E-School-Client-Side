import React from "react";
import "./style.css";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    id: 1,
    src: "https://content-management-files.canva.com/0c47aa22-697f-4aa3-8814-1b3a44e7cc59/desktop.jpeg",
    title: "We've got a desktop app",
    pera: "Design and collaborate from the comfort of your desktop - no browser, no tabs, no distractions. Download the app for free!",
  },
  {
    id: 2,
    src: "https://content-management-files.canva.com/0d1d4fcb-3135-4745-9dbe-88a246a3f3bb/enterprise.jpeg",
    title: "Businesses love us",
    pera: "See how teams of all sizes are using Canva to manage their workflows and create together.",
  },
  {
    id: 3,
    src: "https://content-management-files.canva.com/2b1ef73c-0e69-44bf-8edc-778d8ae0b947/presentations.jpeg",
    title: "We make presenting easy",
    pera: "Take the stress out of preparing and presenting with our go-to decks.",
  },
  {
    id: 4,
    src: "https://content-management-files.canva.com/8731525c-3f17-4f61-9d67-704dad7170bd/video.jpeg",
    title: "We have a video editor",
    pera: "Create and edit professional videos with easy animations, audio and more.",
  },
  {
    id: 5,
    src: "https://content-management-files.canva.com/3ff99977-de99-44df-9ef8-c59f0bf9c204/education.jpeg",
    title: "We're free for classrooms",
    pera: "Use Canva for in-person, remote or hybrid learning and teaching. Educators and students get their own free version of Canva.",
  },
  {
    id: 6,
    src: "https://content-management-files.canva.com/47aac49d-8b14-4b60-95d4-240b6b6d9688/print.jpeg",
    title: "We print and deliver",
    pera: "hoose a designer-made template, customise it, and we'll have it sustainably printed and delivered to your doorstep.",
  },
  {
    id: 7,
    src: "https://content-management-files.canva.com/aad80d31-390a-4a2d-a00c-38e50552a044/sustainability.jpeg",
    title: "We're sustainable",
    pera: "Learn what we're doing about our carbon footprint, and how your Canva Print order makes the world a bit more breathable.",
  },
  {
    id: 8,
    src: "https://content-management-files.canva.com/7651a4e9-2dde-4579-a604-a02f313eadd0/nonprofits.jpeg",
    title: "We're free for non profits",
    pera: "Non profits get their own free version of Canva, to keep doing great work in the world.",
  },
];

const Section__seven = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    // adaptiveHeight: true,
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

  return (
    <>
      <div className=" section__seven container-fluid d-flex flex-column justify-content-start mt-5 align-items-center pt-4 ">
        <h1 className="text-center mt-5">We're full of surprises</h1>
        <p className="text-center mx-auto w-100">
          Here are some of our best traits you might not know about
        </p>
      </div>
      <div className="row mt-3  mx-auto text-left   mb-5 ">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className=" d-flex flex-column align-items-center justify-content-between text-left px-2 mx-auto mb-4"
              >
                <div className="section__seven--img-container">
                  <img
                    src={item.src}
                    className="img-fluid rounded "
                    alt=""
                    srcset=""
                  />
                </div>

                <h5 className="section__seven--carousel-title w-100 px-3 ">
                  {item.title}
                </h5>
                <h6 className="section__seven--carousel-pera w-100 px-3">
                  {item.pera}
                </h6>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Section__seven;
