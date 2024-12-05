import styled from 'styled-components';

function Button({ children, onClick, active }) {
  return (
    <S.HeaderButton onClick={onClick} active={active}>
      {children}
    </S.HeaderButton>
  );
}

const S = {
  HeaderButton: styled.button`
    width: 5rem;
    height: auto;
    border: none;
    color: ${(props) => props.theme.color.fontBlack};
    background-color: ${(props) => props.theme.color.mainColor};
    font-size: 1rem;
    cursor: pointer;
    font-family: ${(props) =>
      props.active ? props.theme.font.fontSuitBold : props.theme.font.fontSuitRegular};
  `,
};

export default Button;
