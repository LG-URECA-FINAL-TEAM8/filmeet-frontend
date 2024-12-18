import TopHeader from '../../components/common/back/TopHeader';
import FollowingList from '../../components/follow/FollowingList';
import { FollowPageWrapper } from '../../styles/follow/follow';
import { useParams } from 'react-router-dom';

const FollowingPage = () => {
  const { userId } = useParams();

  return (
    <FollowPageWrapper>
      <TopHeader title="팔로잉 중" />
      <FollowingList userId={userId} />
    </FollowPageWrapper>
  );
};

export default FollowingPage;
