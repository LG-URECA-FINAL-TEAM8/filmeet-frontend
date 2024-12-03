import TopHeader from '../../components/Common/back/TopHeader';
import FollowersList from '../../components/Follow/FollowerList';
import { FollowPageWrapper } from '../../styles/follow/follow';


const FollowerPage = () => {
  
  return (
    <FollowPageWrapper>
    <TopHeader title="팔로워"/>
      <FollowersList />
    </FollowPageWrapper>
  );
};

export default FollowerPage;
