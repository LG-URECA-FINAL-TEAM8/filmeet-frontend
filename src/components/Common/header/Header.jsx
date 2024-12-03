import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const buttons = [
    {
      title: '홈',
      onClick: () => {
        setActiveButton('홈');
        navigate('/');
      },
    },
    { title: '탐색', onClick: () => setActiveButton('탐색') },
    { title: '장르별', onClick: () => setActiveButton('장르별') },
  ];

  const authButtons = [
    {
      title: '로그인',
      onClick: () => navigate('/login'),
    },
    {
      title: '회원가입',
      onClick: () => navigate('/register'),
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
    background-color: ${(props) => props.theme.color.mainColor};
    border-bottom: ${(props) => props.theme.box.defaultBorder};
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
