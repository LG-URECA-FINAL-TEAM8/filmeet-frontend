import { Card } from "antd";
import styled, { keyframes, css } from "styled-components";
import SvgComment from "../../assets/svg/Comment";
import SvgIcLikeFilled24 from "../../assets/svg/IcLikeFilled24";
import SvgStar from "../../assets/svg/Star";
import { useState } from "react";

const { Meta } = Card;

const WorldcupMoviecard = ({ image, title, rating, likes, comments, onClick }) => {
  const [isVanishing, setIsVanishing] = useState(false);
  const [isSelected, setIsSelected] = useState(false); // 선택된 상태 추가

  const handleCardClick = () => {
    setIsVanishing(true);
    setIsSelected(true); // 선택 상태 활성화
    setTimeout(() => {
      if (onClick) onClick();
      setIsVanishing(false);
      setIsSelected(false);
    }, 1000);
  };

  return (
    <S.StyledCard
      hoverable
      className={`${isVanishing ? "vanishOut" : ""} ${isSelected ? "selected" : ""}`}
      isSelected={isSelected}
      onClick={handleCardClick}
      cover={<S.StyledImage alt={title} src={image} />}
    >
      <S.StyledMeta
        title={<S.CardTitle>{title}</S.CardTitle>}
        description={
          <S.CardDetails>
            <S.StarItem>
              <SvgStar width={20} height={20} /> {rating.toFixed(1)}
            </S.StarItem>
            <S.DetailItem>
              <SvgIcLikeFilled24 width={24} height={24} /> {likes}
            </S.DetailItem>
            <S.DetailItem>
              <SvgComment width={24} height={24} /> {comments}
            </S.DetailItem>
          </S.CardDetails>
        }
      />
    </S.StyledCard>
  );
};

export default WorldcupMoviecard;

// 애니메이션 정의
const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.3); // 더 크게 확대
  }
`;

const S = {
  StyledCard: styled(Card)`
    width: 25rem;
    height: 31rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.37rem rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    ${(props) =>
      props.isSelected &&
      css`
        animation: ${scaleUp} 0.4s forwards; // 0.4초로 애니메이션 지속 시간 설정
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
        z-index: 10; // 확대된 카드가 위로 보이도록 설정
      `}

    .ant-card-body {
      padding: 1rem;
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

  StyledMeta: styled(Meta)`
    height: 4.37rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .ant-card-meta-title {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      font-family: ${(props) => props.theme.font.fontSuitBold};
    }

    .ant-card-meta-description {
      font-size: 0.9rem;
      color: ${(props) => props.theme.color.fontGray};
    }
  `,

  CardTitle: styled.h3`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.2rem;
    margin: 0;
  `,

  CardDetails: styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  `,

  StarItem: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontPink};
  `,

  DetailItem: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
};
