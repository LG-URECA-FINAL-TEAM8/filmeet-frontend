import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

const LoginTitle = ({ value }) => {
  return <AuthTitle>{value}</AuthTitle>;
};

export default LoginTitle;

const AuthTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: ${lightTheme.fontWeightBold};
  text-align: center;
  margin-top: 2.125rem;
  font-family: ${lightTheme.fontSuitBold};
`;
