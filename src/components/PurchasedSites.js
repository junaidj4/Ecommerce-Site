import React from "react";
import "./PurchasedSites.css";
import TemplateSite from "./TemplateSite";

const PurchasedSites = () => {
  return (
    <>
      <div className="sites">
        <div className="purchased">
          <div className="purchased-heading">
            <h3>Purchased Templates</h3>
          </div>
          <div className="bought-sites">
            <TemplateSite />
            <TemplateSite />
            <TemplateSite />
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchasedSites;
