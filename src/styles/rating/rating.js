import styled from "styled-components";
import { lightTheme } from "../themes";

export const RatingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${lightTheme.mainColor};
`;

export const TopContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${lightTheme.mainColor};
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0.7rem 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${lightTheme.fontPink};
  font-size: 1rem;
`;

export const TopTitle = styled.p`
  margin: 0 0.5rem 1rem 0;
  font: ${lightTheme.fontSuitBold};
  font-weight: ${lightTheme.fontWeightBold};
  font-size: 1.2rem;
`;

export const BottomContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 2.5rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${lightTheme.mainColor};
`;

export const Label = styled.p`
  margin: 0;
  font: ${lightTheme.fontSuitBold};
  font-weight: ${lightTheme.fontWeightBold};
  font-size: 1.2rem;
  color: ${lightTheme.fontPrimary};
`;

export const Count = styled.p`
  margin: 0.5rem;
  font: ${lightTheme.fontSuitRegular};
  font-weight: ${lightTheme.fontWeightMedium};
  font-size: 1.2rem;
  color: ${lightTheme.fontGray};
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
  font: ${lightTheme.fontSuitBold};
  font-weight: ${lightTheme.fontWeightBold};
  font-size: 0.9rem;
  color: ${({ isActive }) => (isActive ? lightTheme.fontPink : lightTheme.fontGray)};
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${lightTheme.fontPink}` : "2px solid transparent"};
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
  font: ${lightTheme.fontSuitBold};
  font-size: 1.5rem;
  color: ${lightTheme.fontPrimary};
`;

export const SectionCount = styled.p`
  margin: 0.2rem 0.5rem 0.5rem 0.5rem;
  font: ${lightTheme.fontSuitRegular};
  font-weight: ${lightTheme.fontWeightMedium};
  font-size: 1.2rem;
  color: ${lightTheme.fontGray};
`;

export const MoreButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: ${lightTheme.fontWeightRegular};
  color: ${lightTheme.fontPink};
  cursor: pointer;
`;

export const NoResults = styled.div`
  margin: 2rem 0;
  text-align: center;
  font-size: 1.2rem;
  color: ${lightTheme.fontGray};
`;

 
