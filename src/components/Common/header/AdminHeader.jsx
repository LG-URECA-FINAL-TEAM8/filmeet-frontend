import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

function AdminHeaderComponent({ 
  text = '관리자 페이지', 
  onMovieManagementClick, 
  onAddNewMovieClick, 
  onLikeManagementClick,
  showButtons = true,
}) {
  const clickmanagement = '전체 영화 목록';
  const clickadd = '새로운 영화 추가';
  const clicklike = '좋아요 관리';
  return (
    <AdminHeader>
      <HeaderContent>
        <AdminHeaderText>{text}</AdminHeaderText>
      </HeaderContent>
      {showButtons && (
        <ButtonGroup>
          <StyledButton onClick={onMovieManagementClick}>{clickmanagement}</StyledButton>
          <StyledButton onClick={onAddNewMovieClick}>{clickadd}</StyledButton>
          <StyledButton onClick={onLikeManagementClick}>{clicklike}</StyledButton>
        </ButtonGroup>
      )}
    </AdminHeader>
  );
}

export default AdminHeaderComponent;

const AdminHeader = styled.header`
  max-width : 120rem;
  width: 100%;
  height: 4rem;
  background-color: ${lightTheme.footerBlack};
  color: ${lightTheme.fontWhite};
  font-size: 1.5rem;
  font-weight: ${lightTheme.fontWeightBold};
  font-family: ${lightTheme.fontSuitBold};
  box-shadow: ${lightTheme.defaulBoxShadow};
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const HeaderContent = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
`;

const AdminHeaderText = styled.h1`
  top: ${(props) => props.top || '50%'}; 
  left: ${(props) => props.left || '20%'}; 

  font-weight: ${lightTheme.fontWeightBold};
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-family: ${lightTheme.fontSuitBold};
  color: ${lightTheme.fontWhite};
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
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