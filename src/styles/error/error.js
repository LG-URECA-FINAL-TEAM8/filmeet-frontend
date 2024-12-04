import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.commentColor};
  min-height: 100vh;
  padding: 2rem;
  padding-top: 6rem;
`;

export const ContentArea = styled.div`
  width: 100%;
  max-width: 60rem;
  height: 100%;
  background-color: ${(props) => props.theme.color.commentColor};
  display: flex;
  justify-content: center;
`;