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
  padding-bottom: 1rem; /* 섹션 하단 여백 */
  border-bottom: 1px solid ${lightTheme.fontGray};
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* 한 열당 최소 150px */
  gap: 1rem; /* 아이템 간격 */
  max-width: 1920px; /* 최대 너비 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 1rem; /* 내부 여백 */
  box-sizing: border-box;
`;










