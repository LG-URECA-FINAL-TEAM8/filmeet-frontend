import React, { useState } from "react";
import styled from "styled-components";
import useCollectionsStore from "../../store/collections/useCollectionsStore";
import { lightTheme } from "../../styles/themes";
import MovieSearchModal from "./MovieSearchModal";
import { useNavigate } from "react-router-dom";


const CreateCollection = () => {
  const { addCollection } = useCollectionsStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState([]); 
  const navigate = useNavigate();

  const handleSave = () => {
    if (title.trim()) {
      addCollection({
        id: Date.now(),
        name: title,
        description,
        movies: selectedMovies,
        image: selectedMovies[0]?.image || "", 
      });
      setTitle("");
      setDescription("");
      setSelectedMovies([]);
      navigate("/collections");  
    }
  };

  const handleAddMovies = (movies) => {
    setSelectedMovies((prev) => {
      const uniqueMovies = movies.filter(
        (movie) => !prev.some((prevMovie) => prevMovie.id === movie.id)
      );
      return [...prev, ...uniqueMovies];
    });
    setIsModalOpen(false);
  };

  const labels = {
    header: "새 컬렉션",
    saveButton: "만들기",
    titlePlaceholder: "컬렉션 제목",
    descriptionPlaceholder: "설명을 입력하기..",
    items: "작품들",
    addItem: "작품 추가",
  };

  return (
    <Container>
      <HeaderContainer>
        <Header>{labels.header}</Header>
        <SaveButton onClick={handleSave}>{labels.saveButton}</SaveButton>
      </HeaderContainer>
      <InputContainer>
        <InputBox>
          <Input
            type="text"
            placeholder={labels.titlePlaceholder}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <Textarea
            type="text"
            placeholder={labels.descriptionPlaceholder}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputBox>
      </InputContainer>
      <Section>
        <SectionHeader>
          <span>{labels.items}</span>
          <span>({selectedMovies.length}/1000)</span>
        </SectionHeader>
        <MoviesGrid>
          <AddCard onClick={() => setIsModalOpen(true)}>
            <PlusSign>+</PlusSign>
            <AddText>{labels.addItem}</AddText>
          </AddCard>
          {selectedMovies.map((movie) => (
            <MovieThumbnail key={movie.id}>
              <ThumbnailImage src={movie.image} alt={movie.title} />
              <ThumbnailTitle>{movie.title}</ThumbnailTitle>
            </MovieThumbnail>
          ))}
        </MoviesGrid>
      </Section>
      {isModalOpen && (
        <MovieSearchModal
          onClose={() => setIsModalOpen(false)}
          onAddMovies={handleAddMovies}
        />
      )}
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
  padding: 0.6rem 1.3rem;
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
  padding: 0.6rem 0;
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
  padding: 0.6rem 0;
  border: none;
  border-bottom: 0.1rem solid ${lightTheme.fontGray};
  outline: none;
  resize: none;
  height: 6rem;
  line-height: 1;
  font-family: ${lightTheme.fontSuitRegular};
  &::placeholder {
    color: ${lightTheme.fontGray};
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.5rem;
  margin-top: 1rem;
`;

const AddCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 110px;
  border: 0.2rem dashed ${lightTheme.fontGray};
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
`;

const PlusSign = styled.div`
  font-size: 2rem;
  color: ${lightTheme.fontGray};
`;

const AddText = styled.div`
  font-size: 0.8rem;
  color: ${lightTheme.fontGray};
  margin-top: 0.5rem;
`;

const MovieThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ThumbnailImage = styled.img`
  width: 80px;
  height: 110px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const ThumbnailTitle = styled.div`
  margin-top: 0.3rem;
  font-size: 0.8rem;
  font-weight: ${lightTheme.fontWeightMedium};
  color: ${lightTheme.fontBlack};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
