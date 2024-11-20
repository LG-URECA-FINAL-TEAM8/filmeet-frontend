import React from "react";
import { StatsContainer, StatBox, StatNumber, StatText, StyledLink } from "../../styles/profile/profile";

const Stats = () => {
  const stats = [
    { count: 4, label: "평가", path: "/mypage/ratings" },
    { count: 0, label: "코멘트", path: "/mypage/comments" },
    { count: 0, label: "컬렉션", path: "/mypage/collections" },
  ];

  return (
    <StatsContainer>
      {stats.map((stat, index) => (
        <StyledLink to={stat.path} key={index}>
            <StatBox key={index}>
                <StatNumber>{stat.count}</StatNumber>
                <StatText>{stat.label}</StatText>
            </StatBox>
        </StyledLink>
      ))}
    </StatsContainer>
  );
};

export default Stats;
