import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import CustomButton from "./CustomButton";
import { useState } from "react";

const Header = () => {
  const [showLink, setShowLink] = useState(false);
  const head = useRef(null);
  const dropLinks = () => {
    setShowLink(!showLink);
  };

  useEffect(() => {
    if (showLink) {
      head.current.classList?.add("links-mobi");
      setTimeout(() => {
        head.current.style.height = "250px";
      }, 200);
    } else {
      head.current.style.height = "0px";
      setTimeout(() => {
        head.current.classList?.remove("links-mobi");
      }, 200);
    }
  }, [showLink]);
  return (
    <nav className="header">
      <div className="id">
        <p id="header-text">MVA-dgn</p>
      </div>
      <div ref={head} className={`links `}>
        <a className="link" href="about-us">
          About us
        </a>
        <a className="link" href="services">
          Services
        </a>
        <a className="link" href="contacts">
          Contacts
        </a>
        <FaFacebookF className="logos" />
        <FaTwitter className="logos" />
        <FaInstagram className="logos" />
        <div className="link">
          <CustomButton
            bg={true}
            text={"Get Started"}
            icon={() => <FaCircleChevronRight size={27} />}
          />
        </div>
      </div>
      <div className="bar-cont">
        <FaBars className="fa-bars" onClick={dropLinks} />
      </div>
    </nav>
  );
};

export default Header;
