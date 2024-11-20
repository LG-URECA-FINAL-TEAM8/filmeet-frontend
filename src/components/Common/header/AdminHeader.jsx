import React from 'react';
import styled from 'styled-components';

function AdminHeaderComponent({ text = '등록된 영화 목록', top = '50%', left = '20%', fontSize = '1.5rem' }) {
  const allmoviebutton = '전체 영화 목록';
  const newmoviebutton = '새로운 영화 추가';
  const likebutton = '좋아요 관리';

  return (
    <AdminHeader>
      <AdminHeaderText top={top} left={left} fontSize={fontSize}>
        {text}
      </AdminHeaderText>
      <HeaderButtons>
        <HeaderButton>{allmoviebutton}</HeaderButton>
        <HeaderButton>{newmoviebutton}</HeaderButton>
        <HeaderButton>{likebutton}</HeaderButton>
      </HeaderButtons>
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
  top: ${(props) => props.top || '50%'}; 
  left: ${(props) => props.left || '50%'}; 
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-weight: bold;
  font-family: 'SUIT-Bold', sans-serif;
  color: white;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 0.1rem; 
  margin-left: auto;
`;

const HeaderButton = styled.button`
  background: none;
  color: white;
  font-size: 1rem;
  padding : 2rem;
  border: none;
  cursor: pointer;
  font-family: 'SUIT-Bold', sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;
