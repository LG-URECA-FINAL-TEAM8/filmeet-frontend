import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';
import Button from './Button';
import useModalStore from '../../../store/modal/useModalStore';
import { useState } from 'react';

function Header() {
  const { openModal } = useModalStore();
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { title: '홈', onClick: () => setActiveButton('홈') },
    { title: '탐색', onClick: () => setActiveButton('탐색') },
    { title: '장르별', onClick: () => setActiveButton('장르별') },
  ];

  const authButtons = [
    {
      title: '로그인',
      onClick: () => openModal('로그인', '계정이 없으신가요?'),
    },
    {
      title: '회원가입',
      onClick: () => openModal('회원가입', '계정이 이미 있으신가요?'),
    },
  ];

  const renderButtons = (buttonList, isMain = false) =>
    buttonList.map(({ title, onClick }, index) => (
      <Button key={index} onClick={onClick} active={isMain && activeButton === title}>
        {title}
      </Button>
    ));

  return (
    <S.DefaultHeader>
      <S.HeaderSection>{renderButtons(buttons, true)}</S.HeaderSection>
      <S.HeaderSection>{renderButtons(authButtons)}</S.HeaderSection>
    </S.DefaultHeader>
  );
}

const S = {
  DefaultHeader: styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${lightTheme.mainColor};
    border-bottom: ${lightTheme.borderDefault};
    height: 5rem;
    padding: 1rem 20rem;
    box-sizing: border-box;
  `,

  HeaderSection: styled.div`
    width: 12rem;
    display: flex;
    align-items: center;
  `,
};

export default Header;
