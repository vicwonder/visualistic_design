import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import CustomButton from "./CustomButton";

const Header = () => {
  const [showLink, setShowLink] = useState(false);
  const dropLinks = () => {
    setShowLink(!showLink);
  };

  return (
    <nav className="header">
      <div>
        <p id="header-text">MVA-dgn</p>
      </div>
      <div className={`links${showLink ? " links-mobi" : ""}`}>
        <a className="link" href="about-us">
          About us
        </a>
        {/* something */}
        <a className="link" href="services">
          Services
        </a>
        <a className="link" href="contacts">
          Contacts
        </a>
        <div className="logo-con">
          <FaFacebookF className="logos" />
          <FaTwitter className="logos" />
          <FaInstagram className="logos" />
        </div>
        <div>
          <CustomButton
            bg={true}
            text={"Get Started"}
            icon={() => <FaCircleChevronRight size={27} />}
          />
        </div>
      </div>
      <FaBars className="fa-bars" onClick={dropLinks} />
    </nav>
  );
};

export default Header;
