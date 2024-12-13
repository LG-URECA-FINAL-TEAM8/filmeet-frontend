import { Rate } from 'antd';
import styled from 'styled-components';
import SvgIcLikeFilled24 from '../../../assets/svg/IcLikeFilled24';
import SvgPencil from '../../../assets/svg/Pencil';
import useMovieCommentStore from '../../../store/moviedetail/useMovieCommentStore';
import MovieDetailModal from '../../common/modal/MovieDetailModal';
import { ContentText } from '../../../data/movieDetail/text';
import { useMovieEvaluation } from '../../../apis/evaluation/query';
import { useMovieLikeUpdate } from '../../../apis/movieDetail/query';
import CommentCard from './CommentCard';
function Content({ movieData, movieId }) {
  const { openModal } = useMovieCommentStore();
  const { mutate: evaluationMutate } = useMovieEvaluation();
  const { mutate: likeMovieMutate } = useMovieLikeUpdate();
  const handleRatingChange = (ratingScore) => {
    evaluationMutate({ ratingScore, movieId });
  };
  const handleLikeChange = (movieId) => {
    likeMovieMutate({ movieId });
  };

  return (
    <>
      <S.ContentWrapper>
        <S.ContentContainer>
          <S.MovieSection>
            <S.MoviePoster bgImage={movieData?.posterUrl} />
            <S.StatAndSynopsis>
              <S.StatSection>
                <S.StatItem>
                  <S.RatingStars>
                    <StyledRate
                      allowHalf
                      value={movieData?.myMovieRating?.ratingScore}
                      onChange={(ratingScore) => handleRatingChange(ratingScore, movieId)}
                    />
                  </S.RatingStars>
                  <S.StatDescription>{ContentText.ratingtext}</S.StatDescription>
                </S.StatItem>
                <S.StatItem>
                  <S.StatScore>
                    {movieData?.averageRating.toFixed(1)}
                    <S.StatDescription>
                      {ContentText.ratingavgtext}({movieData?.ratingCounts}명)
                    </S.StatDescription>
                  </S.StatScore>
                </S.StatItem>
                <S.IconContainer>
                  <S.StatItemBox liked={movieData?.isLiked}>
                    <S.SvgIcLikeFilled24
                      isLiked={movieData?.isLiked}
                      onClick={() => handleLikeChange(movieId)}
                    />
                    <S.StatDescription>{ContentText.liketext}</S.StatDescription>
                  </S.StatItemBox>
                  <S.StatItemBox>
                    <SvgPencil onClick={openModal} />
                    <S.StatDescription>{ContentText.commenttext}</S.StatDescription>
                  </S.StatItemBox>
                </S.IconContainer>
              </S.StatSection>
              <CommentCard myCommentData={movieData?.myMovieReview} />
              <S.SynopsisSection>
                <S.SynopsisContent>{movieData?.plot}</S.SynopsisContent>
              </S.SynopsisSection>
            </S.StatAndSynopsis>
          </S.MovieSection>
        </S.ContentContainer>
      </S.ContentWrapper>

      {/* MovieDetailModal 렌더링 */}
      <MovieDetailModal />
    </>
  );
}

export default Content;

const S = {
  ContentWrapper: styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.color.commentColor};
  `,
  SvgIcLikeFilled24: styled(SvgIcLikeFilled24)`
    color: ${(props) => (props.isLiked ? props.theme.color.fontPink : props.theme.color.fontGray)};
    transition: fill 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  `,

  ContentContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 82.5rem;
    margin: 0 18.7rem;
    padding: 1.8rem 0 3.7rem;
    background-color: ${(props) => props.theme.color.commentColor};
  `,

  MovieSection: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  `,

  MoviePoster: styled.div`
    width: 18.7rem;
    height: 25rem;
    background: url(${(props) => props.bgImage}) no-repeat center / cover;
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
    width: 63rem;
    height: 5.6rem;
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
      width: 3rem;
      height: 3rem;
    }
  `,

  IconContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
  `,

  StatScore: styled.div`
    margin: 0 0 0.4rem;
    font-size: 2rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontPink};
    text-align: center;
  `,

  StatDescription: styled.div`
    margin-top: 0.2rem;
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
    margin: 0 0 2rem;
  `,

  SynopsisContent: styled.p`
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
    line-height: 1.5;
  `,

  ProfileImage: styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
    background: url(${(props) => props.bgImage}) no-repeat center / cover;
  `,
};

const StyledRate = styled(Rate)`
  font-size: 2.2rem;
  color: ${(props) => props.theme.color.fontPink};

  .ant-rate-star {
    margin-right: 0.3rem;
  }

  .ant-rate-star-full {
    color: ${(props) => props.theme.color.fontPink};
  }
`;
