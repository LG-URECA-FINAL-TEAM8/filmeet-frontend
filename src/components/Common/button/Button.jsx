import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../../styles/themes';

const HeaderButton = styled.button`
  width: 5rem;
  height: auto;
  border: none;
  color: ${lightTheme.fontBlack};
  background-color: ${lightTheme.mainColor};
  font-size: 1rem;
  cursor: pointer;
`;

function Button({ children }) {
  return <HeaderButton>{children}</HeaderButton>;
}

export default Button;
