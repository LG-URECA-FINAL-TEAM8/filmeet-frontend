import React from 'react';
import { lightTheme } from '../../../styles/themes';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 0.9rem;
  color: ${lightTheme.fontGray};
  margin-top: 1rem;
  text-align: center;
  display: inline;
`;

const NoAccountText = () => {
  return (
    <Text>
      계정이 없으신가요?{' '}
    </Text>
  );
};

export default NoAccountText;
