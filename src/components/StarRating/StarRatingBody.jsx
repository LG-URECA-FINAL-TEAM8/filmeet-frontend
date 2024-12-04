import styled from "styled-components";
import { Rate } from "antd";
import { useStarRatingStore } from "../../store/starrating/useStarRatingStore";
import { movieData } from "../../data/starratingdata";

const StarRatingBody = () => {
  const { ratings, setRating } = useStarRatingStore();

  const handleRateChange = (value, movieId) => {
    setRating(movieId, value);
  };

  return (
    <S.BodyContainer>
      {movieData.map((movie) => (
        <S.MovieCard key={movie.id}>
          <S.MoviePoster style={{ backgroundImage: `url(${movie.image})` }} />
          <S.MovieInfo>
            <S.MovieTitle>{movie.title}</S.MovieTitle>
            <S.MovieDetails>
              {movie.year}, {movie.genre}
            </S.MovieDetails>
            <S.RatingStars>
              <StyledRate
                allowHalf
                value={ratings[movie.id] || 0}
                onChange={(value) => handleRateChange(value, movie.id)}
              />
            </S.RatingStars>
          </S.MovieInfo>
        </S.MovieCard>
      ))}
    </S.BodyContainer>
  );
};

export default StarRatingBody;

const S = {
  BodyContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: auto;
    border: 0.06rem solid ${(props) => props.theme.color.lineColor};
  `,

  MovieCard: styled.div`
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem;
    background-color: ${(props) => props.theme.color.mainColor};
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,

  MoviePoster: styled.div`
    width: 4.37rem;
    height: 6.25rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0.25rem;
    margin-right: 1rem;
  `,

  MovieInfo: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 0 0.12rem;
  `,

  MovieTitle: styled.p`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontBlack};
    margin: 0 0 0.12rem;
  `,

  MovieDetails: styled.p`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
    margin: 0 0 1.31rem;
  `,

  RatingStars: styled.div`
    width: 12.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

const StyledRate = styled(Rate)`
  font-size: 2.12rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.color.fontPink};
  width: 12.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .ant-rate-star {
    margin-right: 0.31rem;
  }

  .ant-rate-star-full {
    color: ${(props) => props.theme.color.fontPink};
  }
`;

