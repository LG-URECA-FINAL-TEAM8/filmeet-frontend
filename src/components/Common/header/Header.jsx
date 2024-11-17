import styled from 'styled-components';
import { darkTheme } from '../../../styles/themes';
import Button from '../button/Button';

const DefaultHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${darkTheme.mainColor};
  height: 5rem;
  padding: 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #202025;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <DefaultHeader>
      <HeaderLeft>
        <Button>홈</Button>
        <Button>탐색</Button>
        <Button>장르별</Button>
      </HeaderLeft>
      <HeaderRight>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </HeaderRight>
    </DefaultHeader>
  );
}

export default Header;
