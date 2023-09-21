import React from "react";
import CustomButton from "./CustomButton";
import { FaCircleChevronRight } from "react-icons/fa6";

const TeamContainer = ({ image, name, skill, text }) => {
  return (
    <div className="t-container">
      <div>
        <img id="team-img" src={image} alt="team-pictures" />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>{skill}</p>
        <p>{text}</p>
        <div>
          <CustomButton
            bg={true}
            text={"View Profile"}
            icon={() => <FaCircleChevronRight size={27} />}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
