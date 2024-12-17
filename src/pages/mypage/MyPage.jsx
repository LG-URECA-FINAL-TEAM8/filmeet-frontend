import { MyPageContainer, ProfileContainer } from '../../styles/profile/profile';
import ProfileHeader from '../../components/profile/ProfileHeader';
import { useParams } from 'react-router-dom';
import { useUserInfoId } from '../../apis/users/queries';
const MyPage = () => {
  const { userId } = useParams();
  const { data: result } = useUserInfoId(userId);
  const userInfo = result?.data;
  console.log(userInfo);

  return (
    <MyPageContainer>
      <ProfileContainer>
        <ProfileHeader userInfo={userInfo} />
      </ProfileContainer>
    </MyPageContainer>
  );
};

export default MyPage;
