import styled from 'styled-components';

export const FollowPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.color.mainColor};
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style: none;
  padding: 1rem 0 0 0;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  max-width: 38rem;
  height: 6.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.9rem;
`;

export const AvatarWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.7rem;
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border-bottom: ${(props) => props.theme.font.borderDefault};
`;

export const Name = styled.div`
  width: 28rem;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 1rem;
  margin: 0 0 0.1rem;
  padding: 0 0.6rem 0 0;
`;

export const FollowButton = styled.button`
  width: 4rem;
  height: 1.8rem;
  padding: 0 0.7rem;
  border: none;
  border-radius: 1.25rem;
  font-size: 0.7rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  color: ${(props) =>
    props.isFollowing ? props.theme.color.fontGray : props.theme.color.fontPink};
  background-color: ${(props) => (props.isFollowing ? props.theme.color.mainColor : '#ffe0e9')};

  &:hover {
    background-color: ${(props) => (props.isFollowing ? '#ffe0e9' : props.theme.color.fontPink)};
    color: ${(props) => (props.isFollowing ? props.theme.color.fontPink : '#fff')};
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: #cccccc;
    color: inherit;
  }
`;
