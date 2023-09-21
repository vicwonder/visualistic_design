import React from "react";
import Partner from "./Partner";
import { FaGrav } from "react-icons/fa";

const PartnerContainer = () => {
  return (
    <div className="partner-con">
      <Partner
        icon={<FaGrav />}
        bgText={"Partner-Together"}
        smText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla suscipit."
        }
      />
      <Partner
        icon={<FaGrav />}
        bgText={"Partner-Together"}
        smText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla suscipit."
        }
      />
      <Partner
        icon={<FaGrav />}
        bgText={"Partner-Together"}
        smText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla suscipit."
        }
      />
    </div>
  );
};

export default PartnerContainer;
