import ReactModal from "react-modal";
import styled from "styled-components";
import { movies } from "../../../data/movies";
import useCollectionsStore from "../../../store/collections/useCollectionsStore";
import { lightTheme } from "../../../styles/themes";
import ModalList from "../poster/ModalList"; 

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
      <S.ModalContent>
        <S.Header>
          <S.Title>{CollectionsLabel.AddMovies}</S.Title>
          <S.AddButton
            disabled={tempSelectedMovies.length === 0}
            onClick={handleAddMovies}
          >
            {tempSelectedMovies.length}
            {CollectionsLabel.AddMoviesButton}
          </S.AddButton>
        </S.Header>
        <S.SearchBarContainer>
          <S.SearchBar
            type="text"
            placeholder={CollectionsLabel.SearchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </S.SearchBarContainer>
        <S.MovieList>
          <ModalList
            movies={getFilteredMovies()} 
            onMovieSelect={handleMovieSelect} 
          />
        </S.MovieList>
      </S.ModalContent>
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
    zIndex: 1000,
  },
  content: {
    position: "relative",
    width: "25rem",
    maxWidth: "90%",
    height: "37.5rem",
    borderRadius: "0.3rem",
    padding: "5px",
    boxShadow: `${lightTheme.defaultBoxShadow}`,
    overflow: "hidden",
    backgroundColor: lightTheme.fontWhite,
    fontFamily: lightTheme.fontSuitRegular,
  },
};

const S = {
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    width: 25rem;
    max-width: 90%;
    height: 37.5rem;
    border-radius: 0.3rem;
    padding: 0;
    margin: 0 auto;
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.2rem;
  `,

  Title: styled.h2`
    font-size: 1.2rem;
    font-family: ${lightTheme.fontSuitRegular};
  `,

  AddButton: styled.span`
    font-family: ${lightTheme.fontSuitRegular};
    font-size: 0.8rem;
    font-weight: ${lightTheme.fontWeightBold};
    color: ${(props) =>
      props.disabled ? lightTheme.fontGray : lightTheme.fontPink};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    user-select: none;

    &:hover {
      text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
    }
  `,

  SearchBarContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.6rem 0;
    padding-bottom: 0.6rem;
    border-bottom: 0.1rem solid ${lightTheme.fontGray};
  `,

  SearchBar: styled.input`
    width: 100%;
    padding: 0.6rem;
    border: 0.1rem solid ${lightTheme.borderGray};
    border-radius: 0.3rem;
    background-color: ${lightTheme.fontWhite};
    font-size: 0.8rem;
    outline: none;
    color: ${lightTheme.fontGray};
    font-family: ${lightTheme.fontSuitRegular};

    ::placeholder {
      color: ${lightTheme.fontGray};
    }
  `,

  MovieList: styled.div`
    flex: 1;
    overflow-y: auto;
    margin-top: 0.6rem;
    padding: 0.6rem;
  `,

  MovieItem: styled.div`
    display: flex;
    align-items: center;
    padding: 0.6rem;
    border: 0.1rem solid ${lightTheme.fontGray};
    border-radius: 0.3rem;
    margin-bottom: 0.3rem;
    font-family: ${lightTheme.fontSuitRegular};
    cursor: pointer;

    &:hover {
      background-color: ${lightTheme.lightGray};
    }
  `,
 

  MovieImage: styled.img`
    width: 3.5rem;
    height: 5rem;
    margin-right: 0.7rem;
    border-radius: 0.3rem;
  `,

  MovieInfo: styled.div`
    display: flex;
    flex-direction: column;
  `,

  StyledModalOverlay: styled.div`
    background-color: ${lightTheme.fontGray};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  StyledModalContent: styled.div`
    position: relative;
    width: 25rem;
    max-width: 90%;
    height: 37.5rem;
    background: ${lightTheme.fontWhite};
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: ${lightTheme.defaultBoxShadow};
    padding: 0;
    font-family: ${lightTheme.fontSuitRegular};
  `,
};
