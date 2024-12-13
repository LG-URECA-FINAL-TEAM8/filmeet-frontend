import styled from "styled-components";
import SvgCircle from "../../../assets/svg/Circle";

const ListPoster = ({ movies, onMovieSelect }) => {
  return (
    <MovieList>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          onClick={() => !movie.isDisabled && onMovieSelect(movie)}
          isSelected={movie.isSelected}
          isDisabled={movie.isDisabled}
        >
          <CheckboxWrapper>
            <Checkbox isSelected={movie.isSelected} isDisabled={movie.isDisabled} />
          </CheckboxWrapper>
          <MovieImage
            src={movie.image || "https://via.placeholder.com/70x100"}
            alt={movie.title || "제목 없음"}
          />
          <MovieDetails>
            <MovieTitle>{movie.title || "제목 없음"}</MovieTitle>
            <MovieSubTitle>{movie.releaseDate || "년도 없음"}</MovieSubTitle>
            {movie.isDisabled && (
              <StatusLabel isDisabled={movie.isDisabled}>
                추가됨
              </StatusLabel>
            )}
          </MovieDetails>
        </MovieItem>
      ))}
    </MovieList>
  );
};

export default ListPoster;

// 스타일 정의
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
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  padding: 0 15px;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  position: relative; /* 자식 요소의 절대 위치 설정 가능 */
`;

const CheckboxWrapper = styled.div`
  width: 24px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 0 0;
`;

const Checkbox = ({ isSelected, isDisabled }) => (
  <StyledCheckbox isSelected={isSelected} isDisabled={isDisabled}>
    <SvgCircle isSelected={isSelected} isDisabled={isDisabled}/>
  </StyledCheckbox>
);

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isDisabled
      ? props.theme.color.collectionColor
      : props.isSelected
      ? props.theme.color.fontPink
      : props.theme.color.fontWhite};
  transition: background-color 0.2s ease-in-out;
  position: relative;
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

const StatusLabel = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.9rem; /* 텍스트 크기 */
  position: absolute; /* 절대 위치 */
  right: 30px; /* 오른쪽 정렬 */
  top: 50%; /* 상단 기준 */
  transform: translateY(-50%); /* 수직 가운데 정렬 */
  color: ${(props) =>
    props.isDisabled
      ? props.theme.color.fontGreen
      : props.theme.color.fontPink};
  display: flex;
  align-items: center;
`;

