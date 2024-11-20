import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

const AuthLink = styled.span`
  font-size: 0.9rem;
  font-weight: ${lightTheme.fontWeightBold};
  color: ${lightTheme.fontPink};
  margin-left: 0.3rem;
  cursor: pointer;
`;

const Link = ({ onClick }) => {
    return (
      <AuthLink onClick={onClick}>
        회원가입
      </AuthLink>
    );
  };

export default Link;
