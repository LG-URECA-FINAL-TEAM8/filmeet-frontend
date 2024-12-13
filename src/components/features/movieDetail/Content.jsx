import { Rate } from 'antd';
import styled from 'styled-components';
import SvgIcLikeFilled24 from '../../../assets/svg/IcLikeFilled24';
import SvgPencil from '../../../assets/svg/Pencil';
import useMovieCommentStore from '../../../store/moviedetail/useMovieCommentStore';
import MovieDetailModal from '../../common/modal/MovieDetailModal';
import { ContentText } from '../../../data/movieDetail/text';
function Content({ movieData }) {
  const { openModal } = useMovieCommentStore();

  const handleRatingChange = (newRating) => {
    console.log('새로운 별점:', newRating);
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
                      onChange={handleRatingChange}
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
                    <SvgIcLikeFilled24 />
                    <S.StatDescription>{ContentText.liketext}</S.StatDescription>
                  </S.StatItemBox>
                  <S.StatItemBox>
                    <SvgPencil onClick={openModal} />
                    <S.StatDescription>{ContentText.commenttext}</S.StatDescription>
                  </S.StatItemBox>
                </S.IconContainer>
              </S.StatSection>

              {movieData?.myMovieReview && (
                <S.MyCommentsSection>
                  <S.MyCommentsTitle>{ContentText.mycomment}</S.MyCommentsTitle>
                  {/* <S.CommentCard>
                    <S.ProfileImage bgImage={myMovieRating?.myprofileImage} />
                    <S.CommentText>{movieData?.content}</S.CommentText>
                    <S.CommentActions>
                      <S.DeleteButton>
                        <SvgDelete width="1rem" height="1rem" /> {ContentText.delete}
                      </S.DeleteButton>
                      <S.EditButton>
                        <SvgPencil width="1rem" height="1rem" /> {ContentText.edit}
                      </S.EditButton>
                    </S.CommentActions>
                  </S.CommentCard> */}
                </S.MyCommentsSection>
              )}
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

  MyCommentsSection: styled.div`
    margin: 0 0 0;
    padding: 1rem 0;
    background-color: ${(props) => props.theme.color.commentColor};
    border-radius: 0.5rem;
  `,

  MyCommentsTitle: styled.h4`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
    margin: 0 0 0.6rem;
  `,

  CommentCard: styled.div`
    width: 61rem;
    height: 4.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${(props) => props.theme.color.mainColor};
    border: ${(props) => props.theme.font.borderDefault};
    border-radius: 0.3rem;
  `,

  CommentText: styled.div`
    flex: 1;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    margin: 0 1rem;
  `,

  CommentActions: styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
  `,

  EditButton: styled.button`
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    background: none;
    border: none;
    cursor: pointer;
  `,

  DeleteButton: styled.button`
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    background: none;
    border: none;
    cursor: pointer;
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
