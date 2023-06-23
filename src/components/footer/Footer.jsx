import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <div className=" pb-5 mx-auto">
      <hr className="w-100" />
      <div className="row mx-auto main__footer--sections-1">
        <div className=" text-left col-md-2 col-sm-4 col-6 mb-2">
          <h1 className="mb-3 heading">Features</h1>
          <p>Curved text generator</p>
          <p>Photo effects</p>
          <p>Image enhancer</p>
          <p>Add frames to photos</p>
          <p>Add text to photos</p>
          <p>Online video recorder</p>
          <p>Video trimmer</p>
          <p>Convert videos to MP4</p>
          <p>See more features</p>
        </div>
        <div className="col-md-2 col-sm-4 col-6 text-left mb-2">
          <h1 className="mb-3 heading">Explore</h1>
          <p>Design ideas</p>
          <p>Custom prints</p>
          <p>Font pairing</p>
          <p>Colours</p>
          <p>Colour wheel</p>
          <p>Colour palette generator</p>
          <p>Blog</p>
          <p>Apps</p>
          <p>Template directory</p>
        </div>
        <div className=" text-left col-md-2 col-sm-4 col-6 mb-2 ">
          <h1 className="mb-3 heading">Community</h1>
          <p>Online communities</p>
          <p>Creators</p>
          <p>Canva Represents Fund</p>
          <p>Developers</p>
          <p>Partnerships</p>
          <p>Affiliates programme</p>
        </div>

        <div className=" text-left col-md-2 col-sm-4 col-6 mb-2">
          <h1 className="mb-3 heading">Download</h1>
          <p>iOS</p>
          <p>Android</p>
          <p>Windows</p>
          <p>Mac</p>
        </div>
        <div className=" text-right  me-5 col-md-2 col-sm-4 col-6 mb-2">
          <h1 className="mb-3">Company</h1>
          <p>About</p>
          <p>Newsroom</p>
          <p>Carrers</p>
          <p>Sustainability</p>
          <p>Trust Centre</p>
          <p>Security</p>
          <p>Terms and Privacy</p>
          <p>Contact Sales</p>
        </div>
      </div>
      <div className="main__footer-hr ">
        <hr className="" />
      </div>
      <div className=" main__footer-bottom p-3 d-flex justify-content-between align-items-start text-center mx-auto">
        <button className="main__footer-language ">
          {" "}
          <span>
            <i class="fa-solid fa-globe"></i>
          </span>{" "}
          <span className="mx-2">English (India)</span>{" "}
          <span>
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </button>
        <div className="info d-flex flex-column">
          <h5 className="mt-1 main__footer-text">
            © 2023 All Rights Reserved, Canva®
          </h5>
          <p className="text-center mx-auto main__footer-pera w-100 d-flex align-items-center  justify-content-center">
            <span className="mx-1">Privacy policy</span> |
            <span className="mx-1">Terms</span>
          </p>
        </div>
        <div className="social__icons d-flex align-items-center">
          <span>
            <i class="fa-brands fa-facebook"></i>
          </span>
          <span className="mx-2">
            <i class="fa-brands fa-twitter"></i>
          </span>{" "}
          <span className="me-2">
            <i class="fa-brands fa-pinterest"></i>
          </span>
          <span>
            <i class="fa-brands fa-instagram"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
