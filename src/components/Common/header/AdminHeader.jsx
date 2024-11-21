import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

function AdminHeaderComponent(props) {
  const {
    text,
    fontSize,
    textPosition,
    showButtons,
  } = {
    text: '관리자 페이지',
    fontSize: '1.5rem',
    textPosition: { top: '50%', left: '20%' },
    showButtons: true,
    ...props,
  };
  const allMovieButton = '전체 영화 목록';
  const newMovieButton = '새로운 영화 추가';
  const likeButton = '좋아요 관리';

  return (
    <AdminHeader>
      <AdminHeaderText
        top={textPosition.top}
        left={textPosition.left}
        fontSize={fontSize}
      >
        {text}
      </AdminHeaderText>

      {showButtons && (
        <HeaderButtons>
          <HeaderButton>{allMovieButton}</HeaderButton>
          <HeaderButton>{newMovieButton}</HeaderButton>
          <HeaderButton>{likeButton}</HeaderButton>
        </HeaderButtons>
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
  font-size: 1.5rem;
  font-weight: bold;
  font-family: ${lightTheme.fontSuitBold};
  box-shadow: ${lightTheme.defaulBoxShadow};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem; 
`;

export const AdminHeaderText = styled.h1`
  position: absolute;
  top: ${(props) => props.top || '50%'}; 
  left: ${(props) => props.left || '20%'}; 
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-weight: bold;
  font-family: ${lightTheme.fontSuitBold};
  color: white;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 1rem; 
  margin-left: auto;
`;

const HeaderButton = styled.button`
  background: none;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  font-family: ${lightTheme.fontSuitBold};
  &:hover {
    text-decoration: underline;
  }
`;
