import TopHeader from '../../components/Common/back/TopHeader';
import FollowingList from '../../components/Follow/FollowingList';
import { FollowPageWrapper } from '../../styles/follow/follow';

const FollowingPage = () => {
  return (
    <FollowPageWrapper>
      <TopHeader title="팔로잉 중" />
      <FollowingList />
    </FollowPageWrapper>
  );
};

export default FollowingPage;
