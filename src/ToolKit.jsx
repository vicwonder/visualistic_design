import React from "react";
import CustomButton from "./CustomButton";
import { FaCircleChevronRight } from "react-icons/fa6";

const ToolKit = ({ bg, smallText, largeText, image, number }) => {
  return (
    <div className={`kits bg-${bg}`}>
      <p id="sm-text">{smallText}</p>
      <p id="bg-text">{largeText}</p>
      <img id="picture" src={image} alt="kits-images" />
      <div className="btn-num">
        <CustomButton
          bg={false}
          text={"Get Started"}
          icon={() => <FaCircleChevronRight size={27} />}
        />
        <p id="number">{number}</p>
      </div>
    </div>
  );
};

export default ToolKit;
