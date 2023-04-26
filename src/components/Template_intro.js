import React from "react";
import "./Template_intro.css";
import { AiOutlineHeart } from "react-icons/ai";
const Template_intro = () => {
  return (
    <>
      <div>
        <div className="temp-top">
          <h2 id="intro-heading">Name of the template</h2>
          <br />
          <div className="secondary-details">
            <p id="intro-details">By Developer</p>
            <p id="intro-details">500+ sales</p>
            <p id="intro-details">
              <AiOutlineHeart className="heart-icon" />
              25
            </p>
          </div>
          <h2 id="intro-price">$40</h2>
        </div>
      </div>
    </>
  );
};

export default Template_intro;
