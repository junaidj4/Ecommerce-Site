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
            <h3 id="head">Filter your search results</h3>
            <div className="filter">
              <h3 id="top-heading">Refine</h3>
              <hr
                style={{
                  background: "#01020B",
                  color: "#01020B",
                  borderColor: "#01020B",
                  height: "1px",
                  width: "100%",
                }}
              />
              <h3>Topics</h3>
              <p id="selected-filter">Admin Panel Templates</p>
              <p>Blogs</p>
              <p>Business</p>
              <p>Construction</p>
              <p>eCommerce</p>
              <p>Education</p>
              <p>Entertainment</p>
              <p>Health</p>
              <p>Mobile</p>
              <hr
                style={{
                  background: "#01020B",
                  color: "#01020B",
                  borderColor: "#01020B",
                  height: "1px",
                  width: "100%",
                }}
              />
              <h3>Price</h3>
            </div>
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
