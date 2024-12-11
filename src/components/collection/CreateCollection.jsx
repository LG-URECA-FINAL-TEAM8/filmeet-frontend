import styled from "styled-components";
import MovieSearchModal from "../common/modal/MovieSearchModal";
import useCollectionsStore from "../../store/collections/useCollectionsStore";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const CollectionsLabel = {
  NewCollection: "새 컬렉션",
  Create: "만들기",
  CollectionTitlePlaceholder: "컬렉션 제목",
  CollectionDescriptionPlaceholder: "설명을 입력하기..",
  Movies: "작품들",
  Edit: "수정하기",
  RemoveSelected: "개 제거",
  AddMovie: "작품 추가",
  Cancel: "취소",
};

const CreateCollection = () => {
  const {
    title,
    description,
    selectedMovies,
    isEditing,
    moviesToRemove,
    isModalOpen,
    openModal,
    closeModal,
    setTitle,
    setDescription,
    addMovies,
    toggleMovieToRemove,
    removeSelectedMovies,
    enableEditMode,
    disableEditMode,
    resetFields,
    addCollection,
    confirmTempSelectedMovies,
  } = useCollectionsStore();

  const location = useLocation();

  // 페이지 렌더링 시 상태 초기화
  useEffect(() => {
    if (location.pathname === "/mypage/collections/create") {
      resetFields();
    }
  }, [location, resetFields]);

  const handleSaveCollection = () => {
    if (title.trim()) {
      addCollection({
        id: Date.now(),
        name: title,
        description,
        movies: selectedMovies,
      });
      resetFields();
    }
  };

  const handleCancelEdit = () => {
    disableEditMode();
  };

  const handleRemoveSelectedMovies = () => {
    if (moviesToRemove.length === 0) {
      return;
    }
    removeSelectedMovies();
  };

  const hasContent = title.trim() !== "" || description.trim() !== "";

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Header>{CollectionsLabel.NewCollection}</S.Header>
        <S.SaveButton hasContent={hasContent} onClick={handleSaveCollection}>
          {CollectionsLabel.Create}
        </S.SaveButton>
      </S.HeaderContainer>
      <S.InputContainer>
        <S.InputBox>
          <S.Input
            type="text"
            placeholder={CollectionsLabel.CollectionTitlePlaceholder}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.InputBox>
        <S.InputBox>
          <S.Textarea
            placeholder={CollectionsLabel.CollectionDescriptionPlaceholder}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </S.InputBox>
      </S.InputContainer>
      <S.Section>
        <S.SectionHeader>
          <span>{CollectionsLabel.Movies}</span>
          {selectedMovies.length > 0 &&
            (isEditing ? (
              <S.ActionButtons>
                <S.CancelButton onClick={handleCancelEdit}>
                  {CollectionsLabel.Cancel}
                </S.CancelButton>
                <S.RemoveButton
                  onClick={handleRemoveSelectedMovies}
                  disabled={moviesToRemove.length === 0}
                >
                  {moviesToRemove.length}
                  {CollectionsLabel.RemoveSelected}
                </S.RemoveButton>
              </S.ActionButtons>
            ) : (
              <S.EditButton onClick={enableEditMode}>
                {CollectionsLabel.Edit}
              </S.EditButton>
            ))}
        </S.SectionHeader>
        <S.MoviesGrid>
          <S.AddCard onClick={openModal}>
            <S.PlusSign>+</S.PlusSign>
            <S.AddText>{CollectionsLabel.AddMovie}</S.AddText>
          </S.AddCard>
          {selectedMovies.map((movie) => (
            <S.MovieThumbnail
              key={movie.id}
              isSelected={moviesToRemove.includes(movie.id)}
            >
              <S.ThumbnailImage src={movie.image} alt={movie.title} />
              <S.ThumbnailTitle>{movie.title}</S.ThumbnailTitle>
              {isEditing && (
                <S.RemoveIcon
                  isSelected={moviesToRemove.includes(movie.id)}
                  onClick={() => toggleMovieToRemove(movie.id)} 
                >
                  ⨉
                </S.RemoveIcon>
              )}
            </S.MovieThumbnail>
          ))}
        </S.MoviesGrid>
      </S.Section>
      {isModalOpen && (
        <MovieSearchModal
          onAddMovies={(movies) => {
            addMovies(movies);
            confirmTempSelectedMovies();
            closeModal();
          }}
        />
      )}
    </S.Container>
  );
};

export default CreateCollection;

const S = {
  Container: styled.div`
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;
    padding: 1.25rem 0 1.25rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `,

  HeaderContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Header: styled.h1`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.6rem;
  `,

  SaveButton: styled.button`
    padding: 0.3rem 0.9rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) =>
      props.hasContent ? props.theme.color.fontPink : props.theme.color.collectionColor};
    background-color: transparent;
    border: 0.1rem solid ${(props) => props.theme.color.collectionColor};
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  `,

  InputBox: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
  `,

  Input: styled.input`
    padding: 0.4rem 0 1.2rem;
    border: none;
    border-bottom: 0.1rem solid ${(props) => props.theme.color.collectionColor};
    outline: none;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.color.collectionColor};
    }
  `,

  Textarea: styled.textarea`
    padding: 0.4rem 0 7rem;
    border: none;
    border-bottom: 0.1rem solid ${(props) => props.theme.color.collectionColor};
    outline: none;
    resize: none;
    height: 3.8rem;
    line-height: 1;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.color.collectionColor};
    }
  `,

  Section: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,

  SectionHeader: styled.div`
    display: flex;
    justify-content: space-between;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.4rem;
    color: ${(props) => props.theme.color.fontBlack};
  `,

  MoviesGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6.1rem, 1fr));
    gap: 0.6rem;
    margin-top: 1.5rem;
  `,

  AddCard: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6.25rem;
    height: 8.9rem;
    margin: 0;
    border-radius: 0.3rem;
    border: 0.1rem solid ${(props) => props.theme.color.collectionColor};
    background-color: ${(props) => props.theme.color.commentColor};
    color: ${(props) => props.theme.color.collectionColor};
    text-align: center;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    cursor: pointer;
  `,

  PlusSign: styled.div`
    font-size: 3rem;
    color: ${(props) => props.theme.color.collectionColor};
  `,

  AddText: styled.div`
    margin-top: 0.3rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.collectionColor};
  `,

  MovieThumbnail: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 6.25rem;
    margin: 0 auto;
    border-radius: 0.3rem;
    overflow: hidden;
    text-align: center;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  ThumbnailImage: styled.img`
    width: 100%;
    height: 8.9rem;
    object-fit: cover;
    border-radius: 0.3rem;
  `,

  ThumbnailTitle: styled.div`
    margin-top: 0.4rem;
    width: 100%;
    font-size: 0.9rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontBlack};
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  RemoveIcon: styled.div`
    position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  font-size: 1rem;
  color: ${(props) =>
    props.isSelected ? props.theme.color.fontPink : props.theme.color.fontWhite}; /* 선택 여부에 따라 색상 변경 */
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.color.fontPink}; /* Hover 시 핑크 */
  }
  `,

  EditButton: styled.button`
    border: none;
    background: none;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontPink};
    cursor: pointer;
  `,

  RemoveButton: styled.button`
    border: none;
    background: none;
    font-size: 0.8rem;
    color: ${(props) =>
    props.disabled
      ? props.theme.color.collectionColor
      : props.theme.color.fontPink};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    cursor: pointer;
  `,
  ActionButtons: styled.div`
  display: flex;
  align-items: center;
`,

CancelButton: styled.button`
  border: none;
  background: none;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.fontPink};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`,
};
