import styled from "styled-components";
import SvgCircle from "../../../assets/svg/Circle";

const ListPoster = ({ movies, onMovieSelect }) => {
  return (
    <S.MovieList>
      {movies.map((movie) => (
        <S.MovieItem
          key={movie.id}
          onClick={() => !movie.isDisabled && onMovieSelect(movie)}
          isSelected={movie.isSelected}
          isDisabled={movie.isDisabled}
        >
          <S.CheckboxWrapper>
            <Checkbox isSelected={movie.isSelected} isDisabled={movie.isDisabled} />
          </S.CheckboxWrapper>
          <S.MovieImage
            src={movie.image || "https://via.placeholder.com/70x100"}
            alt={movie.title || ""}
          />
          <S.MovieDetails>
            <S.MovieTitle>{movie.title || ""}</S.MovieTitle>
            <S.MovieSubTitle>{movie.releaseDate || ""}</S.MovieSubTitle>
            {movie.isDisabled && (
              <S.StatusLabel isDisabled={movie.isDisabled}>추가됨</S.StatusLabel>
            )}
          </S.MovieDetails>
        </S.MovieItem>
      ))}
    </S.MovieList>
  );
};

export default ListPoster;

const S = {
  MovieList: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0.6rem;
  `,

  MovieItem: styled.li`
    display: flex;
    align-items: center;
    width: 21.5rem;
    height: 8rem;
    padding: 0 0.9rem;
    border-radius: 0.5rem;
    cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
    position: relative;
    transition: background-color 0.2s ease-in-out;
  `,

  CheckboxWrapper: styled.div`
    width: 1.5rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.3rem 0 0;
  `,

  StyledCheckbox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isDisabled
        ? props.theme.color.collectionColor
        : props.isSelected
        ? props.theme.color.fontPink
        : props.theme.color.fontWhite};
    position: relative;
    transition: background-color 0.2s ease-in-out;
  `,

  MovieImage: styled.img`
    width: 4.4rem;
    height: 6.2rem;
    object-fit: cover;
    margin-right: 0.9rem;
    border-radius: 0.2rem;
  `,

  MovieDetails: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 14rem;
    height: 8rem;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.color.mainColor};
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,

  MovieTitle: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    margin-bottom: 0.3rem;
  `,

  MovieSubTitle: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  StatusLabel: styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) =>
      props.isDisabled
        ? props.theme.color.fontGreen
        : props.theme.color.fontPink};
  `,
};

const Checkbox = ({ isSelected, isDisabled }) => (
  <S.StyledCheckbox isSelected={isSelected} isDisabled={isDisabled}>
    <SvgCircle isSelected={isSelected} isDisabled={isDisabled} />
  </S.StyledCheckbox>
);

