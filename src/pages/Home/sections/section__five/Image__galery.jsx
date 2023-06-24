import React from "react";

const Image__galery = ({ src }) => {
  return (
    <>
      <div className="col-6 col-sm-4 col-md-3 col-lg-2   my-2 rounded">
        <img src={src} className="img-fluid" />
      </div>
    </>
  );
};

export default Image__galery;
