import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Authlink = ({ value, link }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link);
  };

  return <S.AuthLink onClick={handleNavigation}>{value}</S.AuthLink>;
};

export default Authlink;

const S = {
  AuthLink: styled.div`
    font-size: 0.9rem;
    font-weight: ${({ theme }) => theme.font.fontWeightBold};
    color: ${({ theme }) => theme.color.fontPink};
    margin-left: 0.3rem;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.fontSuitBold};

    &:hover {
      text-decoration: underline;
    }
  `,
};
