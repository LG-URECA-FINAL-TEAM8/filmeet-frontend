import { MyPageContainer, ProfileContainer } from '../../styles/profile/profile';
import ProfileHeader from '../../components/profile/ProfileHeader';
import { useParams } from 'react-router-dom';
import { useUserInfoId } from '../../apis/users/queries';

const MyPage = () => {
  const { userId } = useParams();
  const { data: result } = useUserInfoId(userId);
  const userInfo = result?.data;

  return (
    <MyPageContainer>
      <ProfileContainer>
        <ProfileHeader userInfo={userInfo} userId={userId} />
      </ProfileContainer>
    </MyPageContainer>
  );
};

export default MyPage;
