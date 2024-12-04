import styled from "styled-components";

export const AlarmhistoryPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.color.mainColor};
`;
