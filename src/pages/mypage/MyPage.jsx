import { MyPageContainer, ProfileContainer } from '../../styles/profile/profile';
import ProfileHeader from '../../components/profile/ProfileHeader';

const MyPage = () => {
  return (
    <MyPageContainer>
      <ProfileContainer>
        <ProfileHeader />
      </ProfileContainer>
    </MyPageContainer>
  );
};

export default MyPage;
