import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';


const AuthTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: ${lightTheme.fontWeightBold};
  text-align: center;
  margin-top: 2.125rem;
`;

const LoginTitle = ({ children }) => {
  return <AuthTitle>{children}</AuthTitle>;
};

export default LoginTitle;
