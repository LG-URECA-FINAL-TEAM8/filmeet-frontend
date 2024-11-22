import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useCollectionsStore from "../../store/collections/useCollectionsStore";
import { lightTheme } from "../../styles/themes";

const MovieSearch = ({ onClose, onAddMovies }) => {
  const { collections } = useCollectionsStore(); 
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const MovieSerachlabel = {
    Add_Movie:"개 추가하기",
    closeIcon:"×",
    TitleAdd:"작품추가"
  };
  useEffect(() => {
    
    const allMovies = collections.flatMap((collection) => collection.movies);
    setFilteredMovies(allMovies);
  }, [collections]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    
    const allMovies = collections.flatMap((collection) => collection.movies);
    const results = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredMovies(results);
  };

  const handleSelect = (movieId) => {
    setSelectedMovies((prevSelected) =>
      prevSelected.includes(movieId)
        ? prevSelected.filter((id) => id !== movieId)
        : [...prevSelected, movieId]
    );
  };

  const handleAddMovies = () => {
    const allMovies = collections.flatMap((collection) => collection.movies);
    const selectedMoviesData = allMovies.filter((movie) =>
      selectedMovies.includes(movie.id)
    );
    onAddMovies(selectedMoviesData); 
    setSelectedMovies([]); 
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Header>
          <MovieTitles>{MovieSerachlabel.TitleAdd}</MovieTitles>
          <ItemCount>
            
            <AddButton
              onClick={handleAddMovies}
              disabled={selectedMovies.length === 0}
            >
              {selectedMovies.length}{MovieSerachlabel.Add_Movie}
            </AddButton>
          </ItemCount>
          <CloseButton onClick={onClose}>{MovieSerachlabel.closeIcon}</CloseButton>
        </Header>
        <SearchWrapper>
          <SearchInput
            placeholder="검색하여 작품 추가하기"
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchWrapper>
        <ScrollableContent>
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              isSelected={selectedMovies.includes(movie.id)}
              onClick={() => handleSelect(movie.id)}
            >
              <Checkbox
                type="checkbox"
                checked={selectedMovies.includes(movie.id)}
                onChange={() => handleSelect(movie.id)}
              />
              <MovieImage src={movie.image} alt={movie.title} />
              <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieDetails>
                  {movie.description} · {movie.year}
                </MovieDetails>
              </MovieInfo>
            </MovieCard>
          ))}
          {filteredMovies.length === 0 && <NoResult>검색 결과가 없습니다.</NoResult>}
        </ScrollableContent>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MovieSearch;


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${lightTheme.fontGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${lightTheme.fontWhite};
  width: 22rem;
  height: 37rem; 
  border-radius: 0.3rem;  
  display: flex;
  flex-direction: column;
  box-shadow: ${lightTheme.defaulBoxShadow};
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.3rem; 
  border-bottom: 0.1rem solid ${lightTheme.fontGray}; 
  font-size: 0.9rem;
  font-weight: ${lightTheme.fontWeightBold};
`;

const MovieTitles = styled.span`
  color: ${lightTheme.fontBlack};
  font-family: ${lightTheme.fontSuitRegular}
`;

const ItemCount = styled.span`
  color: ${lightTheme.fontBlack};
  font-size: 0.8rem;
  margin-left: auto;
  margin-right: 1.3rem; 
  font-family: ${lightTheme.fontSuitRegular}
`;

const AddButton = styled.span`
  margin-left: 0.6rem; 
  padding: 0.4rem 0.6rem; 
  font-size: 0.8rem; 
  color: ${(props) => (props.disabled ? lightTheme.fontGray :lightTheme.fontPink)};
  background-color: transparent;
  border: none;
  border-radius: 0.3rem; 
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: ${lightTheme.fontWeightBold};

  &:hover {
    text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${lightTheme.fontBlack};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 1.2rem 0; 
`;

const SearchInput = styled.input`
  width: 90%;
  max-width: 20rem; 
  padding: 0.6rem 2.5rem 0.6rem 0.9rem; 
  border: 0.1rem solid ${lightTheme.fontGray}; 
  border-radius:   0.3rem; 
  font-size: 0.9rem; 
  outline: none;

  &::placeholder {
    color: ${lightTheme.fontGray};
  }
`;

const ScrollableContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 0.6rem;

  ::-webkit-scrollbar {
    width: 0.5rem; 
  }

  ::-webkit-scrollbar-thumb {
    background: ${lightTheme.fontGray};
    border-radius: 0.3rem; 
  }

  ::-webkit-scrollbar-track {
    background: ${lightTheme.fontWhite};
  }
`;

const MovieCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem; 
  border-bottom: 0.1em solid ${lightTheme.fontGray}; 
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 0.6rem;
`;

const MovieImage = styled.img`
  width: 3rem; 
  height: 4rem; 
  object-fit: cover;
  border-radius: 0.3125rem; 
`;

const MovieInfo = styled.div`
  margin-left: 0.6rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MovieTitle = styled.div`
  font-size: 0.9rem; 
  font-weight: ${lightTheme.fontWeightBold};
  font-family: ${lightTheme.fontSuitBold}
`;

const MovieDetails = styled.div`
  font-size: 0.7rem; 
  color: ${lightTheme.fontGray};
  font-family: ${lightTheme.fontSuitRegular}
`;

const NoResult = styled.div`
  text-align: center;
  margin-top: 1.25rem;
  color: ${lightTheme.fontGray};
`;
