import React from "react";
import "./style.css";
const Sections__one = () => {
  return (
    <div>
      <div className="section__one ">
        <div className="section__one-container-1 mt-5  mx-auto  text-center">
          <h1 className="heading mt-3">What will you design today?</h1>
          <h5 className="mt-4">
            Canva makes it easy to create professional designs and to share or
            print them.
          </h5>
          <button className="text-center mx-auto d-flex mt-4 btn btn__purple">
            Sign up for free
          </button>
        </div>
        <div className="section__one-container-2 mt-3 ">
          <div className="section__one-container-2-imgs d-none d-md-flex justify-content-between flex-column">
            <div className="section__one-container--2-imgs-header d-flex justify-content-between">
              <img
                src="	https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=300/22f18aa3-ac5c-45b6-bd4a-93fbfdd754f2/template-1.jpg"
                alt=""
                srcset=""
                className=" p-4 "
              />{" "}
              <img
                src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=306/673b652f-2614-43ff-8647-81ecbdb04678/template-3.jpg"
                alt=""
                srcset=""
                className=" m-5"
              />
            </div>
            <div className="section__one-container--2-imgs-footer d-flex justify-content-between mt-5">
              <img
                src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=454/b3bbd63b-12e6-43de-abe6-d6652fb3deea/template-2.jpg"
                alt=""
                srcset=""
                className="mt-5 p-3 ms-5"
              />{" "}
              <img
                src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=340/35b5c343-4194-4ae8-90f1-7ec803d4600d/template-4.jpg"
                alt=""
                srcset=""
                className="mt-5 "
              />
            </div>
          </div>
          <div className="video__container mt-5">
            <video
              autoPlay
              draggable="false"
              loop
              className="img-fluid"
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
