import React from "react";
import pic from "../images/Ad-Image.png";
import { Button2 } from "./Button2";
import { Button3 } from "./Button3";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import "./ProductAd.css";
import { NavLink } from "react-router-dom";

const ProductAd = () => {
  return (
    <div className="ad">
      <NavLink to="/productpage" className="navbar-link product--link">
        <img src={pic} alt="AD" />
        <div className="ad-content">
          <div className="left">
            <h1>Name of Template</h1>
            <p>
              <AiOutlineHeart className="heart-icon" />
              20
            </p>
            <Button2>Live Preview</Button2>
          </div>
          <div className="right">
            <p>30$</p>
            <Button3 className="btn2">
              <FiShoppingCart className="cart-trolley" />
            </Button3>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductAd;
