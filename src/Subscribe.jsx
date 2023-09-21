import React from "react";
import CustomButton from "./CustomButton";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <p>Subscribe</p>
      <form className="form-container">
        <input type="text" className="form-control" placeholder="Name" />
        <input type="email" className="form-control" placeholder="E-mail" />
        <CustomButton bg={false} text={"Subscribe"} icon={false} />
      </form>
    </div>
  );
};

export default Subscribe;
