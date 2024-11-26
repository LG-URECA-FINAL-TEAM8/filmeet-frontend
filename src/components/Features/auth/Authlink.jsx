import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

const Link = ({ value }) => {
  return <AuthLink>{value}</AuthLink>;
};

export default Link;

const AuthLink = styled.span`
  font-size: 0.9rem;
  font-weight: ${lightTheme.fontWeightBold};
  color: ${lightTheme.fontPink};
  margin-left: 0.3rem;
  cursor: pointer;
  font-family: ${lightTheme.fontSuitBold};
`;
