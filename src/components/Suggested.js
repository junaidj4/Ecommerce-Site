import React from "react";
import "./Suggested.css";
import ProductAd from "./ProductAd";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Suggested = () => {
  return (
    <>
      <div className="suggestion">
        <div className="main-title">
          <h2>People also viewed these</h2>
        </div>
        <div className="ad-line">
          <div className="products-line">
            <ProductAd />
            <ProductAd />
            <ProductAd />
          </div>
          <div className="arrow-icon">
            <BsFillArrowRightCircleFill id="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggested;
