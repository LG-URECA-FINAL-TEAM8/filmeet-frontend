import {
  StatsContainer,
  StatBox,
  StatNumber,
  StatText,
  StatsContainerWrapper,
} from '../../styles/profile/profile';
import { useNavigate } from 'react-router-dom';

const Stats = ({ count }) => {
  const navigate = useNavigate();

  const stats = [
    { count: count?.movieRatingCount, label: '평가', path: `/mypage/ratings/${count?.id}` },
    { count: count?.reviewCount, label: '코멘트', path: `/mypage/comments/${count?.id}` },
    { count: count?.totalCollections, label: '컬렉션', path: `/mypage/collections/${count?.id}` },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <StatsContainerWrapper>
      <StatsContainer>
        {stats.map((stat, id) => (
          <StatBox key={id} onClick={() => handleNavigation(stat.path)}>
            <StatNumber>{stat.count}</StatNumber>
            <StatText>{stat.label}</StatText>
          </StatBox>
        ))}
      </StatsContainer>
    </StatsContainerWrapper>
  );
};

export default Stats;
