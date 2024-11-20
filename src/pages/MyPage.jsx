import React from 'react';
import { MyPageContainer, ProfileContainer } from '../styles/profile/profile';
import ProfileHeader from '../components/Profile/profileheader';
import Stats from '../components/Profile/Stats';

const MyPage = () => {
  return (
    <MyPageContainer>
      <ProfileContainer>
        <ProfileHeader/>
      </ProfileContainer>
    </MyPageContainer>
  );
};

export default MyPage;
