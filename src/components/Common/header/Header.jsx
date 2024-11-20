import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';
import Button from './Button';
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

const HeaderSection = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
`;

function Header() {
  const { openModal } = useModalStore();

  const buttons = [
    { title: '홈', onClick: null },
    { title: '탐색', onClick: null },
    { title: '장르별', onClick: null },
  ];

  const authButtons = [
    { title: '로그인', onClick: openModal },
    { title: '회원가입', onClick: openModal },
  ];

  const renderButtons = (buttonList) =>
    buttonList.map(({ title, onClick }, index) => (
      <Button key={index} onClick={onClick}>
        {title}
      </Button>
    ));

  return (
    <DefaultHeader>
      <HeaderSection>{renderButtons(buttons)}</HeaderSection>
      <HeaderSection>{renderButtons(authButtons)}</HeaderSection>
    </DefaultHeader>
  );
}

export default Header;
