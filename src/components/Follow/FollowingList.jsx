import styled from 'styled-components';
import { useEffect } from 'react';
import { Followings } from '../../data/followings';
import { useFollowStore } from '../../store/follow/followStore';


const FollowingList = () => {
  const { followStates, initializeFollowStates, toggleFollow } = useFollowStore();

  useEffect(() => {
    // 초기 상태: 모든 버튼은 '팔로잉'
    initializeFollowStates(Followings.map(() => true));
  }, [initializeFollowStates, Followings]);

  return (
    <S.ListWrapper>
      {Followings.map((following, index) => (
        <S.ListItem key={following.id}>
          <S.AvatarWrapper>
            <S.Avatar src={following.avatar} alt={`${following.name}의 아바타`} />
          </S.AvatarWrapper>
          <S.InfoWrapper>
            <S.Name>{following.name}</S.Name>
            <S.FollowButton
              isFollowing={followStates[index]}
              onClick={() => toggleFollow(index)}
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
    padding: 0 0.9rem;
  `,

  AvatarWrapper: styled.div`
    width: 70px;
    height: 70px;
    margin-right: 0.7rem;
  `,

  Avatar: styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
  `,

  InfoWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 104px;
    border-bottom: 1px solid #ddd;
  `,

  Name: styled.div`
    width: 450px;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    margin: 0 0 2px;
    padding: 0 10px 0 0;
  `,

  FollowButton: styled.button`
    width: 65px;
    height: 28px;
    padding: 0 11px;
    border: none;
    border-radius: 20px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    /* 초기 상태: 팔로잉 */
    color: ${(props) =>
      props.isFollowing ? props.theme.color.fontGray : props.theme.color.fontPink};
    background-color: ${(props) =>
      props.isFollowing ? props.theme.color.mainColor : '#ffe0e9'};

    /* hover 상태 */
    &:hover {
      background-color: ${(props) =>
        props.isFollowing ? '#ffe0e9' : props.theme.color.fontPink};
      color: ${(props) => (props.isFollowing ? props.theme.color.fontPink : '#fff')};
    }
  `,
};
