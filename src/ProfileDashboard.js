import React from "react";
import "./ProfileDashboard.css";
import Menubar from "./components/Menubar";
import ProfileCard from "./components/ProfileCard";
import Annoucements from "./components/Annoucements";

const ProfileDashboard = () => {
  return (
    <>
      <div>
        <Menubar />
        <div className="overview">
          <div className="section">
            <h3 id="overview-text">Overview</h3>
            <div className="cards">
              <ProfileCard title={"Puchased Templates"} number={"12"} />
              <ProfileCard title={"Favorite Templates"} number={"25"} />
              <ProfileCard title={"Support Queries"} number={"3"} />
              <ProfileCard title={"Messages"} number={"0"} />
            </div>
          </div>
        </div>
        <div className="announcements">
          <h3 id="announcements-text">Announcements</h3>
          <div className="gray-area">
            <Annoucements />
            <Annoucements />
            <Annoucements />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDashboard;
