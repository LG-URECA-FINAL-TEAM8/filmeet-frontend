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

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column; /* 버튼을 세로로 배치 */
    align-items: center; /* 버튼을 가운데 정렬 */
    gap: 2rem; /* 버튼 사이 간격 설정 */
    margin: 40px 600px;
    padding: 30px 0 100px 0;
    border-radius: 30px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  `;




