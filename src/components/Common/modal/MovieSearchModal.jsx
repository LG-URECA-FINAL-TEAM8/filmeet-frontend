import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { movies } from "../../../data/movies";
import useCollectionsStore from "../../../store/collections/useCollectionsStore";
import { lightTheme } from "../../../styles/themes";

ReactModal.setAppElement("#root");

const CollectionsLabel = {
  AddMovies: "작품 추가",
  AddMoviesButton: "개 추가하기",
  SearchPlaceholder: "검색하여 작품 추가하기",
};

const MovieSearchModal = ({ onAddMovies }) => {
  const { isModalOpen, closeModal } = useCollectionsStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovies, setSelectedMovies] = useState([]);

  const getFilteredMovies = () =>
    movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const toggleMovieSelection = (movie) => {
    setSelectedMovies((prev) =>
      prev.find((selectedMovie) => selectedMovie.id === movie.id)
        ? prev.filter((selectedMovie) => selectedMovie.id !== movie.id)
        : [...prev, movie]
    );
  };

  const handleAddMovies = () => {
    if (selectedMovies.length > 0) {
      onAddMovies(selectedMovies);
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
            disabled={selectedMovies.length === 0}
            onClick={handleAddMovies}
          >
            {selectedMovies.length}
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
          {searchTerm.trim() &&
            getFilteredMovies().map((movie) => (
              <S.MovieItem
                key={movie.id}
                onClick={() => toggleMovieSelection(movie)}
                isSelected={selectedMovies.some(
                  (selectedMovie) => selectedMovie.id === movie.id
                )}
              >
                <S.Checkbox
                  isSelected={selectedMovies.some(
                    (selectedMovie) => selectedMovie.id === movie.id
                  )}
                />
                <S.MovieImage src={movie.image} alt={movie.title} />
                <S.MovieInfo>
                  <span>{movie.title}</span>
                  <span>{movie.year}</span>
                </S.MovieInfo>
              </S.MovieItem>
            ))}
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
    padding: "0",
    margin: "0 auto",
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
    padding: 0.6rem 1.2rem;
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

    &:focus {
      border-color: ${lightTheme.fontPink};
      box-shadow: 0 0 0.2rem ${lightTheme.fontPink};
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

  Checkbox: styled.div`
      width: 0.7rem; 
  height: 0.7rem;
  margin-right: 0.5rem; 
  border: 0.1rem solid
    ${(props) => (props.isSelected ? lightTheme.fontPink : lightTheme.fontGray)};
  background-color: ${(props) =>
    props.isSelected ? lightTheme.fontPink : "transparent"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0; 

  &:after {
    content: "✔";
    font-size: 0.5rem; 
    color: ${lightTheme.fontWhite};
    display: ${(props) => (props.isSelected ? "block" : "none")};
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