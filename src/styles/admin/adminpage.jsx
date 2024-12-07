import styled from 'styled-components';
import { lightTheme } from '../themes';

export const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
  width: 100%;
  height: 100vh;
  max-width: 1920px;
  overflow-x: hidden;
  margin: 0 auto;
  background-color: ${lightTheme.mainColor};
  position: relative;
`;

export const PageContent = styled.div`
  padding: 0 1rem;
  box-sizing: border-box; 
  width: 100%;
  height: calc(100vh - 94px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: hidden;
`;