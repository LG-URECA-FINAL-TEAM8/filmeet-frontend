import styled from "styled-components";
import { lightTheme } from "../themes";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 75rem; 
  margin: 0 auto;
  padding: 1.25rem; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${lightTheme.fontWhite}
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem; 
`;

export const CollectionItem = styled.div`
  font-size: 1rem;
  padding: 0.6rem; 
  border: 0.1rem solid ${lightTheme.fontGray}; 
  border-radius: 0.3rem; 
`;
