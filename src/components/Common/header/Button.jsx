import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

const S = {
  HeaderButton: styled.button`
    width: 5rem;
    height: auto;
    border: none;
    color: ${lightTheme.fontBlack};
    background-color: ${lightTheme.mainColor};
    font-size: 1rem;
    cursor: pointer;
    font-family: ${(props) =>
      props.active ? `${lightTheme.fontSuitBold}` : `${lightTheme.fontSuitRegular}`};
  `,
};

function Button({ children, onClick, active }) {
  return (
    <S.HeaderButton onClick={onClick} active={active}>
      {children}
    </S.HeaderButton>
  );
}

export default Button;
