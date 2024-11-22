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
  margin: 0 0 0 0.5rem;
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
  margin: 1.5rem 0;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font: ${lightTheme.fontSuitBold};
  font-size: 1.5rem;
  color: ${lightTheme.fontPrimary};
  padding: 0 0 0 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

export const MovieContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 1rem;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;
  height: 11rem;
  background-color: ${lightTheme.cardBackground};
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const MovieImage = styled.img`
  width: 8rem;
  height: 11rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MovieTitle = styled.h2`
  font: ${lightTheme.fontSuitBold};
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const MovieRating = styled.p`
  font: ${lightTheme.fontSuitRegular};
  font-size: 1rem;
  color: ${lightTheme.fontGray};
`;






