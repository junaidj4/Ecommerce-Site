import React from "react";
// import "./ProfileSites.css";
import Menubar from "./components/Menubar";
import PurchasedSites from "./components/PurchasedSites";
const ProfileSites = () => {
  return (
    <>
      <div>
        <Menubar />
        <PurchasedSites />
      </div>
    </>
  );
};

export default ProfileSites;
