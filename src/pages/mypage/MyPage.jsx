import { MyPageContainer, ProfileContainer } from '../../styles/profile/profile';
import ProfileHeader from '../../components/profile/ProfileHeader';
import { useParams } from 'react-router-dom';
import { useUserInfoId } from '../../apis/users/queries';
import { useEffect } from 'react';

const MyPage = () => {
  const { userId } = useParams();
  const { data: result, refetch } = useUserInfoId(userId);
  const userInfo = result?.data;
  useEffect(() => {
    refetch();
  }, [userId]);
  return (
    <MyPageContainer>
      <ProfileContainer>
        <ProfileHeader userInfo={userInfo} userId={userId} />
      </ProfileContainer>
    </MyPageContainer>
  );
};

export default MyPage;
