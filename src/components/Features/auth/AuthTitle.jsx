import styled from 'styled-components';

const LoginTitle = ({ value }) => {
  return <S.AuthTitle>{value}</S.AuthTitle>;
};

export default LoginTitle;

const S = {
  AuthTitle: styled.h2`
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.font.fontWeightBold};
    text-align: center;
    margin-top: 2.125rem;
    margin-bottom: 2.125rem;
    font-family: ${({ theme }) => theme.font.fontSuitBold};
  `,
};
