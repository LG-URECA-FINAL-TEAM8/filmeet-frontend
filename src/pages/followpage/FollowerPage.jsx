import TopHeader from '../../components/common/back/TopHeader';
import FollowersList from '../../components/follow/FollowerList';
import { FollowPageWrapper } from '../../styles/follow/follow';
import { useParams } from 'react-router-dom';

const FollowerPage = () => {
  const { userId } = useParams();

  return (
    <FollowPageWrapper>
      <TopHeader title="팔로워" />
      <FollowersList userId={userId} />
    </FollowPageWrapper>
  );
};

export default FollowerPage;
