import { MyPageContainer, ProfileContainer } from '../../styles/profile/profile';
import ProfileHeader from '../../components/profile/ProfileHeader';
import { useUserInfo } from '../../apis/users/queries';
const MyPage = () => {
  const { data: result } = useUserInfo();
  const userInfo = result?.data;

  return (
    <MyPageContainer>
      <ProfileContainer>
        <ProfileHeader userInfo={userInfo} />
      </ProfileContainer>
    </MyPageContainer>
  );
};

export default MyPage;
