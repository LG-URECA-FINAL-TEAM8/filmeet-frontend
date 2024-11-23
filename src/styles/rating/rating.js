import styled from "styled-components";
import { lightTheme } from "../themes";

export const RatingPageContainer = styled.div`
  background-color: ${lightTheme.mainColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${lightTheme.mainColor};
  border-bottom: 1px solid ${lightTheme.fontGray};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  margin: 0.7rem 0 0.7rem 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${lightTheme.fontPink};
  font-size: 1rem;

`;

export const TopTitle = styled.p`
  font: ${lightTheme.fontSuitBold};
  font-weight: ${lightTheme.fontWeightBold};
  font-size: 1.2rem;
  margin: 0 0.5rem 1rem 0;
`;

export const BottomContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 2.5rem;
  background-color: ${lightTheme.mainColor};
  border-bottom: 1px solid ${lightTheme.fontGray};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0 0.5rem;
  cursor: pointer;
`;

export const Label = styled.p`
  font: ${lightTheme.fontSuitBold};
  font-weight: ${lightTheme.fontWeightBold};
  font-size: 1.2rem;
  color: ${lightTheme.fontPrimary};
  margin: 0 0 0 0;
`;

export const Count = styled.p`
  font: ${lightTheme.fontSuitRegular};
  font-weight: ${lightTheme.fontWeightMedium};
  font-size: 1.2rem;
  color: ${lightTheme.fontGray};
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
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
  background: none;
  border: none;
  padding: 0 0 0 0;
  color: ${({ isActive }) => (isActive ? lightTheme.fontPink : lightTheme.fontGray)};
  font: ${lightTheme.fontSuitBold};
  font-weight: ${lightTheme.fontWeightBold};
  font-size: 0.9rem;
  border-bottom: ${({ isActive }) => (isActive ? `2px solid ${lightTheme.fontPink}` : '2px solid transparent')};
  cursor: pointer;
`;

export const SectionContainer = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  margin: 0 0 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SectionHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1rem;
margin-bottom: 1rem;
`;

export const SectionTitle = styled.h2`
display: flex;
font: ${lightTheme.fontSuitBold};
font-size: 1.5rem;
color: ${lightTheme.fontPrimary};
margin: 1rem 0 0 0;
`;

export const SectionCount = styled.p`
  font: ${lightTheme.fontSuitRegular};
  font-weight: ${lightTheme.fontWeightMedium};
  font-size: 1.2rem;
  color: ${lightTheme.fontGray};
  margin: 0.2rem 0.5rem 0.5rem 0.5rem;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  color: ${lightTheme.fontPink};
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${lightTheme.fontWeightRegular};
  padding: 0;

  &:hover {
    text-decoration: underline;
    color: ${lightTheme.fontPinkHover};
  }
`;

export const NoResults = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: ${lightTheme.fontGray};
  margin: 2rem 0;
`;








