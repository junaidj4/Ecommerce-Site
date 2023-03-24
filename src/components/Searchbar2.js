import React from "react";
import "./Searchbar2.css";
import { FaSearch } from "react-icons/fa";
const Searchbar2 = () => {
  return (
    <>
      <div className="input-space">
        <div className="text">
          <input placeholder="Search by typing keyword" />
        </div>
        <div className="search-logo">
          <FaSearch />
        </div>
      </div>
    </>
  );
};

export default Searchbar2;
