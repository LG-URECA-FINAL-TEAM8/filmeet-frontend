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
  const Profiles = {
    name: '이름',
    stats: [
      { label: 'Follower', count: 0 },
      { label: 'Following', count: 1 },
    ],
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
          <div key={index}>
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
