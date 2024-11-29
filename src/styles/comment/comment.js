import styled from "styled-components";

export const CommentPageContainer = styled.div`
    width: 100%;
    max-width: 120rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) => props.theme.color.mainColor};
`;

export const CommentDetailContainer = styled.div`
  width: 100%;
  max-width: 82.5rem;
  margin: 1.125rem auto 3.4rem auto;
  background-color: ${(props) => props.theme.color.background};
  border-radius: 0.5rem;  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 40rem;
    margin: 2.5rem 0 0 0;
`