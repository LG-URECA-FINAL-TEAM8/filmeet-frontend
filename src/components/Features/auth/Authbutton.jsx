import React, { Children } from 'react';
import { lightTheme } from '../../../styles/themes';
import styled from 'styled-components';

const Authbutton = styled.button`
    width:97%;
    padding:0.8rem;
    background-color: ${lightTheme.fontPink};
    color: ${lightTheme.fontWhite};
    font-size: 1rem;
    font-weight: ${lightTheme.fontWeightBold};
    border: none;
    border-radius:0.5rem;
    margin-top:0.3;
    cursor: pointer;

    &:hover {
    
  }
`;
const Button = ({ children,onclick} ) =>{
  return <Authbutton onclick={onclick}>{children}</Authbutton>
}

export default Authbutton;