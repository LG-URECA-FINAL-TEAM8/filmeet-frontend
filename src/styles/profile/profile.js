import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MyPageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.mainColor};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
`;

// 프로필 컨테이너
export const ProfileContainer = styled.div`
  width: 40rem;
  height: 36.25rem;
  background-color: ${({ theme }) => theme.color.mainColor};
  border-radius: 50%;
  position: relative;
  padding: 0rem 1rem;
  margin: 0 auto;

  @media (min-width: 120rem) {
    margin-left: calc((100vw - 192rem) / 2 + 40rem);
    margin-right: calc((100vw - 192rem) / 2 + 40rem);
  }

  @media (max-width: 120rem) {
    margin-left: calc((100vw - 40rem) / 2);
    margin-right: calc((100vw - 40rem) / 2);
  }
`;

// 톱니바퀴 버튼 래퍼
export const SettingsWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// 아이콘 스타일
export const SettingsIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.fontBlack};
`;

// 프로필 이미지
export const ProfileImage = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

// 프로필 이름
export const ProfileName = styled.div`
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.font.fontSuitBold};
  color: ${({ theme }) => theme.color.fontBlack};
  margin-bottom: 0.5rem;
`;

// 팔로우 스탯 섹션
export const FollowStats = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.font.fontSuitRegular};
  color: ${({ theme }) => theme.color.fontGray};
  cursor: pointer;

  span {
    font-family: ${({ theme }) => theme.font.fontSuitBold};
    color: ${({ theme }) => theme.color.fontBlack};
  }
`;

// 팔로우 버튼
export const FollowButton = styled.button`
  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.color.fontBlack};
  font-family: ${({ theme }) => theme.font.fontSuitRegular};
  color: ${({ theme }) => theme.color.fontWhite};
  border: none;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.875rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.fontGray};
    color: ${({ theme }) => theme.color.fontBlack};
  }
`;

export const StatsContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StatBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 5rem;
  height: 2.75rem;
  padding: 0.75rem 0;
  cursor: pointer;
  text-align: center;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 25%;
    height: 50%;
    width: 1px;
    background-color: #e8e8ef;
  }
`;

export const StatNumber = styled.span`
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.font.fontWeightBold};
  font-family: ${({ theme }) => theme.font.fontSuitBold};
  color: ${({ theme }) => theme.color.fontBlack};
  margin-top: 0.75rem;
`;

export const StatText = styled.p`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.font.fontWeightRegular};
  font-family: ${({ theme }) => theme.font.fontSuitRegular};
  color: ${({ theme }) => theme.color.fontGray};
  margin: 0;
  margin-bottom: 0.75rem;
`;
