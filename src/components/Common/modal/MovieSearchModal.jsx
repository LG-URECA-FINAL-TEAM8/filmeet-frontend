import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { movies } from "../../../data/movies";
import useCollectionsStore from "../../../store/collections/useCollectionsStore";
import { lightTheme } from "../../../styles/themes";

Modal.setAppElement("#root");

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
    isModalOpen && (
      <StyledModalOverlay onClick={closeModal}>
        <StyledModalContent onClick={(e) => e.stopPropagation()}>
          <ModalContent>
            <Header>
              <Title>{CollectionsLabel.AddMovies}</Title>
              <AddButton
                disabled={selectedMovies.length === 0}
                onClick={handleAddMovies}
              >
                {selectedMovies.length}
                {CollectionsLabel.AddMoviesButton}
              </AddButton>
            </Header>
            <SearchBarContainer>
              <SearchBar
                type="text"
                placeholder={CollectionsLabel.SearchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchBarContainer>
            <MovieList>
              {searchTerm.trim() &&
                getFilteredMovies().map((movie) => (
                  <MovieItem
                    key={movie.id}
                    onClick={() => toggleMovieSelection(movie)}
                    isSelected={selectedMovies.some(
                      (selectedMovie) => selectedMovie.id === movie.id
                    )}
                  >
                    <Checkbox
                      isSelected={selectedMovies.some(
                        (selectedMovie) => selectedMovie.id === movie.id
                      )}
                    />
                    <MovieImage src={movie.image} alt={movie.title} />
                    <MovieInfo>
                      <span>{movie.title}</span>
                      <span>{movie.year}</span>
                    </MovieInfo>
                  </MovieItem>
                ))}
            </MovieList>
          </ModalContent>
        </StyledModalContent>
      </StyledModalOverlay>
    )
  );
};

export default MovieSearchModal;
// Styled Components
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  max-width: 90%;
  height: 37.5rem;
  border-radius: 0.3rem;
  padding: 0;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1.2rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-family: ${lightTheme.fontSuitRegular}
`;

const AddButton = styled.span`
  font-family: ${lightTheme.fontSuitRegular};
  font-size: 0.8rem;
  font-weight: ${lightTheme.fontWeightBold};
  color: ${(props) => (props.disabled ? lightTheme.fontGray : lightTheme.fontPink)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  user-select: none;

  &:hover {
    text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.6rem 0;
  padding-bottom: 0.6rem;
  border-bottom: 0.1rem solid ${lightTheme.fontGray}; 
`;

const SearchBar = styled.input`
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
`;

const MovieList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 0.6rem;
  padding: 0.6rem;
`;

const MovieItem = styled.div`
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
`;

const Checkbox = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.6rem;
  border: 0.1rem solid ${(props) => (props.isSelected ? lightTheme.fontPink : lightTheme.fontGray)};
  background-color: ${(props) => (props.isSelected ? lightTheme.fontPink : "transparent")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "✔";
    font-size: 0.8rem;
    color: ${lightTheme.fontWhite};
    display: ${(props) => (props.isSelected ? "block" : "none")};
  }
`;

const MovieImage = styled.img`
  width: 3.5rem;
  height: 5rem;
  margin-right: 0.7rem;
  border-radius: 0.3rem;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledModalOverlay = styled.div`
  background-color: ${lightTheme.fontGray};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContent = styled.div`
  position: relative;
  width: 25rem;
  max-width: 90%;
  height: 37.5rem;
  background: ${lightTheme.fontWhite};
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: ${lightTheme.defaultBoxShadow};
  padding: 0;
  font-family: ${lightTheme.fontSuitRegular}
`;