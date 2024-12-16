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
    flex-direction: column; 
    align-items: center; 
    height: 450px;
    gap: 2rem; 
    margin: 40px 700px;
    padding: 50px 10px 50px 10px;
    border-radius: 30px;
    background-color: #D9D9D9;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  `;

export const Title = styled.div`
    font-size: 5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    margin-bottom: 1rem;
  `;

export const Subtitle = styled.div`
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.collectionColor};
    margin-bottom: 3rem;
  `;

