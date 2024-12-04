import { useNavigate } from 'react-router-dom';
import {
  ProfileImage,
  ProfileName,
  FollowStats,
  FollowButton,
  SettingsWrapper,
  SettingsIcon,
} from '../../styles/profile/profile';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Stats from './Stats';

const ProfileHeader = () => {
  const navigate = useNavigate();

  const Profiles = {
    name: '이름',
    stats: [
      { label: 'Follower', count: 0, path: '/followers' },
      { label: 'Following', count: 1, path: '/followings' },
    ],
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <SettingsWrapper>
        <SettingsIcon icon={faGear} />
      </SettingsWrapper>
      <ProfileImage></ProfileImage>
      <ProfileName>{Profiles.name}</ProfileName>
      <FollowStats>
        {Profiles.stats.map((stat, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(stat.path)}
          >
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
