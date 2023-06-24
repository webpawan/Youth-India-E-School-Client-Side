import React from "react";
import "./style.css";
import Image__galery from "./Image__galery";
const Section__five = () => {
  //
  //
  return (
    <div className="container section__five my-5 d-flex flex-column justify-content-start align-items-center">
      <div className="d-flex flex-column">
        <h1 className="mx-auto text-center d-flex">
          Templates for absolutely anything
        </h1>
        <p className="mt-2  w-100 mx-auto d-flex  text-center">
          Customise an office template, or design something more personal, like
          an invitation.
        </p>
      </div>
      {/* -------------- */}
      <div className="section__five--image-galery row mx-auto  mt-4">
        <Image__galery src="https://template.canva.com/EAD7RS_AUHA/5/0/400w-7xP3yZCn8fI.jpg" />
        <Image__galery src="https://template.canva.com/EADZ4JnHDfI/3/0/286w-ZlWNaw0QaX8.jpg" />
        <Image__galery src="https://template.canva.com/EADapG51fls/3/0/400w-aChlnr5L_Ww.jpg" />
        <Image__galery src="https://template.canva.com/EAEXA859wm0/2/0/400w-jRAxCD5Qpy4.jpg" />
        <Image__galery src="https://template.canva.com/EADzZv2-vpk/1/0/400w-ogkaP-Wi21g.jpg" />
        <Image__galery src="https://template.canva.com/EADaogF5JtM/5/0/400w-gOabQZ-2x58.jpg" />
        <Image__galery src="https://template.canva.com/EAEGDHjLsXk/10/0/400w-qLQxVs9xg-Q.jpg" />
        <Image__galery src="https://template.canva.com/EADakBMT2L8/7/0/400w-wHZFkdNCb4g.jpg" />
        <Image__galery src="https://template.canva.com/EADannRC2Cs/2/0/400w-zdxoayS1dW4.jpg " />
        <Image__galery src="https://template.canva.com/EAEWSCtgF7E/1/0/400w-Ur_cwx4NbVE.jpg" />
        <Image__galery src="https://template.canva.com/EADaosVPiEU/1/0/400w-HI9ygtHJxXI.jpg" />
        <Image__galery src="https://template.canva.com/EAEgGRQ-LHs/7/0/400w-zHUy6GwfcuI.jpg" />
        <Image__galery src="https://template.canva.com/EADao85M6_0/1/0/400w-4vwp1100Ykw.jpg" />
        <Image__galery src="	https://template.canva.com/EADakBMT2L8/7/0/400w-wHZFkdNCb4g.jpg" />
        <Image__galery src="https://template.canva.com/EAD8SnpZkbk/2/0/400w-7el5iY3r3Cw.jpg" />
      </div>
      {/* <div class="image-gallery">
        <img
          src="https://template.canva.com/EAD7RS_AUHA/5/0/400w-7xP3yZCn8fI.jpg"
          alt="Image 1"
        />
        <img
          src="https://template.canva.com/EADZ4JnHDfI/3/0/286w-ZlWNaw0QaX8.jpg"
          alt="Image 2"
        />
        <img
          src="https://template.canva.com/EAD8SnpZkbk/2/0/400w-7el5iY3r3Cw.jpg"
          alt="Image 3"
        />
        <img
          src="	https://template.canva.com/EADakBMT2L8/7/0/400w-wHZFkdNCb4g.jpg"
          alt="Image 4"
        />
        <img
          src="	https://template.canva.com/EAEGDHjLsXk/10/0/400w-qLQxVs9xg-Q.jpg"
          alt="Image 5"
        />
        <img
          src="	https://template.canva.com/EAEGDHjLsXk/10/0/400w-qLQxVs9xg-Q.jpg"
          alt="Image 6"
        />
      </div> */}
      <button className="my__btn btn__white my-5">Browse all templates</button>{" "}
    </div>
  );
};

export default Section__five;
