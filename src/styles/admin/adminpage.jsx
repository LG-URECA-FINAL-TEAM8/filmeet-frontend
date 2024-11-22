import styled from 'styled-components';
import { lightTheme } from '../themes';

export const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
  width: 100%;
  height: auto;
  max-width: 120rem;
  background-color: ${lightTheme.backgroundGray};
  position : relative;
`;

export const PageContent = styled.div`
  flex: 1;
  padding: 1rem;
  box-sizing: border-box;
  width: 48%;
  justify-content: center;
  align-items: flex-start;
  overflow-y: hidden;
`;