import ReactModal from 'react-modal';
import styled from 'styled-components';
import useCollectionsStore from '../../../store/collections/useCollectionsStore';
import SvgSearch from '../../../assets/svg/Search';
import ListPoster from '../poster/ModalList';

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
    selectedMovies,
    fetchSearchMovies,
    searchResults,
    searchLoading,
  } = useCollectionsStore();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    fetchSearchMovies(e.target.value);
  };

  const handleMovieSelect = (movie) => {
    if (movie.isDisabled) return;
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
              onChange={handleSearchChange}
            />
          </S.SearchWrapper>
        </S.Header>
        <S.MovieList>
          {searchLoading ? (
            <S.EmptyMessage>검색 중...</S.EmptyMessage>
          ) : searchResults.length > 0 ? (
            <ListPoster
            movies={searchResults.map((movie) => {
              const isAlreadyAdded = selectedMovies.some(
                (selectedMovie) => selectedMovie.id === movie.id
              );
              const isSelected = tempSelectedMovies.some(
                (tempMovie) => tempMovie.id === movie.id
              );
              return {
                ...movie,
                isSelected,
                isDisabled: isAlreadyAdded,
              };
            })}
            onMovieSelect={handleMovieSelect}
            />
          ) : (
            <S.EmptyMessage>검색 결과가 없습니다.</S.EmptyMessage>
          )}
        </S.MovieList>
      </S.ModalContainer>
    </ReactModal>
  );
};

export default MovieSearchModal;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem 0',
    zIndex: 1000,
  },
  content: {
    position: '',
    width: '23.43rem',
    maxWidth: '90%',
    height: '37.5rem',
    borderRadius: '0.3rem',
    padding: '0',
    overflow: 'hidden',
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
    box-sizing: border-box;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    padding: 0.62rem 1rem 0.25rem;
  `,
  CloseButton: styled.button`
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: ${(props) => props.theme.color.fontPink};
    padding: 0.37rem;
  `,
  Header: styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 0 1.25rem;
    background-color: ${(props) => props.theme.color.lightGray};
    border-bottom: 0.06rem solid ${(props) => props.theme.color.lineColor};
  `,
  Title: styled.h2`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.25rem;
    margin: 0.12rem 0 0.75rem;
  `,
  AddButton: styled.button`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    font-weight: ${(props) => props.theme.font.fontWeightRegular};
    color: ${(props) => (props.disabled ? props.theme.color.fontGray : props.theme.color.fontPink)};
    background: none;
    border: none;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  `,
  SearchWrapper: styled.label`
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.75rem;
    background-color: ${(props) => props.theme.color.commentColor};
    margin: 0 0 0.62rem;
    padding: 0.62rem 0.75rem 0.62rem 3rem;
    border-radius: 0.37rem;
    box-sizing: border-box;
    position: relative;
  `,
  SearchInput: styled.input`
    width: 100%;
    padding: 0.5rem;
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
    left: 0.75rem;
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
  EmptyMessage: styled.div`
    text-align: center;
    margin-top: 1.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
};
