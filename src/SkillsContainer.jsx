import React from "react";
import ProgressBar from "./ProgressBar";

const SkillsContainer = () => {
  return (
    <div className="skill-container">
      <div className="our-skill">
        <p id="lgText">Skills Group</p>
        <p id="smText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis,
          faucibus at tincidunt vel, ultrices vitae mauris. Pellentesque ante.
          Praesent posuere dignissim nibh in finibus. Nunc rutrum nibh
          pellentesque, viverra dolor quis, sollicitudin libero.
        </p>
      </div>
      <div>
        <ProgressBar text={"Visual Design"} number={"95%"} />
        <ProgressBar text={"Digital Art"} number={"68%"} />
        <ProgressBar text={"Artistic Design"} number={"74%"} />
      </div>
    </div>
  );
};

export default SkillsContainer;
