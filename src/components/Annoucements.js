import React from "react";
import "./Annoucements.css";
import pic from "../images/Group62.png";
const Annoucements = () => {
  return (
    <>
      <div>
        <div className="line">
          <img src={pic} />
          <p>HURRY UP! Spring Sale will end tommorow.</p>
          <p id="time">5d</p>
        </div>
      </div>
    </>
  );
};

export default Annoucements;
