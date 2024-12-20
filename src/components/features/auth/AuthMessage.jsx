import styled from 'styled-components';

const AuthMessage = ({ value }) => {
  return <S.Text>{value}</S.Text>;
};

export default AuthMessage;

const S = {
  Text: styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.fontGray};
    margin-top: 1rem;
    text-align: center;
    display: inline;
    font-family: ${({ theme }) => theme.font.fontSuitRegular};
  `,
};
