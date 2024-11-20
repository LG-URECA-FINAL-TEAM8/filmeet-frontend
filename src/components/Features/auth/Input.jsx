import React from 'react';
import { lightTheme } from '../../../styles/themes';
import styled from 'styled-components';


const StyledInput = styled.input`
  width: 90%; 
  padding: 0.8rem; 
  margin-bottom: 0.75rem; 
  border: none; 
  border-radius: 0.5rem; 
  background-color: #D9D9D9;     /*{lightTheme.borderDefault}; 색깔 추가*/ 
  color: ${lightTheme.fontGray}; 
  font-size: 1rem; 

  &::placeholder {
    color: ${lightTheme.fontGray} 
  }

  &:focus {
    outline: none; 
    box-shadow: ${lightTheme.defaulBoxShadow};
  }
`;

const Input = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;