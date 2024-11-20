import React from 'react';
import styled from 'styled-components';

function List({ movies }) {
  const headertitle = '영화 제목';
  const headeredit = '수정';
  const headerdelete = '삭제';
  const editbutton = '수정';
  const deletebutton = '삭제';
  return (
    <TableWrapper>
      <MovieTable>
        <thead>
          <tr>
            <TableHeaderTitle>{headertitle}</TableHeaderTitle>
            <TableHeaderEdit>{headeredit}</TableHeaderEdit>
            <TableHeaderDelete>{headerdelete}</TableHeaderDelete>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <TableRow key={index}>
              <TableCell>{movie.title}</TableCell>
              <TableCell>
                <EditButton>{editbutton}</EditButton>
              </TableCell>
              <TableCell>
                <DeleteButton>{deletebutton}</DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </MovieTable>
    </TableWrapper>
  );
}

export default List;

const TableWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  width: 40.75rem; 
  height: 40.625rem; 
  overflow-y: auto; 
  border: 0.0625rem solid #ccc; 
  border-radius: 0.25rem;
`;

const MovieTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 0.0625rem solid #ccc;
  padding: 0.75rem;
  text-align: center;
  background-color: #f9f9f9;
  font-weight: bold;
  position: sticky; 
  top: 0; 
  z-index: 1; 

`;

const TableHeaderTitle = styled(TableHeader)`
  width: 70%;
`;

const TableHeaderEdit = styled(TableHeader)`
  width: 15%;
`;

const TableHeaderDelete = styled(TableHeader)`
  width: 15%;
`;

const TableRow = styled.tr`
  border: 0.0625rem solid #ccc;
`;

const TableCell = styled.td`
  border: 0.0625rem solid #ccc;
  padding: 0.75rem;
  text-align: center;
`;

const EditButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;