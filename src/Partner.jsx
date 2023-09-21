import React from "react";
import CustomButton from "./CustomButton";

const Partner = ({ icon, bgText, smText }) => {
  return (
    <div className="partners">
      <div className="icon">{icon}</div>
      <p className="bigText">{bgText}</p>
      <p className="smallText">{smText}</p>
      <div className="button">
        <CustomButton bg={true} text={"Learn More"} icon={false} />
      </div>
    </div>
  );
};

export default Partner;
