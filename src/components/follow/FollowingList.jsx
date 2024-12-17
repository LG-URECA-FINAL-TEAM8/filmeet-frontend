import * as S from '../../styles/follow/follow';
import { useFollowings } from '../../apis/myPage/follow/queries';
import { useDeleteFollow } from '../../apis/follow/query';

const FollowingList = ({ userId }) => {
  const { data, isLoading, error } = useFollowings(userId);
  const { mutate: deleteFollow } = useDeleteFollow();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    console.error('Error fetching followings:', error);
    return <div>오류가 발생했습니다: {error.message}</div>;
  }

  const followings = data?.data?.content || [];

  const handleFollowClick = (followingId) => {
    deleteFollow({ userId: followingId });
  };

  return (
    <S.ListWrapper>
      {followings.map((following) => (
        <S.ListItem key={following.id}>
          <S.AvatarWrapper>
            <S.Avatar
              src={following.profileImage || 'https://via.placeholder.com/70'}
              alt={`${following.nickname}의 아바타`}
            />
          </S.AvatarWrapper>
          <S.InfoWrapper>
            <S.Name>{following.nickname}</S.Name>
            <S.FollowButton onClick={() => handleFollowClick(following.id)}>취소</S.FollowButton>
          </S.InfoWrapper>
        </S.ListItem>
      ))}
    </S.ListWrapper>
  );
};

export default FollowingList;
