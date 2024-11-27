import styled from 'styled-components';

const Link = ({ value }) => {
  return <S.AuthLink>{value}</S.AuthLink>;
};

export default Link;

const S = {
  AuthLink: styled.span`
    font-size: 0.9rem;
    font-weight: ${({ theme }) => theme.font.fontWeightBold};
    color: ${({ theme }) => theme.color.fontPink};
    margin-left: 0.3rem;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.fontSuitBold};
  `,
};
