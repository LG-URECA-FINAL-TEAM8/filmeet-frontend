import React from 'react';
import { lightTheme } from '../../../styles/themes';
import styled from 'styled-components';

const NoAccountText = ({ value }) => {
  return (
    <Text>{value}</Text>
  );
};

export default NoAccountText;

const Text = styled.p`
  font-size: 0.9rem;
  color: ${lightTheme.fontGray};
  margin-top: 1rem;
  text-align: center;
  display: inline;
  font-family:${lightTheme.fontSuitRegular};
`;
