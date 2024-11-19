import React from 'react';
import styled from 'styled-components';

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

function AdminHeaderComponent({ text = '관리자 페이지', top, left, fontSize }) {
  return (
    <AdminHeader>
      <AdminHeaderText top={top} left={left} fontSize={fontSize}>
        {text}
      </AdminHeaderText>
    </AdminHeader>
  );
}

export default AdminHeaderComponent;