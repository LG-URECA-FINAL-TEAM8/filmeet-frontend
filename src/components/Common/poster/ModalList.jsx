import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../../styles/themes";


const ListPoster = ({ movies, onMovieSelect }) => {
  return (
    <ListContainer>
      {movies.map((movie) => (
        <ListItem
          key={movie.id}
          onClick={() => onMovieSelect(movie)}
          isSelected={movie.isSelected}
        >
          <Checkbox isSelected={movie.isSelected} />
          <ListImage
            src={movie.image || "https://via.placeholder.com/300x400"}
            alt={movie.title || "제목 없음"}
          />
          <ListDetails>
            <ListTitle>{movie.title || "제목 없음"}</ListTitle>
            <ListSubTitle>{movie.year || "년도 없음"}</ListSubTitle>
          </ListDetails>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ListPoster;


const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${(props) =>
    props.isSelected ? lightTheme.lightPink : "transparent"};
  cursor: pointer;
  border: 1px solid ${lightTheme.borderGray};
  border-radius: 8px;

  &:hover {
    background: ${lightTheme.lightGray};
  }
`;

const Checkbox = styled.div`
  position: relative; 
  width: 24px;
  height: 24px;
  border: 1px solid
    ${(props) =>
      props.isSelected ? lightTheme.fontPink : lightTheme.fontGray}; 
  background: ${(props) =>
    props.isSelected ? lightTheme.fontPink : "transparent"}; 
  border-radius: 50%;

  &::after {
    content: ${(props) => (props.isSelected ? '"✓"' : '""')}; 
    display: block; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -40%);
    font-size: 10px; 
    color: white; 
    font-weight: bold; 
  }
`;

const ListImage = styled.img`
  width: 60px;
  height: 100px;
  object-fit: cover;
`;

const ListDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수직 중앙 정렬 */
  margin-top: 0.5rem;
  width: 100%; 
  border-bottom: 1px solid ${lightTheme.fontGray}; 
  padding: 2.2rem 0; 

`;

const ListTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.4rem; 
`;

const ListSubTitle = styled.div`
  font-size: 0.8rem;
  color: ${lightTheme.fontGray};
`;