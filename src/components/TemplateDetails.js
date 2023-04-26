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
          <div className="down"></div>
        </div>
      </div>
    </>
  );
};

export default TemplateDetails;
