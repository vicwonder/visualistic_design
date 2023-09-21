import React from "react";
import ToolKit from "./ToolKit";
import kitpics1 from "./Illustration-design Images/image3.jpg";
import kitpics2 from "./Illustration-design Images/image2.jpg";
import kitpics3 from "./Illustration-design Images/image1.jpg";

const ToolKitConatiner = () => {
  return (
    <div className="toolscon">
      <div className="toolkit-text">
        <p>Various Features</p>
      </div>
      <div className="kits-container">
        <ToolKit
          bg={1}
          smallText={"Qualified Tools Kit"}
          largeText={"Visual Design"}
          image={kitpics1}
          number={"12$"}
        />
        <ToolKit
          bg={2}
          smallText={"Qualified Tools Kit"}
          largeText={"Digital Art"}
          image={kitpics2}
          number={"18$"}
        />
        <ToolKit
          smallText={"Qualified Tools Kit"}
          largeText={"Artistic Design"}
          image={kitpics3}
          number={"14$"}
          bg={3}
        />
      </div>
    </div>
  );
};

export default ToolKitConatiner;
