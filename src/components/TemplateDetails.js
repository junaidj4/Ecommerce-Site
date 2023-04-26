import React from "react";
import pic from "../images/Rectangle 29.png";
import pic1 from "../images/Rectangle 34.png";
import pic2 from "../images/Rectangle 35.png";
import pic3 from "../images/Rectangle 36.png";
import { CiCircleCheck } from "react-icons/ci";
import { BiCheck } from "react-icons/bi";

import "./TemplateDetails.css";
import { Button2 } from "./Button2";
import { Button } from "./Button";
import { Button3 } from "./Button3";
const TemplateDetails = () => {
  return (
    <>
      <div className="PicsandDetails">
        <div className="left-pics">
          <img src={pic} />
          <p>Screenshots</p>
          <img src={pic1} />
          <img src={pic2} />
          <img src={pic3} />
        </div>
        <div className="right-details">
          <div className="up">
            <CiCircleCheck className="check-icon" />
            <p>
              <BiCheck id="small-check" />
              Continued Support from our team
            </p>
            <p>
              <BiCheck id="small-check" />
              Quality Checked by our experts
            </p>
            <p>
              <BiCheck id="small-check" />
              Quality Checked by our experts
            </p>
            <Button3 id="addtocart">Add to Cart - $40</Button3>
            <Button2 id="preview">Live Preview</Button2>
          </div>
          <div className="down">
            <h3 id="main-head">Features:</h3>
            <div className="features">
              <ul>
                <li>Responsive</li>
                <li>HTML 5</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
                <li>Multi-purpose</li>
                <li>Premium Fonts</li>
              </ul>
              <ul>
                <li>Detailed Documentation</li>
                <li>24/7 Support</li>
                <li>Clean Code</li>
                <li>JQuery</li>
              </ul>
            </div>
            <h3>Bootstrap Version:</h3>
            <div className="version-info">
              <ul>
                <li>Version 4.4x</li>
              </ul>
            </div>
            <h3>Web Forms</h3>
            <div className="forms">
              <ul>
                <li>Contact Form</li>
                <li>Search Form</li>
                <li>Registration Form</li>
              </ul>
            </div>
            <h3>Images Included</h3>
            <div className="image-info">
              <ul>
                <li>Yes</li>
              </ul>
            </div>
            <h3>General Software Requirements</h3>
            <div className="requirements">
              <ul>
                <li>Code Editing Tool</li>
                <li>ZIP Unarchiver</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateDetails;
