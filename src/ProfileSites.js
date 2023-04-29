import React from "react";
// import "./ProfileSites.css";
import Menubar from "./components/Menubar";
import PurchasedSites from "./components/PurchasedSites";
import FavoriteTemplates from "./components/FavoriteTemplates";
const ProfileSites = () => {
  return (
    <>
      <div>
        <Menubar />
        <PurchasedSites />
        <FavoriteTemplates />
      </div>
    </>
  );
};

export default ProfileSites;
