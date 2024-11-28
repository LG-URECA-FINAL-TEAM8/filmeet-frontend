import styled from 'styled-components';

const Input = ({ type = 'text', placeholder, value, onChange }) => {
  return <S.StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;

const S = {
  StyledInput: styled.input`
    width: 90%;
    padding: 0.8rem;
    margin-bottom: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #d9d9d9;
    color: ${({ theme }) => theme.color.fontGray};
    font-size: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.color.fontGray};
    }

    &:focus {
      outline: none;
      box-shadow: ${({ theme }) => theme.box.defaulBoxShadow};
    }
  `,
};
