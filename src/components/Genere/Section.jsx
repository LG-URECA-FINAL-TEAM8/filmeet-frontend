import React from 'react';
import styled from 'styled-components';
import ButtonGroup from './ButtonGroup';

const SectionContainer = styled.div`
   width: 100%;
  max-width: 60rem; /* 섹션 너비 제한 */
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px; /* 내부 여백 */
`;


const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const Section = ({ title, options }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <ButtonGroup options={options} />
    </SectionContainer>
  );
};

export default Section;
