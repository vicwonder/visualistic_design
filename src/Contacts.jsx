import React from "react";

const Contacts = ({ icon, bigText, smallText }) => {
  return (
    <div className="contact-content">
      <div>{icon}</div>
      <div className="texts">
        <p id="bgtexts">{bigText}</p>
        <p id="smTexts">{smallText}</p>
      </div>
    </div>
  );
};

export default Contacts;
