import React, { useState } from "react";
import styled from "styled-components";
import MovieSearchModal from "../Common/modal/MovieSearchModal";
import { lightTheme } from "../../styles/themes";
import useCollectionsStore from "../../store/collections/useCollectionsStore";

const CollectionsLabel = {
  NewCollection: "새 컬렉션",
  Create: "만들기",
  CollectionTitlePlaceholder: "컬렉션 제목",
  CollectionDescriptionPlaceholder: "설명을 입력하기..",
  Movies: "작품들",
  Edit: "수정하기",
  RemoveSelected: "개 제거",
  AddMovie: "작품 추가",
};

const CreateCollection = () => {
  const { addCollection, openModal, isModalOpen } = useCollectionsStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [moviesToRemove, setMoviesToRemove] = useState([]);

  const handleAddMovies = (movies) => {
    setSelectedMovies((prevMovies) => [...prevMovies, ...movies]);
  };

  const toggleMovieToRemove = (movieId) => {
    setMoviesToRemove((prevMovies) =>
      prevMovies.includes(movieId)
        ? prevMovies.filter((id) => id !== movieId)
        : [...prevMovies, movieId]
    );
  };

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

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setSelectedMovies([]);
  };

  const enableEditMode = () => setIsEditing(true);

  const removeSelectedMovies = () => {
    setSelectedMovies((prevMovies) =>
      prevMovies.filter((movie) => !moviesToRemove.includes(movie.id))
    );
    setMoviesToRemove([]);
    setIsEditing(false);
  };

  return (
    <Container>
      <HeaderContainer>
        <Header>{CollectionsLabel.NewCollection}</Header>
        <SaveButton onClick={handleSaveCollection}>
          {CollectionsLabel.Create}
        </SaveButton>
      </HeaderContainer>
      <InputContainer>
        <InputBox>
          <Input
            type="text"
            placeholder={CollectionsLabel.CollectionTitlePlaceholder}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <Textarea
            placeholder={CollectionsLabel.CollectionDescriptionPlaceholder}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputBox>
      </InputContainer>
      <Section>
        <SectionHeader>
          <span>{CollectionsLabel.Movies}</span>
          {selectedMovies.length > 0 &&
            (isEditing ? (
              <RemoveButton onClick={removeSelectedMovies}>
                {moviesToRemove.length}
                {CollectionsLabel.RemoveSelected}
              </RemoveButton>
            ) : (
              <EditButton onClick={enableEditMode}>
                {CollectionsLabel.Edit}
              </EditButton>
            ))}
        </SectionHeader>
        <MoviesGrid>
          <AddCard onClick={openModal}>
            <PlusSign>+</PlusSign>
            <AddText>{CollectionsLabel.AddMovie}</AddText>
          </AddCard>
          {selectedMovies.map((movie) => (
            <MovieThumbnail
              key={movie.id}
              isSelected={moviesToRemove.includes(movie.id)}
            >
              <ThumbnailImage src={movie.image} alt={movie.title} />
              <ThumbnailTitle>{movie.title}</ThumbnailTitle>
              {isEditing && (
                <RemoveIcon
                  isSelected={moviesToRemove.includes(movie.id)}
                  onClick={() => toggleMovieToRemove(movie.id)}
                >
                  ⨉
                </RemoveIcon>
              )}
            </MovieThumbnail>
          ))}
        </MoviesGrid>
      </Section>
      {isModalOpen && <MovieSearchModal onAddMovies={handleAddMovies} />}
    </Container>
  );
};

export default CreateCollection;

const Container = styled.div`
  width: 100%;
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: ${lightTheme.fontWeightBold};
  font-family: ${lightTheme.fontSuitBold}; 
`;

const SaveButton = styled.button`
  padding: 0.3rem 0.9rem; 
  font-size: 1rem;
  color: ${lightTheme.fontGray};
  background-color: transparent;
  border: 0.1rem solid ${lightTheme.fontGray}; 
  border-radius: 0.3rem; 
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: ${lightTheme.fontSuitBold}; 
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.4rem 0; 
  border: none;
  border-bottom: 0.1rem solid ${lightTheme.fontGray}; 
  outline: none;
  font-family: ${lightTheme.fontSuitRegular}; 
  &::placeholder {
    color: ${lightTheme.fontGray};
  }
`;

const Textarea = styled.textarea`
  font-size: 1rem;
  padding: 0.4rem 0; 
  border: none;
  border-bottom: 0.1rem solid ${lightTheme.fontGray}; 
  outline: none;
  resize: none;
  height: 3.8rem; 
  line-height: 1;
  font-family: ${lightTheme.fontSuitRegular}; /
  &::placeholder {
    color: ${lightTheme.fontGray};
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem; 
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: ${lightTheme.fontWeightBold};
  color: ${lightTheme.fontBlack};
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
  gap: 0.3rem; 
  margin-top: 0.6rem; 
`;

const AddCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 6rem; 
  border-radius: 0.3rem; 
  cursor: pointer;
  text-align: center;
  font-family: ${lightTheme.fontSuitRegular}; 
`;

const PlusSign = styled.div`
  font-size: 2rem;
  color: ${lightTheme.fontGray};
`;

const AddText = styled.div`
  font-size: 0.8rem;
  color: ${lightTheme.fontGray};
  margin-top: 0.3rem; 
  font-family: ${lightTheme.fontSuitRegular}; 
`;

const MovieThumbnail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.isSelected ? lightTheme.lightPink : "transparent"};
  border: ${(props) =>
    props.isSelected ? `0.1rem solid ${lightTheme.fontPink}` : "none"};
  border-radius: 0.3rem;
  padding: 0.2rem; 
`;

const ThumbnailImage = styled.img`
  width: 5rem; 
  height: 6.8rem; 
  object-fit: cover;
  border-radius: 0.3rem;
`;

const ThumbnailTitle = styled.div`
  margin-top: 0.2rem; 
  font-size: 0.8rem;
  font-weight: ${lightTheme.fontWeightMedium};
  color: ${lightTheme.fontBlack};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  max-width: 5rem; 
`;

const RemoveIcon = styled.div`
  position: absolute;
  top: 0.2rem; 
  right: 0.2rem; 
  font-size: 1rem;
  color: ${(props) =>
    props.isSelected ? lightTheme.fontPink : lightTheme.fontGray};
  cursor: pointer;

  &:hover {
    color: ${lightTheme.fontPink};
  }
`;

const EditButton = styled.button`
  font-size: 0.8rem;
  color: ${lightTheme.fontPink};
  border: none;
  background: none;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  font-size: 0.8rem;
  color: ${lightTheme.fontPink};
  border: none;
  background: none;
  cursor: pointer;
`;
