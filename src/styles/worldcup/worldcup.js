import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.color.commentColor};
  height: 84vh;
  overflow: hidden;
`;

export const FinishPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Header와 Footer 간 간격 조정 */
  align-items: center;
  height: 91vh; /* 화면 전체 채우기 */
  padding: 2rem;
  background-color: ${(props) => props.theme.color.commentColor};
  box-sizing: border-box;
  overflow: hidden; /* 스크롤 방지 */
`;


