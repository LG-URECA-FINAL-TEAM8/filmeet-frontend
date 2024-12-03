import styled from "styled-components";
import { lightTheme } from "../../../styles/themes";
import SvgCircle from "../../../assets/svg/Circle";

const ListPoster = ({ movies, onMovieSelect }) => {
  return (
    <MovieList>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          onClick={() => onMovieSelect(movie)}
          isSelected={movie.isSelected}
        >
        <CheckboxWrapper>
          <Checkbox isSelected={movie.isSelected} />
        </CheckboxWrapper>
          <MovieImage
            src={movie.image || "https://via.placeholder.com/70x100"}
            alt={movie.title || "제목 없음"}
          />
          <MovieDetails>
            <MovieTitle>{movie.title || "제목 없음"}</MovieTitle>
            <MovieSubTitle>{movie.releaseDate || "년도 없음"}</MovieSubTitle>
          </MovieDetails>
        </MovieItem>
      ))}
    </MovieList>
  );
};

export default ListPoster;

const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 10px;
`;

const MovieItem = styled.li`
  display: flex;
  align-items: center;
  width: 345px;
  height: 128px;
  background: ${(props) =>
    props.isSelected ? lightTheme.lightPink : props.theme.color.fontWhite};
  cursor: pointer;
  padding: 0 15px;
  border-radius: 8px;
  &:hover {
    background: ${lightTheme.lightGray};
  }
`;

const CheckboxWrapper = styled.div`
  width: 24px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 0 0;
`;

const Checkbox = ({ isSelected }) => (
  <StyledCheckbox>
    <SvgCircle isSelected={isSelected} />
  </StyledCheckbox>
);

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const MovieImage = styled.img`
  width: 70px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 4px;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 220px;
  height: 127px;
  background-color: ${(props) => props.theme.color.mainColor};
  box-sizing: border-box;
  border-bottom: ${(props) => props.theme.font.borderDefault};
`;

const MovieTitle = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 1rem;
  margin-bottom: 5px;
`;

const MovieSubTitle = styled.div`
font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.fontGray};
`;
