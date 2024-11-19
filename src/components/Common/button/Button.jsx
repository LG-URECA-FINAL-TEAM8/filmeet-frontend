import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

const HeaderButton = styled.button`
  width: 5rem;
  height: auto;
  border: none;
  color: ${lightTheme.fontBlack};
  background-color: ${lightTheme.mainColor};
  font-size: 1rem;
  cursor: pointer;
  font-family: ${lightTheme.fontSuitRegular};
`;

function Button({ children, onClick }) {
  return <HeaderButton onClick={onClick}>{children}</HeaderButton>;
}

export default Button;
