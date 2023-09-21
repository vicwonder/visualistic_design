import React from "react";
import laptopPics from "./Illustration-design Images/image2.jpg";
import CustomButton from "./CustomButton";
import { FaPlusCircle } from "react-icons/fa";

const DesignText = () => {
  return (
    <div className="prof-designs">
      <div className="prof-design1">
        <p>Qualified Visualistic Design</p>
        <div className="design-image">
          <img src={laptopPics} alt="laptop-pics" />
        </div>
        <div className="text-buttons">
          <div className="text-button1">
            <CustomButton bg={false} text={"Web-Design"} icon={false} />
            <CustomButton bg={false} text={"Art-Design"} icon={false} />
          </div>
          <CustomButton
            bg={true}
            text={"Get Started"}
            icon={() => <FaPlusCircle size={27} />}
          />
        </div>
      </div>
      <div className="designs">
        <div className="prof-design2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="pdesign2-btn">
            <CustomButton bg={false} text={"Read More"} icon={false} />
          </div>
        </div>
        <div className="prof-design3">
          <p>
            Nullam consectetur dolor vel ex ullamcorper, non viverra neque
            aliquet. Vivamus sed nulla rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignText;
