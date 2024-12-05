import { Card } from "antd";
import styled from "styled-components";
import SvgComment from "../../assets/svg/Comment";
import SvgIcLikeFilled24 from "../../assets/svg/IcLikeFilled24";
import SvgStar from "../../assets/svg/Star";

const { Meta } = Card;

const WorldcupMoviecard = ({ image, title, rating, likes, comments }) => {
  return (
    <StyledCard
      hoverable
      cover={<StyledImage alt={title} src={image} />}
    >
      <StyledMeta
        title={<CardTitle>{title}</CardTitle>}
        description={
          <CardDetails>
            <StarItem>
              <SvgStar width={20} height={20} /> {rating.toFixed(1)}
            </StarItem>
            <DetailItem>
              <SvgIcLikeFilled24 width={24} height={24} /> {likes}
            </DetailItem>
            <DetailItem>
              <SvgComment width={24} height={24} /> {comments}
            </DetailItem>
          </CardDetails>
        }
      />
    </StyledCard>
  );
};

export default WorldcupMoviecard;

const StyledCard = styled(Card)`
  width: 500px;
  height: 600px;
  border-radius: 0.5rem;
  overflow: hidden;

  .ant-card-body {
    padding: 1rem;
  }
`;

const StyledImage = styled.img`
  height: 470px;
  object-fit: cover;
`;

const StyledMeta = styled(Meta)`
  height: 70px;
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
`;

const CardTitle = styled.h3`
  font-family: ${(props) => props.theme.font.fontSuitBold};
  font-size: 1.2rem;
  margin: 0;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: flex-start;
  gap: 0.5rem;
`;

const StarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 1rem;
  color: ${(props) => props.theme.color.fontPink};
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 1rem;
  color: ${(props) => props.theme.color.fontGray};
`;


