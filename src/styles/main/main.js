import styled from 'styled-components';
export const MainBody = styled.body`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.mainColor};
  padding: 1rem 20rem;
  color: ${(props) => props.theme.color.fontBlack};
`;

export const PostContainer = styled.div`
  width: calc(5 * (20% - 1rem) + 4rem);
  height: 24rem;
  display: flex;
  gap: 1rem;
  overflow: hidden;
  & > div {
    flex: 0 0 calc(20% - 1rem);
    max-width: calc(20% - 1rem);
  }
`;
