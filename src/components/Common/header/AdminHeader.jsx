import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

function AdminHeaderComponent({ text = '관리자 페이지', showButtons = true }) {
  const buttons = [
    { title: '전체 영화 목록'},
    { title: '새로운 영화 추가'},
    { title: '좋아요 관리'}, 
  ];

  return (
    <AdminHeader>
      <HeaderContent>
      <AdminHeaderText>{text}</AdminHeaderText>
      </HeaderContent>
      {showButtons && (
        <ButtonGroup>
          {buttons.map((button, index) => (
            <StyledButton key={index} onClick={button.onClick}>
              {button.title}
            </StyledButton>
          ))}
        </ButtonGroup>
      )}
    </AdminHeader>
  );
}

export default AdminHeaderComponent;

export const AdminHeader = styled.header`
  width: 100%;
  height: 4rem;
  background-color: ${lightTheme.footerBlack};
  color: ${lightTheme.fontWhite};
  font-size: 2rem;
  font-weight: ${lightTheme.fontWeightBold};
  font-family: ${lightTheme.fontSuitBold};
  box-shadow: ${lightTheme.defaulBoxShadow};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem; 
`;
const HeaderContent = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
`;
export const AdminHeaderText = styled.h1`
  position: absolute;
  top: ${(props) => props.top || '50%'}; 
  left: ${(props) => props.left || '20%'}; 
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-weight: ${lightTheme.fontWeightBold};
  font-family: ${lightTheme.fontSuitBold};
  color: white;
`;
const StyledButton = styled.button`
  background: none;
  color: ${lightTheme.fontWhite};
  font-size: 1rem;
  border: none;
  cursor: pointer;
  font-family: ${lightTheme.fontSuitBold};

  &:hover {
    text-decoration: underline;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;



