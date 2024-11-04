import React from "react";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <img src="{ info.avatarUrl }" alt="" />
        <span>{info.name}</span>
      </div>
    </>
  );
};

export default Profile;
