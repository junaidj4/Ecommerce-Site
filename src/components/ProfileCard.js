import React from "react";
import "./ProfileCard.css";
const ProfileCard = ({ title, number }) => {
  return (
    <div className="profile-card">
      <h2>{title}</h2>
      <h3>{number}</h3>
    </div>
  );
};

export default ProfileCard;
