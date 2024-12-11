import { useEffect } from 'react';
import styled from 'styled-components';
import { useFollowers } from '../../apis/myPage/follow/queries';
import { useFollowStore } from '../../store/follow/followStore';

const FollowersList = ({ userId }) => {
  console.log(`Fetching followers for userId: ${userId}`);

  const { followStates, initializeFollowStates, toggleFollow } = useFollowStore();
  const { data, isLoading, error } = useFollowers(userId);

  useEffect(() => {
    console.log('Followers API Response:', data);
    if (data?.content) {
      initializeFollowStates(data.content.map(() => false)); // 초기 팔로우 상태 설정
    }
  }, [data, initializeFollowStates]);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류가 발생했습니다: {error.message}</div>;

  const followers = data?.content || []; // API 응답 데이터에서 팔로워 목록 추출

  return (
    <S.ListWrapper>
      {followers.map((follower, index) => (
        <S.ListItem key={follower.id}>
          <S.AvatarWrapper>
            <S.Avatar src={follower.profileImage || 'https://via.placeholder.com/70'} alt={`${follower.nickname}의 아바타`} />
          </S.AvatarWrapper>
          <S.InfoWrapper>
            <S.Name>{follower.nickname}</S.Name>
            <S.FollowButton
              isFollowing={followStates[index]}
              onClick={() => toggleFollow(index)} // 팔로우 상태 토글
            >
              {followStates[index] ? '팔로잉' : '팔로우'}
            </S.FollowButton>
          </S.InfoWrapper>
        </S.ListItem>
      ))}
    </S.ListWrapper>
  );
};

export default FollowersList;

const S = {
  ListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
    padding: 1rem 0 0 0;
    margin: 0;
  `,
  ListItem: styled.li`
    width: 100%;
    max-width: 38rem;
    height: 6.5rem;
    display: flex;
    align-items: center;
    padding: 0 0.9rem;
  `,
  AvatarWrapper: styled.div`
    width: 4.375rem;
    height: 4.375rem;
    margin-right: 0.7rem;
  `,
  Avatar: styled.img`
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;
  `,
  InfoWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6.5rem;
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,
  Name: styled.div`
    width: 28.12rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    margin: 0 0 0.12rem;
    padding: 0 0.62rem 0 0;
  `,
  FollowButton: styled.button`
    width: 4.06rem;
    height: 1.75rem;
    padding: 0 0.68rem;
    border: none;
    border-radius: 1.25rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    color: ${(props) =>
      props.isFollowing ? props.theme.color.fontGray : props.theme.color.fontPink};
    background-color: ${(props) =>
      props.isFollowing ? props.theme.color.mainColor : '#ffe0e9'};

    &:hover {
      background-color: ${(props) =>
        props.isFollowing ? '#ffe0e9' : props.theme.color.fontPink};
      color: ${(props) => (props.isFollowing ? props.theme.color.fontPink : '#fff')};
    }
  `,
};
