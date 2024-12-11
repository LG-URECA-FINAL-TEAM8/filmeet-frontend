import styled from 'styled-components';
import { useEffect } from 'react';

import { useFollowStore } from '../../store/follow/followStore';
import { useFollowings } from '../../apis/myPage/follow/queries';

const FollowingList = ({ userId }) => {
  // 상태 관리
  const { followStates, initializeFollowStates, toggleFollow } = useFollowStore();
  
  // API 호출
  const { data, isLoading, error } = useFollowings(userId);

  // 디버깅 로그
  console.log('userId in FollowingList:', userId);
  console.log('API Response Data:', data);
  
  useEffect(() => {
    if (data?.content) {
      console.log('Initializing follow states:', data.content.map(() => true));
      initializeFollowStates(data.content.map(() => true)); // 초기 팔로잉 상태 설정
    }
  }, [data, initializeFollowStates]);

  // 로딩 상태 처리
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  // 에러 처리
  if (error) {
    console.error('Error fetching followings:', error);
    return <div>오류가 발생했습니다: {error.message}</div>;
  }

  // 데이터 추출
  const followings = data?.content || [];

  return (
    <S.ListWrapper>
      {followings.map((following, index) => (
        <S.ListItem key={following.id}>
          <S.AvatarWrapper>
            <S.Avatar
              src={following.profileImage || 'https://via.placeholder.com/70'}
              alt={`${following.nickname}의 아바타`}
            />
          </S.AvatarWrapper>
          <S.InfoWrapper>
            <S.Name>{following.nickname}</S.Name>
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

export default FollowingList;

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
    padding: 0 0.56rem;
  `,
  AvatarWrapper: styled.div`
    width: 4.37rem;
    height: 4.37rem;
    margin-right: 0.43rem;
  `,
  Avatar: styled.img`
    width: 4.37rem;
    height: 4.37rem;
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
    font-size: 0.87rem;
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
