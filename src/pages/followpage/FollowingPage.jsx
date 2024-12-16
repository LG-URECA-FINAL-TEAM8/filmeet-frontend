import TopHeader from '../../components/common/back/TopHeader';
import { useUserInfo } from '../../apis/users/queries';
import FollowingList from '../../components/follow/FollowingList';
import { FollowPageWrapper } from '../../styles/follow/follow';

const FollowingPage = () => {
  const { data: userInfo, isLoading, error } = useUserInfo();

  if (isLoading) return <div>로딩 중...</div>;
  if (error || !userInfo) return <div>유효한 유저 정보를 불러올 수 없습니다.</div>;

  const userId = userInfo.data?.id;

  return (
    <FollowPageWrapper>
      <TopHeader title="팔로잉 중" />
      <FollowingList userId={userId} />
    </FollowPageWrapper>
  );
};

export default FollowingPage;
