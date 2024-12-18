import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SvgSearch from '../../../assets/svg/Search';
import { useSearchMovies } from '../../../apis/myPage/collection/queries';
import useSearchBarStore from '../../../store/searchbar/useSearchBarStore';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { data } = useSearchMovies(keyword);
  const { isModalOpen, setModalOpen } = useSearchBarStore();
  const navigate = useNavigate();
  const searchWrapperRef = useRef(null);

  useEffect(() => {
    if (data) {
      setSearchResults(data?.data?.content);
    }
  }, [data]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
        setModalOpen(false);
        setKeyword('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setModalOpen]);

  const handleInputFocus = () => {
    if (keyword.trim()) {
      setModalOpen(true);
    }
  };

  const handleItemClick = (movieId) => {
    setTimeout(() => {
      setModalOpen(false);
      setKeyword('');
    }, 0);
    navigate(`/moviedetail/${movieId}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim()) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  return (
    <S.SearchWrapper ref={searchWrapperRef}>
      <S.SearchIcon />
      <S.SearchInput
        placeholder="콘텐츠, 인물, 컬렉션 유저를 검색해보세요."
        value={keyword}
        onChange={handleInputChange}
        onClick={handleInputFocus}
      />
      {isModalOpen && searchResults.length > 0 && (
        <S.ItemWrapper>
          {searchResults.map((result, index) => (
            <S.SearchItem key={index} onClick={() => handleItemClick(result?.movieId)}>
              <span>{result.title}</span>
            </S.SearchItem>
          ))}
        </S.ItemWrapper>
      )}
    </S.SearchWrapper>
  );
};

export default Searchbar;

const S = {
  SearchWrapper: styled.label`
    position: relative;
    display: flex;
    align-items: center;
    width: 19rem;
    height: 2.4rem;
    background-color: ${(props) => props.theme.color.commentColor};
    margin: 0 0 0.1rem;
    padding: 0.62rem 0.75rem 0.62rem 2.5rem;
    border-radius: 0.37rem;
    box-sizing: border-box;
    cursor: pointer;
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
      font-size: 0.9rem;
      color: ${(props) => props.theme.color.fontGray};
    }
  `,
  SearchIcon: styled(SvgSearch)`
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    width: 1rem;
    height: 1.1rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  ItemWrapper: styled.div`
    position: absolute;
    top: 105%;
    left: 0;
    width: 100%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme.box.defaultBoxShadow};
    border: ${(props) => props.theme.box.defaultBorder};
    padding: 0.5rem 0;
    z-index: 10;
  `,
  SearchItem: styled.button`
    width: 100%;
    padding: 0.75rem 1rem;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
};
