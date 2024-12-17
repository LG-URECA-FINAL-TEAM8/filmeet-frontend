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
  background-color: ${(props) => props.theme.color.commentColor};
  box-sizing: border-box;
  overflow: hidden; /* 스크롤 방지 */
`;

export const WinnerPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.color.fontWhite} 0%,
      ${(props) => props.theme.color.commentColor} 100%
    );
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

export const GameFinishTitle = styled.div`
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    margin: 1rem 0 1rem 0;
  `;

export const Subtitle = styled.div`
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.collectionColor};
    margin-bottom: 3rem;
  `;

export const CongratsText = styled.p`
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontPink};
    margin-bottom: 1rem;
  `;

export const WinnerTitle = styled.h1`
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  `;

export const WinnerCardWrapper = styled.div`
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.color.fontWhite};
    margin-bottom: 2rem;
  `;