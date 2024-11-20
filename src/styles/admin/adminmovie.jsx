import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #ffffff;
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
  background-color: #ffffff;
  position: relative;
`;


export const TableWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;
export const MovieTable = styled.table`
  width: 60%;
  border-collapse: collapse;
  border: 1px solid #ccc;
`;
export const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
  background-color: #f5f5f5;
  font-weight: bold;
`;
export const TableRow = styled.tr`
  border: 1px solid #ccc;
`;
export const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
`;
export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  margin-right: 0.5rem;

  &:hover {
    background-color: #0056b3;
  }
`;
export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;

  &:hover {
    background-color: #a71d2a;
  }
`;