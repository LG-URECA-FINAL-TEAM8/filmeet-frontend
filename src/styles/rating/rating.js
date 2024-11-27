import styled from 'styled-components';

export const RatingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.color.mainColor};
`;

export const TopContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.color.mainColor};
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0.7rem 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.color.fontPink};
  font-size: 1rem;
`;

export const TopTitle = styled.p`
  padding: 0.3rem;
  font-weight: ${(props) => props.theme.font.fontWeightBold};
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

export const BottomContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 2.5rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.color.mainColor};
`;

export const Label = styled.p`
  padding: 0.3rem;
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

export const Count = styled.p`
  margin: 0.5rem;
  font-weight: ${(props) => props.theme.font.fontWeightMedium};
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.fontGray};
`;

export const FilterContainer = styled.div`
  width: 20rem;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const FilterButton = styled.button`
  width: 100%;
  padding: 0;
  background: none;
  border: none;
  font-weight: ${(props) => props.theme.font.fontWeightBold};
  font-size: 0.9rem;
  color: ${({ theme, isActive }) => (isActive ? theme.font.fontPink : theme.font.fontGray)};
  border-bottom: ${({ theme, isActive }) =>
    isActive ? `2px solid ${theme.font.fontPink}` : '2px solid transparent'};
  cursor: pointer;
`;

export const SectionContainer = styled.div`
  width: 100%;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export const SectionTitle = styled.h2`
  display: flex;
  margin: 1rem 0 0 0;
  font-family: ${(props) => props.theme.font.fontSuitBold};
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.fontBlack};
`;

export const SectionCount = styled.p`
  margin: 0.2rem 0.5rem 0.5rem 0.5rem;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-weight: ${(props) => props.theme.font.fontWeightMedium};
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.fontGray};
`;

export const MoreButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: ${(props) => props.theme.font.fontSuitRegular};
  color: ${(props) => props.theme.color.fontPink};
  cursor: pointer;
`;

export const NoResults = styled.div`
  margin: 2rem 0;
  text-align: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.fontGray};
`;
