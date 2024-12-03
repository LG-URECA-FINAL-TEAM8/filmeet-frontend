import ReactModal from "react-modal";
import styled from "styled-components";
import { movies } from "../../../data/movies";
import useCollectionsStore from "../../../store/collections/useCollectionsStore";
import SvgSearch from "../../../assets/svg/Search";
import ListPoster from "../poster/ModalList";

ReactModal.setAppElement("#root");

const CollectionsLabel = {
  AddMovies: "작품 추가",
  AddMoviesButton: "개 추가하기",
  SearchPlaceholder: "검색하여 작품 추가하기",
};

const MovieSearchModal = ({ onAddMovies }) => {
  const {
    isModalOpen,
    closeModal,
    searchTerm,
    setSearchTerm,
    tempSelectedMovies,
    toggleMovieSelection,
    confirmTempSelectedMovies,
  } = useCollectionsStore();

  const getFilteredMovies = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return movies
      .filter(
        (movie) =>
          movie.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          movie.type?.toLowerCase().includes(lowerCaseSearchTerm)
      )
      .map((movie) => ({
        ...movie,
        isSelected: tempSelectedMovies.some(
          (selectedMovie) => selectedMovie.id === movie.id
        ),
      }));
  };

  const handleMovieSelect = (movie) => {
    toggleMovieSelection(movie);
  };

  const handleAddMovies = () => {
    if (tempSelectedMovies.length > 0) {
      onAddMovies(tempSelectedMovies);
      confirmTempSelectedMovies();
      closeModal();
    }
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Movie Search Modal"
    >
      <S.ModalContainer>
        <S.ButtonWrapper>
          <S.CloseButton onClick={closeModal}>✕</S.CloseButton>
        </S.ButtonWrapper>
        <S.Header>
          <S.Title>
            {CollectionsLabel.AddMovies}
            <S.AddButton
              disabled={tempSelectedMovies.length === 0}
              onClick={handleAddMovies}
            >
              {tempSelectedMovies.length}
              {CollectionsLabel.AddMoviesButton}
            </S.AddButton>
          </S.Title>
          <S.SearchWrapper>
            <S.SearchIcon />
            <S.SearchInput
              type="text"
              placeholder={CollectionsLabel.SearchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </S.SearchWrapper>
        </S.Header>
        <S.MovieList>
          <ListPoster movies={getFilteredMovies()} onMovieSelect={toggleMovieSelection}/>           
        </S.MovieList>
      </S.ModalContainer>
    </ReactModal>
  );
};

export default MovieSearchModal;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem 0 1.5rem 0",
    zIndex: 1000,
  },
  content: {
    position: "",
    width: "375px",
    maxWidth: "90%",
    height: "37.5rem",
    borderRadius: "0.3rem",
    padding: "0",
    overflow: "hidden",
  },
};

const S = {
  ModalContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.fontWhite};
    border-radius: 0.3rem;
    overflow: hidden;
    box-sizing: border-box; // 박스 크기 포함
  `,

  ButtonWrapper: styled.div`
    display: flex;
    padding: 10px 16px 4px;
  `,

  CloseButton: styled.button`
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: ${(props) => props.theme.color.fontPink};
    padding: 6px;
  `,

  Header: styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 0 1.25rem;
    background-color: ${(props) => props.theme.color.lightGray};
    border-bottom: 1px solid ${(props) => props.theme.color.lineColor};
  `,

  Title: styled.h2`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.25rem;
    margin: 2px 0 12px;
  `,

  AddButton: styled.button`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    font-weight: ${(props) => props.theme.font.fontWeightRegular};
    color: ${(props) =>
      props.disabled ? props.theme.color.fontGray : props.theme.color.fontPink};
    background: none;
    border: none;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

    &:hover {
      text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
    }
  `,

  SearchWrapper: styled.label`
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    background-color: ${(props) => props.theme.color.commentColor};
    margin: 0 0 10px;
    padding: 10px 12px 10px 48px;
    border-radius: 6px;
    box-sizing: border-box;
    position: relative;
  `,

  SearchInput: styled.input`
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    outline: none;
    color: ${(props) => props.theme.color.fontGray};
    font-family: ${(props) => props.theme.font.fontSuitRegular};

    &::placeholder {
      color: ${(props) => props.theme.color.fontGray};
    }
  `,

  SearchIcon: styled(SvgSearch)`
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    width: 1.3rem;
    height: 1.3rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

MovieList: styled.div`
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
  background: ${(props) => props.theme.color.mainColor};
`,

MovieItem: styled.li`
  width: 345px;
  height: 128px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid ${(props) => props.theme.color.borderGray};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.collectionColor};
  }

  img {
    width: 50px;
    height: 75px;
    margin: 10px 16px 10px 0;
    border-radius: 4px;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
  }

  .movie-title {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.color.fontBlack};
  }

  .movie-year {
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
  }
`,
};
