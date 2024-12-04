import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5rem 0;
  background-color: ${(props) => props.theme.color.background};
  margin: 0 auto;
`;

export const CollectionPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.3rem 0 0 0;
  box-sizing: border-box;

`;

