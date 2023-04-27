import React from "react";
import "./MainHighlights.css";
import pic from "../images/mdi_art.png";
import pic1 from "../images/Vector.png";
import pic2 from "../images/clarity_devices-solid.png";
const MainHighlights = () => {
  return (
    <>
      <div className="cover">
        <div className="title">
          <h2>What do you get with this template</h2>
        </div>
        <div className="highlight-grid">
          <div className="item1">
            <h2>120+</h2>
            <p>HTML and CSS files</p>
          </div>
          <div className="item2">
            <h2>100+</h2>
            <p>Reusable Components</p>
          </div>
          <div className="item3">
            <img src={pic} />
            <p>Various different styling options</p>
          </div>
          <div className="item2">
            <img src={pic1} />
            <p>Latest Updates</p>
          </div>
          <div className="item3">
            <img src={pic2} />
            <p>Fully Responsive and Customizable</p>
          </div>
          <div className="item1">
            <h2>50+</h2>
            <p>Premium Font Options</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHighlights;
