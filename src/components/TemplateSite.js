import React from "react";
import "./TemplateSite.css";
import pic from "../images/Ellipse 5.png";
const TemplateSite = () => {
  return (
    <div className="template">
      <div className="temp-details">
        <img src={pic} />
        <p>Name of Template</p>
      </div>
    </div>
  );
};

export default TemplateSite;
