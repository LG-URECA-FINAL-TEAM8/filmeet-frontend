import React from "react";
import { StatsContainer, StatBox, StatNumber, StatText, StatsContainerWrapper } from "../../styles/profile/profile";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const navigate = useNavigate();

  const stats = [
    { count: 4, label: "평가", path: "/mypage/ratings" },
    { count: 0, label: "코멘트", path: "/mypage/comments" },
    { count: 0, label: "컬렉션", path: "/mypage/collections" },
  ];

  const handleNavigation = (path) => {
    navigate(path); // 페이지 이동
  };

  return (
    <StatsContainerWrapper>
        <StatsContainer>
        {stats.map((stat, index) => (
            <StatBox key={index} onClick={() => handleNavigation(stat.path)}>
                <StatNumber>{stat.count}</StatNumber>
                <StatText>{stat.label}</StatText>
            </StatBox>
        ))}
        </StatsContainer>
    </StatsContainerWrapper>
  );
};

export default Stats;
