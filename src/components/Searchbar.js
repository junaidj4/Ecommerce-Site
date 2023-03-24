import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";
const Searchbar = () => {
  return (
    <>
      <div className="input-wrapper">
        <div>
          <FaSearch id="search-icon" />
        </div>
        <div>
          <input placeholder="Search" />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
