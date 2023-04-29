import React from "react";
import ProductAd from "./ProductAd";
import "./FavoriteTemplates.css";
const FavoriteTemplates = () => {
  return (
    <>
      <div className="favorites">
        <div className="favorite-section">
          <div className="favorite-heading">
            <h3>Favorite Templates</h3>
          </div>
          <div className="favorite-temp">
            <ProductAd />
            <ProductAd />
            <ProductAd />
            <ProductAd />
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteTemplates;
