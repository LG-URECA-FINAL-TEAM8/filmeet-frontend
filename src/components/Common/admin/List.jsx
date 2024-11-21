import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

function List({ movies }) {
  const tabletitle = '영화 제목';
  const tableedit = '수정';
  const tabledelete = '삭제';
  const editbutton = '수정';
  const deletebutton = '삭제';
  return (
    <TableWrapper>
      <MovieTable>
        <thead>
          <tr>
            <TableHeaderTitle>{tabletitle}</TableHeaderTitle>
            <TableHeaderEdit>{tableedit}</TableHeaderEdit>
            <TableHeaderDelete>{tabledelete}</TableHeaderDelete>
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
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  width: 41rem; 
  height: 41rem; 
  overflow-y: auto; 
  border: ${lightTheme.defaultBorder}; 
  border-radius: 0.25rem;
`;

const MovieTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: ${lightTheme.defaultBorder};
  padding: 1rem;
  text-align: center;
  background-color: ${lightTheme.mainColor};
  font-weight: ${lightTheme.fontWeightBold};
  position: sticky; 
  top: 0; 
  z-index: 1; 
  color: ${lightTheme.fontBlack};
`;

const TableHeaderTitle = styled(TableHeader)`
  width: 64%;
`;

const TableHeaderEdit = styled(TableHeader)`
  width: 18%;
`;

const TableHeaderDelete = styled(TableHeader)`
  width: 18%;
`;

const TableRow = styled.tr`
  border: ${lightTheme.defaultBorder};
`;

const TableCell = styled.td`
  border: ${lightTheme.defaultBorder};
  padding: 1rem;
  text-align: center;
  color: ${lightTheme.fontBlack};
`;

const EditButton = styled.button`
  background-color: transparent;
  color: ${lightTheme.fontBlack};
  border: none;
  padding: 1rem 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${lightTheme.footerBlack};
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  color: ${lightTheme.fontBlack};
  border: none;
  padding: 1rem 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${lightTheme.footerBlack};
  }
`;