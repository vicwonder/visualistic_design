import React from "react";

const CustomButton = ({ bg, text, icon }) => {
  return (
    <>
      <div className={`custom-button ${bg ? "bg_yellow" : "bg_white"}`}>
        <span>{text}</span>
        <span style={{ marginTop: 2, height: 30 }}>{icon ? icon() : null}</span>
      </div>
    </>
  );
};

export default CustomButton;
