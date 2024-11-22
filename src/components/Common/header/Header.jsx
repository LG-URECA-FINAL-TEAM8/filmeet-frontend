import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';
import Button from './Button';
import useModalStore from '../../../store/modal/useModalStore';
import { useState } from 'react';

const DefaultHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${lightTheme.mainColor};
  border-bottom: ${lightTheme.borderDefault};
  height: 5rem;
  padding: 1rem 20rem;
  box-sizing: border-box;
`;

const HeaderSection = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
`;

function Header() {
  const { openModal } = useModalStore();
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { title: '홈', onClick: () => setActiveButton('홈') },
    { title: '탐색', onClick: () => setActiveButton('탐색') },
    { title: '장르별', onClick: () => setActiveButton('장르별') },
  ];

  const authButtons = [
    { title: '로그인', onClick: openModal },
    { title: '회원가입', onClick: openModal },
  ];

  const renderButtons = (buttonList, isMain = false) =>
    buttonList.map(({ title, onClick }, index) => (
      <Button key={index} onClick={onClick} active={isMain && activeButton === title}>
        {title}
      </Button>
    ));

  return (
    <DefaultHeader>
      <HeaderSection>{renderButtons(buttons, true)}</HeaderSection>
      <HeaderSection>{renderButtons(authButtons)}</HeaderSection>
    </DefaultHeader>
  );
}

export default Header;
