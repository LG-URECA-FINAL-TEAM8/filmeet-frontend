import { Card } from "antd";
import styled, { keyframes, css } from "styled-components";
import SvgStar from "../../assets/svg/Star";
import { useState } from "react";

const { Meta } = Card;

const WorldcupMoviecard = ({ image, title, rating, onClick }) => {
  const [isVanishing, setIsVanishing] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsVanishing(true);
    setIsSelected(true);
    setTimeout(() => {
      if (onClick) onClick();
      setIsVanishing(false);
      setIsSelected(false);
    }, 1000);
  };

  return (
    <S.CardWrapper>
      <S.StyledCard
        hoverable
        className={`${isVanishing ? "vanishOut" : ""} ${isSelected ? "selected" : ""}`}
        isSelected={isSelected}
        onClick={handleCardClick}
        cover={<S.StyledImage alt={title} src={image} />}>
        <S.CardDetails>
          <S.CardTitle>{title}</S.CardTitle>
          <S.StarItem>
            <SvgStar width={20} height={20} />
            {rating.toFixed(1)}
          </S.StarItem>
      </S.CardDetails>
      </S.StyledCard>
      
    </S.CardWrapper>
  );
};

export default WorldcupMoviecard;

// 애니메이션 정의
const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const S = {
  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem; /* 카드와 별점/제목 사이 간격 */
    margin:1rem 0 1rem 0;
  `,

  StyledCard: styled(Card)`
    width: 20rem;
    height: 30rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.37rem rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    ${(props) =>
      props.isSelected &&
      css`
        animation: ${scaleUp} 0.3s forwards;
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
      `}

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0.37rem 0.93rem rgba(0, 0, 0, 0.2);
    }
  `,

  StyledImage: styled.img`
    height: 24rem;
    object-fit: cover;
  `,

  CardDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem; /* 별점과 제목 사이 간격 */
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  CardTitle: styled.h3`
    display: flex;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    margin: 0;
  `,

  StarItem: styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontPink};
  `,
};
