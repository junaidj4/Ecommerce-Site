import React from "react";
import "./Menubar.css";
import pic from "../images/material-symbols_dashboard-rounded.png";
import pic1 from "../images/gg_browser.png";
import pic2 from "../images/material-symbols_person.png";
import pic3 from "../images/settings.png";
import pic4 from "../images/ps_headset.png";
const Menubar = () => {
  return (
    <>
      <div className="menu">
        <div className="items">
          <div className="menu-item" id="active">
            <img src={pic} />
            <h3>Dashboard</h3>
          </div>
          <div className="menu-item">
            <img src={pic1} />
            <h3>My Sites</h3>
          </div>

          <div className="menu-item">
            <img src={pic2} />
            <h3>Profile</h3>
          </div>
          <div className="menu-item">
            <img src={pic3} />
            <h3>Settings</h3>
          </div>
          <div className="menu-item">
            <img src={pic4} />
            <h3>Support</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
