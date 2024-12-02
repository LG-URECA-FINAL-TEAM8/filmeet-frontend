import styled from "styled-components";

export const Wrapper = styled.div`
  width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3.5rem 0 3.5rem 0;
  background-color: ${(props) => props.theme.color.background};
`;
