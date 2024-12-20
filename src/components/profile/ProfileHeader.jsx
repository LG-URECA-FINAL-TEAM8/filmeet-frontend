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
import { useFollowCount } from '../../apis/myPage/queries';
import LogoutModal from '../common/modal/LogoutModal';
import { useState } from 'react';
import { useUserInfo } from '../../apis/users/queries';
import { useAddFollow, useDeleteFollow } from '../../apis/follow/query';
import Loading from '../common/loading/Loading';

const ProfileHeader = ({ userInfo, userId }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { data: result, isLoading } = useFollowCount(userId);
  const { data: loginUser } = useUserInfo();
  const { mutate: addFollow } = useAddFollow();
  const { mutate: deleteFollow } = useDeleteFollow();
  const followData = result?.data;
  const loginUserData = loginUser?.data?.id;

  const Profiles = {
    stats: [
      { label: 'Follower', count: followData?.followerCount || 0, path: `/followers/${userId}` },
      { label: 'Following', count: followData?.followingCount || 0, path: `/followings/${userId}` },
    ],
  };
  const handleAddFollow = () => {
    if (userInfo?.isFollowing) {
      deleteFollow({ userId });
    } else {
      addFollow({ userId });
    }
  };
  const handleNavigate = (path) => {
    navigate(path);
  };
  // 로딩 상태 처리
  if (!userId || isLoading) {
    return <Loading />;
  }

  return (
    <>
      {String(loginUserData) === String(userId) && (
        <SettingsWrapper onClick={() => setShowModal((prev) => !prev)}>
          <SettingsIcon icon={faGear} />
          {showModal && <LogoutModal text="로그아웃" />}
        </SettingsWrapper>
      )}
      <ProfileImage src={userInfo?.profileImage} alt="프로필 이미지"></ProfileImage>
      <ProfileName>{userInfo?.nickname}</ProfileName>
      <FollowStats>
        {Profiles.stats.map((stat, id) => (
          <div key={id} onClick={() => handleNavigate(stat.path)}>
            {stat.label}: <span>{stat.count}</span>
          </div>
        ))}
      </FollowStats>
      <FollowButton
        disabled={String(loginUserData) === String(userId) || loginUserData?.isFollowing === true}
        onClick={() => handleAddFollow()}>
        {userInfo?.isFollowing ? 'Unfollow' : 'Follow'}
      </FollowButton>
      <Stats count={userInfo} />
    </>
  );
};

export default ProfileHeader;
