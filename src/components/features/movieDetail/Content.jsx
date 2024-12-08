import styled from "styled-components";
import { Rate } from "antd";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import SvgPencil from "../../../assets/svg/Pencil";
import useMovieCommentStore from "../../../store/moviedetail/useMovieCommentStore";
import MovieDetailModal from "../../common/modal/MovieDetailModal";
import { movieDetailData } from "../../../data/moviedetail";

function Content() {
  const { openModal, isLiked, toggleLike } = useMovieCommentStore();
  const { rating, score, ratingavg, like, comment, synopsis, posterUrl } = movieDetailData.content;

  return (
    <>
      <S.ContentContainer>
        <S.MovieSection>
          <S.MoviePoster>
            <img src={posterUrl} alt="Movie Poster" />
          </S.MoviePoster>
          <S.StatAndSynopsis>
            <S.StatSection>
              <S.StatItem>
                <S.RatingStars>
                  <StyledRate allowHalf />
                </S.RatingStars>
                <S.StatDescription>{rating}</S.StatDescription>
              </S.StatItem>
              <S.StatItem>
                <S.StatScore>
                  {score}
                  <S.StatDescription>{ratingavg}</S.StatDescription>
                </S.StatScore>
              </S.StatItem>
              <S.IconContainer>
                <S.StatItemBox onClick={toggleLike} isLiked={isLiked}>
                  <SvgIcLikeFilled24 />
                  <S.StatDescription>{like}</S.StatDescription>
                </S.StatItemBox>
                <S.StatItemBox>
                  <SvgPencil onClick={openModal} />
                  <S.StatDescription>{comment}</S.StatDescription>
                </S.StatItemBox>
              </S.IconContainer>
            </S.StatSection>
            <S.SynopsisSection>
              <S.SynopsisContent>{synopsis}</S.SynopsisContent>
            </S.SynopsisSection>
          </S.StatAndSynopsis>
        </S.MovieSection>
      </S.ContentContainer>

      {/* MovieDetailModal 렌더링 */}
      <MovieDetailModal />
    </>
  );
}

export default Content;

const S = {
  ContentContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 82.5rem;
    margin: 0 18.75rem;
    padding: 1.87rem 0 3.75rem;
    background-color: ${(props) => props.theme.color.commentColor};
  `,

  MovieSection: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  `,

  MoviePoster: styled.div`
    width: 18.75rem;
    height: 25rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  StatAndSynopsis: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,

  StatSection: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 61.75rem;
    height: 5.625rem;
    padding-bottom: 1.5rem;
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,

  StatItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  StatItemBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 0.5rem;
    text-align: center;
    cursor: pointer;
    color: ${(props) => (props.isLiked ? props.theme.color.fontPink : props.theme.color.fontGray)};

    svg {
      width: 3.12rem;
      height: 3.12rem;
    }
  `,

  IconContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
  `,

  StatScore: styled.div`
    margin: 0 0 0.43rem;
    font-size: 2rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontPink};
    text-align: center;
  `,

  StatDescription: styled.div`
    margin-top: 0.25rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
    text-align: center;
  `,

  RatingStars: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  `,

  SynopsisSection: styled.div`
    flex-grow: 1;
    margin: 0 0 1.87rem;
  `,

  SynopsisContent: styled.p`
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
    line-height: 1.5;
  `,
};

const StyledRate = styled(Rate)`
  font-size: 2.2rem;
  color: ${(props) => props.theme.color.fontPink};

  .ant-rate-star {
    margin-right: 0.31rem;
  }

  .ant-rate-star-full {
    color: ${(props) => props.theme.color.fontPink};
  }
`;
