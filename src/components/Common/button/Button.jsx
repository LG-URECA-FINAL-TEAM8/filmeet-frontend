import styled from 'styled-components';
import { darkTheme } from '../../../styles/themes';

const HeaderButton = styled.button`
  width: 5rem;
  height: auto;
  border: none;
  color: ${darkTheme.fontGray};
  background-color: ${darkTheme.mainColor};
  font-size: 1rem;
  cursor: pointer;
`;

function Button({ children }) {
  return <HeaderButton>{children}</HeaderButton>;
}

export default Button;
