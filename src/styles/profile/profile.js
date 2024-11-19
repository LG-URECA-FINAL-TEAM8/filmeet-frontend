import styled from "styled-components";
import { lightTheme } from "../themes";

// 전체 페이지 컨테이너 (배경색 적용)
export const MyPageContainer = styled.div`
  background-color: #F5F5F5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

// 프로필 컨테이너
export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  height: 36.25rem;
  background-color: ${lightTheme.mainColor};
  border-radius: 0.375rem;
  box-shadow: ${lightTheme.defaulBoxShadow};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4.125rem 2rem 2rem;
`;

// 프로필 이미지
export const ProfileImage = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: 2rem;
`;

// 프로필 이름
export const ProfileName = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${lightTheme.fontBlack};
  margin-bottom: 0.5rem;
`;

// 팔로우 스탯 섹션
export const FollowStats = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${lightTheme.fontGray};

  span {
    font-weight: bold;
    color: ${lightTheme.fontBlack};
  }
`;
