import React from "react";

const ProgressBar = ({ bar1, text, number }) => {
  return (
    <div className="progress-bar ">
      <div className="text-num">
        <p>{text}</p>
        <p>{number}</p>
      </div>
      <div className="outer">
        <div style={{ width: number }} className="inner"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
