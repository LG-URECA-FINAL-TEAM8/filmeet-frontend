import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StarFilled } from "@ant-design/icons";

const SmallCard = ({ title, image, movieId, rating }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/moviedetail/${movieId}`); // 상세 페이지로 이동
  };

  return (
    <S.CardWrapper>
      <S.Card onClick={handleCardClick}>
        <S.Image src={image} alt={title} />
      </S.Card>
      <S.Rating>
        <StarFilled style={{ color: "#FF2F6E", marginRight: "0.3rem" }} />
        {rating ? rating.toFixed(1) : "0.0"}
      </S.Rating>
    </S.CardWrapper>
  );
};

export default SmallCard;

const S = {
  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 1rem;
  `,

  Card: styled.div`
    width: 10rem;
    height: 11.87rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.color.cardBackground};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0.37rem 0.93rem rgba(0, 0, 0, 0.2);
      background-color: ${(props) => props.theme.color.cardHoverBackground};
    }

    &:active {
      transform: scale(1.05);
      box-shadow: 0 0.25rem 0.62rem rgba(0, 0, 0, 0.2);
    }
  `,

  Image: styled.img`
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
  `,

  Rating: styled.div`
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontPink};
    font-family: ${(props) => props.theme.font.fontSuitBold};
    display: flex;
    align-items: center;
  `,
};
