import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/themes";

const NoResult = ({ iconSrc, message }) => {
  return (
    <NoResultContainer>
      <Icon src={iconSrc} alt="No Result Icon" />
      <Text>{message}</Text>
    </NoResultContainer>
  );
};

export default NoResult;

const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem; 
  color: ${lightTheme.fontGray}; 
  margin-top: 6.3rem;
`;

const Icon = styled.img`
  width: 3rem; 
  height: 3rem; 
`;

const Text = styled.p`
  font-size: 1rem; 
  color: ${lightTheme.fontGray}; 
  margin: 0;
  font-family:${lightTheme.fontSuitRegular}
`;