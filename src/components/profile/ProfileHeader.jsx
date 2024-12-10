import { useNavigate } from 'react-router-dom';
import { ProfileImage, ProfileName, FollowStats, FollowButton, SettingsWrapper, SettingsIcon } from '../../styles/profile/profile';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Stats from './Stats';
import { useFollowCount } from '../../apis/myPage/queries';

const ProfileHeader = ({ userInfo }) => {
  const navigate = useNavigate();
  const userId = userInfo?.id;

  const { data: result, isLoading } = useFollowCount(userId);
  const followData = result?.data;

  const Profiles = {
    stats: [
      { label: 'Follower', count: followData?.followerCount || 0, path: '/followers' },
      { label: 'Following', count: followData?.followingCount || 0, path: '/followings' },
    ],
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  // 로딩 상태 처리
  if (!userId || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SettingsWrapper>
        <SettingsIcon icon={faGear} />
      </SettingsWrapper>
      <ProfileImage
        src={userInfo?.profileImage || 'https://via.placeholder.com/40'}
        alt="프로필 이미지"></ProfileImage>
      <ProfileName>{userInfo?.nickname}</ProfileName>
      <FollowStats>
        {Profiles.stats.map((stat, index) => (
          <div key={index} onClick={() => handleNavigate(stat.path)}>
            {stat.label}: <span>{stat.count}</span>
          </div>
        ))}
      </FollowStats>
      <FollowButton>Follow</FollowButton>
      <Stats />
    </>
  );
};

export default ProfileHeader;
