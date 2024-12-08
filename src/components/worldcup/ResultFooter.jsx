import styled from "styled-components";
import SmallCard from "./ResultSmallCard";


const ResultFooter = () => {
  const footerText = "월드컵 결과에 따른 추천";
  
  // 카드 데이터
  const recommendedMovies = [
    { id: 1, title: "영화 1", image: "https://via.placeholder.com/160x190" },
    { id: 2, title: "영화 2", image: "https://via.placeholder.com/160x190" },
    { id: 3, title: "영화 3", image: "https://via.placeholder.com/160x190" },
    { id: 4, title: "영화 4", image: "https://via.placeholder.com/160x190" },
    { id: 5, title: "영화 5", image: "https://via.placeholder.com/160x190" },
  ];

  return (
    <S.Footer>
      <S.FooterText>{footerText}</S.FooterText>
      <S.CardGrid>
        {recommendedMovies.map((movie) => (
          <SmallCard key={movie.id} title={movie.title} image={movie.image} />
        ))}
      </S.CardGrid>
    </S.Footer>
  );
};

export default ResultFooter;

const S = {
  Footer: styled.footer`
    width: 100%;
    height: 18.75rem;
    text-align: center;
    background-color: ${(props) => props.theme.color.commentColor};
    color: ${(props) => props.theme.color.fontPink};
    padding: 1rem 0 0 0;
  `,

  FooterText: styled.div`
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  CardGrid: styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  `,
};
