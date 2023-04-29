import React from "react";
import "./MyTemplates.css";
import pic from "../images/icon-park-outline_sleep-one.png";
import { Button3 } from "./Button3";
import { NavLink } from "react-router-dom";
const MyTemplates = () => {
  return (
    <>
      <div className="temp-section">
        <h3 id="temp-text">My Templates</h3>
        <div className="temp-area">
          <img src={pic} />
          <p>Looks like you don't have any templates.</p>
          <h3>Let's get shopping!</h3>
          <NavLink to="/search">
            <Button3 className="shop-button">Check Templates</Button3>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MyTemplates;
