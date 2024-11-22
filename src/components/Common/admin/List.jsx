import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

function List({ data = [], columns = [], actions = [] }) {
  return (
    <TableWrapper>
      <MovieTable>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <TableHeader key={index}>{column}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.title}</TableCell>
                {actions.map((action, actionIndex) => (
                  <TableCell key={actionIndex}>
                    <ActionButton onClick={() => action.onClick(item)}>
                      {action.label}
                    </ActionButton>
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} style={{ textAlign: 'center' }}>
                데이터가 없습니다.
              </TableCell>
            </TableRow>
          )}
        </tbody>
      </MovieTable>
    </TableWrapper>
  );
}

export default List;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; 
  height: 38rem; 
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

const TableRow = styled.tr`
  border: ${lightTheme.defaultBorder};
`;

const TableCell = styled.td`
  border: ${lightTheme.defaultBorder};
  padding: 1rem;
  text-align: center;
  color: ${lightTheme.fontBlack};
`;

const ActionButton = styled.button`
  background-color: transparent;
  color: ${lightTheme.fontBlack};
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${lightTheme.footerBlack};
  }
`;