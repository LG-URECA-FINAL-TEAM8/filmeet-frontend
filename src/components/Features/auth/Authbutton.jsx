import React from 'react';
import { lightTheme } from '../../../styles/themes';
import styled from 'styled-components';

const Authbutton = ({ value }) => {
  return <StyledButton>{value}</StyledButton>;
};

export default Authbutton;

const StyledButton = styled.button`
  width: 97%;
  padding: 0.8rem;
  background-color: ${lightTheme.fontPink};
  color: ${lightTheme.fontWhite};
  font-size: 1rem;
  font-weight: ${lightTheme.fontWeightBold};
  border: none;
  border-radius: 0.25rem;
  margin-top: 0.3rem;
  font-family:${lightTheme.fontSuitRegular};
  cursor: pointer;

  &:hover {
    background-color: #E02761; /* lightTheme 색깔추가 해줭*/
  }
`;
