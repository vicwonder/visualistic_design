import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import CustomButton from "./CustomButton";
import largePics from "./Illustration-design Images/image7.jpg";

const ImageCover = () => {
  return (
    <div className="large-cover">
      <div className="small-cover">
        <div>
          <img className="headphone-pics" src={largePics} alt="headphone-man" />
        </div>
        <div className="butts-container">
          <div className="three-btns">
            <CustomButton bg={false} text={"Art-Design"} icon={false} />
            <CustomButton bg={false} text={"Visualiser"} icon={false} />
            <CustomButton bg={false} text={"Developer"} icon={false} />
          </div>
          <div>
            <CustomButton
              bg={true}
              text={"Get Started"}
              icon={() => <FaPlusCircle size={27} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCover;
