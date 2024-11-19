import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';
import Button from '../button/Button';
import useModalStore from '../../../store/modal/useModalStore';
const DefaultHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${lightTheme.mainColor};
  border-bottom: ${lightTheme.borderDefault};
  height: 5rem;
  padding: 1rem 20rem;
  box-sizing: border-box;
`;

const HeaderLeft = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
`;

function Header() {
  const buttonTitle = ['홈', '탐색', '장르별', '로그인', '회원가입'];
  const {openModal} = useModalStore();
  return (
    <DefaultHeader>
      <HeaderLeft>
        <Button>{buttonTitle[0]}</Button>
        <Button>{buttonTitle[1]}</Button>
        <Button>{buttonTitle[2]}</Button>
      </HeaderLeft>
      <HeaderRight>
        <Button onClick={openModal}>{buttonTitle[3]}</Button>
        <Button>{buttonTitle[4]}</Button>
      </HeaderRight>
    </DefaultHeader>
  );
}

export default Header;
