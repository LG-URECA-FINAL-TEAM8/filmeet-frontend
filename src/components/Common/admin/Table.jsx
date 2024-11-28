import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

function Table({ data, columns, actions }) {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <TableHeader>
            {columns.map((col, index) => (
              <HeaderCell key={index}>{col}</HeaderCell>
            ))}
          </TableHeader>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.keys(item).map((key, colIndex) => (
                  <TableCell key={colIndex}>{item[key]}</TableCell>
                ))}
                <TableCell>
                  {actions &&
                    actions.map((action, actionIndex) => (
                      <ActionButton
                        key={actionIndex}
                        onClick={() => action.onClick(item)}
                        color={action.color}
                      >
                        {action.label}
                      </ActionButton>
                    ))}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                데이터가 없습니다.
              </TableCell>
            </TableRow>
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}

export default Table;

const TableWrapper = styled.div`
  width: 90%;
  max-width: 1303px;
  height: 600px;
  overflow-x: auto;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 0 auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const TableHeader = styled.tr`
  background-color: ${lightTheme.mainColor};
  border-bottom: 2px solid #eaeaea;
`;

const HeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  color: #555;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #fafafa;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  text-align: ${({ align }) => align || 'left'};
  font-size: 0.9rem;
  border-bottom: 1px solid #ddd;

  &:last-child {
    text-align: left;
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${({ color }) => color || '#007bff'};
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;