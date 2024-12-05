import styled from 'styled-components';

const TitleSection = styled.section`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1rem;
  color: ${({ theme }) => theme.color.fontDark};
  margin: 1rem 0rem 0rem 0rem;
  font-family: ${({ theme }) => theme.font.fontSuitRegular};
`;

function Title({ children }) {
  return (
    <>
      <TitleSection>{children}</TitleSection>
    </>
  );
}

export default Title;
