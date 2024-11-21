import styled from 'styled-components';
import { lightTheme } from '../../styles/themes';


export const PageWrapper = styled.div`
  background-color: ${lightTheme.mainColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
export const AdminPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${lightTheme.mainColor};
  position: relative;
`;


export const TableWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
export const MovieTable = styled.table`
  width: 60%;
  border-collapse: collapse;
  border: ${lightTheme.defaultBorder};
`;
export const TableHeader = styled.th`
   border: ${lightTheme.defaultBorder};
  padding: 1rem;
  text-align: center;
  background-color: ${lightTheme.mainColor};
  color: ${lightTheme.fontBlack};
  font-weight: bold;
`;
export const TableRow = styled.tr`
  border: ${lightTheme.defaultBorder};
`;
export const TableCell = styled.td`
  border: ${lightTheme.defaultBorder};
  padding: 1rem;
  text-align: center;
  color: ${lightTheme.fontBlack};
`;
export const EditButton = styled.button`
  background-color: ${lightTheme.fontBlack};
  color: ${lightTheme.fontWhite};
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 1rem;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background-color: ${lightTheme.footerBlack};
  }
`;
export const DeleteButton = styled.button`
  background-color: ${lightTheme.fontPink};
  color: ${lightTheme.fontWhite};
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${lightTheme.footerBlack};
  }
`;