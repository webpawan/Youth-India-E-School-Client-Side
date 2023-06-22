import React from "react";
import "./style.css";
const Section__four = () => {
  return (
    <div className="container section__four">
      <div className="row p-2">
        <div className="col-10 col-md-6  section__four--video-container d-flex justify-content-center ">
          <video
            autoPlay
            draggable="false"
            loop
            playsInline
            className="section__four-video p-3 "
            src="https://static.canva.com/anon_home/benefits-start-en-1200x780-compressed.mp4 "
          ></video>
        </div>
        <div className="col-10 col-md-6  section__four--info-container text-left d-flex flex-column justify-content-center">
          <h2 className="heading section__four-heading">Ready-made designs</h2>
          <p className="my-2 section__four-peragraph ">
            Benefit from thousands of professional templates, images, and
            quality content to choose from, for example when ordering new
            <span className="special__text">business cards</span> or editing
            your next <span className="special__text">video.</span>
          </p>
          <div className="section__four-btn mt-2">
            <button className="my__btn btn__purple">Create a design</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-6  text-left section__four--info-container d-flex flex-column justify-content-center ">
          <h2 className="section__four-heading heading">Built for teamwork</h2>
          <p className="my-2 section__four-peragraph ">
            Invite people to edit with you or set your whole team up to manage
            brand assets, brainstorm on{" "}
            <span className="special__text">whiteboards,</span> get approvals,
            and scale content with tools like{" "}
            <span className="special__text">docs.</span>
          </p>
          <div className="section__four-btn mt-2">
            <button className="my__btn btn__purple">Work together</button>
          </div>
        </div>
        <div className="col-10 col-md-6  section__four--video-container d-flex justify-content-center ">
          <video
            autoPlay
            draggable="false"
            loop
            playsInline
            className="section__four-video p-3 "
            src="https://static.canva.com/anon_home/benefits/benefits-collab-en-974x634.mp4 "
          ></video>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-6  section__four--video-container d-flex justify-content-center ">
          <img
            src="https://static.canva.com/anon_home/benefits/benefits-share-en-1288x838.jpg"
            alt=""
            srcset=""
            className="img-fluid"
          />
        </div>
        <div className="col-10 col-md-6  text-left section__four--info-container d-flex flex-column justify-content-center">
          <h2 className="heading section__four-heading">
            Too good not to share
          </h2>
          <p className="my-2 section__four-peragraph ">
            Whether you need to build a new{" "}
            <span className="special__text">website</span> or print some
            <span className="special__text"> posters,</span> let your creations
            shine in the real world. Easily publish, download or share whatever
            you make in Canva. You can even have it printed and dropped straight
            at your door!
          </p>
          <div className="section__four-btn mt-2">
            <button className="my__btn btn__purple ">Design your vesion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section__four;
