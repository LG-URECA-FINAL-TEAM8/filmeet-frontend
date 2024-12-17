import * as S from '../../styles/follow/follow';
import { useFollowers } from '../../apis/myPage/follow/queries';

const FollowersList = ({ userId }) => {
  const { data, isLoading, error } = useFollowers(userId);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류가 발생했습니다: {error.message}</div>;

  const followers = data?.data?.content || [];

  return (
    <S.ListWrapper>
      {followers.map((follower) => (
        <S.ListItem key={follower.id}>
          <S.AvatarWrapper>
            <S.Avatar
              src={follower.profileImage || 'https://via.placeholder.com/70'}
              alt={`${follower.nickname}의 아바타`}
            />
          </S.AvatarWrapper>
          <S.InfoWrapper>
            <S.Name>{follower.nickname}</S.Name>
            <S.FollowButton>팔로우</S.FollowButton>
          </S.InfoWrapper>
        </S.ListItem>
      ))}
    </S.ListWrapper>
  );
};

export default FollowersList;
