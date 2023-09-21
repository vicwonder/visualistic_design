import React from "react";
import Contacts from "./Contacts";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";

const ContactsContainer = () => {
  return (
    <div className="contacts">
      <p className="p-tag" id="bigT">
        Contact Us
      </p>
      <p className="p-tag" id="smallT">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="contacts-container">
        <Contacts
          icon={<FaPhone className="icn" />}
          bigText={"Phone"}
          smallText={"+234-81-123-456-78"}
        />
        <Contacts
          icon={<FaRegEnvelope className="icn" />}
          bigText={"Email"}
          smallText={"ContactUs@site.com"}
        />
        <Contacts
          icon={<FaGlobeAmericas className="icn" />}
          bigText={"Location"}
          smallText={"410 Rose-Water Street, LA"}
        />
        <Contacts
          icon={<FaListUl className="icn" />}
          bigText={"Work-Hours"}
          smallText={"Work at Your Discretion"}
        />
      </div>
    </div>
  );
};

export default ContactsContainer;
