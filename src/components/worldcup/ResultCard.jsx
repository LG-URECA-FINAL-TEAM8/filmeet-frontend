import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StarFilled } from '@ant-design/icons'; // 아이콘 사용

const ResultCard = ({ image, title, movieId, rating }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/moviedetail/${movieId}`);
  };

  return (
    <S.CardWrapper>
      <S.StyledCard
        hoverable
        cover={<S.StyledImage alt={title} src={image} />}
        onClick={handleCardClick}
      />
      <S.Rating>
        <StarFilled style={{ color: '#FF2F6E', marginRight: '0.3rem' }} />
        {rating.toFixed(1)} {/* 소수점 첫째자리까지 표시 */}
      </S.Rating>
    </S.CardWrapper>
  );
};

export default ResultCard;

const S = {
  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 1rem;
  `,

  StyledCard: styled(Card)`
    width: 17rem;
    height: 25rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.37rem rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    .ant-card-body {
      padding: 0;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0.37rem 0.93rem rgba(0, 0, 0, 0.2);
    }
  `,

  StyledImage: styled.img`
    height: 25rem;
    object-fit: cover;
  `,

  Rating: styled.div`
    margin-top: 1.2rem;
    font-size: 1.1rem;
    color: ${(props) => props.theme.color.fontPink};
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,
};
