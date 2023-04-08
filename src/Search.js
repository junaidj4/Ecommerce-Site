import React from "react";
import Searchbar2 from "./components/Searchbar2";
import ProductAd from "./components/ProductAd";
import "./Search.css";
const Search = () => {
  return (
    <>
      <div>
        <Searchbar2 />
        <div className="ad-list">
          <div className="left-side">
            <p>Filter your search results</p>
          </div>
          <div className="right-side">
            <div className="ad-section">
              <p id="title">Sort By</p>
              <p id="selected">Best-Sellers</p>
              <p id="normal">Best-Match</p>
              <p id="normal">Newest</p>
              <p id="normal">Best rated</p>
            </div>
            <div className="ad-grid">
              <ProductAd />
              <ProductAd />
              <ProductAd />
              <ProductAd />
              <ProductAd />
              <ProductAd />
              <ProductAd />
              <ProductAd />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
