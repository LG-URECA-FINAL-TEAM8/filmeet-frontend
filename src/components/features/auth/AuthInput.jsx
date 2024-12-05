import styled from 'styled-components';

const AuthInput = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <S.InputWrapper>
      <S.StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}></S.StyledInput>
    </S.InputWrapper>
  );
};

export default AuthInput;

const S = {
  InputWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
  `,
  StyledInput: styled.input`
    flex: 1;
    padding: 0.8rem;
    margin-bottom: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #d9d9d9;
    color: ${({ theme }) => theme.color.fontGray};
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
      font-family: ${(props) => props.theme.font.fontSuitRegular};
      color: ${(props) => props.theme.color.fontGray};
    }

    &:focus {
      outline: none;
      box-shadow: ${({ theme }) => theme.box.defaulBoxShadow};
    }
  `,
};
