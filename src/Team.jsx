import React from "react";
import TeamContainer from "./TeamContainer";
import pix1 from "./Illustration-design Images/image7.jpg";
import pix2 from "./Illustration-design Images/image5.jpg";
import pix3 from "./Illustration-design Images/image6.jpg";

const Team = () => {
  return (
    <div className="teams">
      <p id="bgText">Team Groups</p>
      <p id="smText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="team-con">
        <TeamContainer
          image={pix1}
          name={"Jessica Swift"}
          skill={"Manager"}
          text={"Lorem ipsum dolor sit amet, consectet adipiscing elit."}
        />
        <TeamContainer
          image={pix2}
          name={"Benita Palmer"}
          skill={"Designer"}
          text={"Lorem ipsum dolor sit amet, consectet adipiscing elit."}
        />
        <TeamContainer
          image={pix3}
          name={"Ada Brown"}
          skill={"Developer"}
          text={"Lorem ipsum dolor sit amet, consectet adipiscing elit."}
        />
      </div>
    </div>
  );
};
export default Team;
