import React, { Children } from 'react';
import styled from 'styled-components';
import Poster from '../poster/Poster';

const TitleSection = styled.section`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1rem;
  color: #292a32;
  margin: 1rem 0rem 0rem 0rem;
`;

function Title({ children }) {
  return (
    <>
      <TitleSection>{children}</TitleSection>
    </>
  );
}

export default Title;
