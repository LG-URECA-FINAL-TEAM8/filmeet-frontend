import styled from "styled-components";

const SmallCard = ({ title, image }) => {
  return (
    <S.Card>
      <S.Image src={image} alt={title} />
    </S.Card>
  );
};

export default SmallCard;

const S = {
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

  Title: styled.div`
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontBlack};
  `,
};
