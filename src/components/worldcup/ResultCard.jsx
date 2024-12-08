import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const ResultCard = ({ image, title }) => {
  return (
    <S.StyledCard hoverable cover={<S.StyledImage alt={title} src={image} />}></S.StyledCard>
  );
};

export default ResultCard;

const S = {
  StyledCard: styled(Card)`
    width: 20rem;
    height: 25rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.37rem rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    .ant-card-body {
      padding: 1rem;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0.37rem 0.93rem rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(1.02);
      box-shadow: 0 0.25rem 0.62rem rgba(0, 0, 0, 0.2);
    }
  `,

  StyledImage: styled.img`
    height: 25rem;
    object-fit: cover;
  `,

  StyledMeta: styled(Meta)`
    height: 4.37rem;
    display: flex;
    flex-direction: flex-start;
    justify-content: space-between;

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
    flex-direction: flex-start;
    gap: 0.5rem;
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
