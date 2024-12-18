
import styled from 'styled-components';
import SvgSearch from '../assets/svg/Search';


const Searchbar = () => (
  <S.SearchWrapper>
    <S.SearchIcon />
    <S.SearchInput placeholder="콘텐츠,인물,컬렉션 유저를 검색해보세요." />
  </S.SearchWrapper>
);

export default Searchbar;

const S = {
    SearchWrapper: styled.label`
      display: flex;
      align-items: center;
      width: 50%;
      height: 2.4rem;
      background-color: ${(props) => props.theme.color.commentColor};
      margin: 0 0 0.1rem;
      padding: 0.62rem 0.75rem 0.62rem 2.5rem;
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
      width: 1.rem;
      height: 1.1rem;
      color: ${(props) => props.theme.color.fontGray};
    `
  };