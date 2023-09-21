import React from "react";
import CustomButton from "./CustomButton";
import { FaCircleChevronRight } from "react-icons/fa6";
import image1 from "./Illustration-design Images/image1.jpg";

const Illustration = () => {
  return (
    <div className="illustration-container">
      <div className="illustration-text">
        <p id="big-text">Visualistic Design</p>
        <hr className="hr" />
        <p id="small-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div id="ill-btn">
          <CustomButton
            bg={false}
            text={"Get Started"}
            icon={() => <FaCircleChevronRight size={27} />}
          />
        </div>
      </div>
      <div className="illustration-image">
        <img src={image1} alt="image1" />
      </div>
    </div>
  );
};

export default Illustration;
