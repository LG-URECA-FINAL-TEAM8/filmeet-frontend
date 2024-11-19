import React from "react";
import { ProfileImage, ProfileName, FollowStats } from "../../styles/profile/profile";

const ProfileHeader = () => {
  return (
    <>
      <ProfileImage></ProfileImage>
      <ProfileName>이름</ProfileName>
      <FollowStats>
        <div>
          Follower: <span>0</span>
        </div>
        <div>
          Following: <span>1</span>
        </div>
      </FollowStats>
    </>
  );
};

export default ProfileHeader;
