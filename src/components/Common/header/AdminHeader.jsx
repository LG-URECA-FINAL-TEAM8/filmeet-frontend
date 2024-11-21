import React from 'react';
import styled from 'styled-components';

function AdminHeaderComponent({
  text = '관리자 페이지', // 기본 문구
  fontSize = '1.5rem',
  textPosition = { top: '50%', left: '20%' }, // 문구 위치 설정
  showButtons = true,
}) {
  // 버튼 텍스트 정의
  const allMovieButton = '전체 영화 목록';
  const newMovieButton = '새로운 영화 추가';
  const likeButton = '좋아요 관리';

  return (
    <AdminHeader>
      {/* 동적으로 위치 조정 가능한 헤더 문구 */}
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
  height: 3.875rem;
  background-color: #2c2c2c;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'SUIT-Bold', sans-serif;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem; 
`;

export const AdminHeaderText = styled.h1`
  position: absolute;
  top: ${(props) => props.top || '50%'}; /* 동적으로 설정 가능한 top */
  left: ${(props) => props.left || '20%'}; /* 동적으로 설정 가능한 left */
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-weight: bold;
  font-family: 'SUIT-Bold', sans-serif;
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
  font-family: 'SUIT-Bold', sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;
