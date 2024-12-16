import styled from "styled-components";
import { useGameRankings } from "../../apis/worldcup/queries";

const WorldcupRankPage = () => {
  const { data, isLoading, error } = useGameRankings();

  if (isLoading) return <div>랭킹 데이터를 불러오는 중입니다...</div>;
  if (error) return <div>랭킹 데이터를 불러오는데 실패했습니다: {error.message}</div>;

  const rankings = data?.data || []; // API 응답 데이터

  return (
    <S.RankPageWrapper>
      <S.Title>게임 랭킹</S.Title>
      <S.RankList>
        {rankings.map((game) => (
          <S.RankItem key={game.id}>
            <S.Poster src={game.posterUrl} alt={game.title} />
            <S.GameInfo>
              <S.GameTitle>{game.rank}위: {game.title}</S.GameTitle>
              <S.GameRate>승률: {game.victoryRatio}%</S.GameRate>
              <S.GameRate>승리 비율: {game.winRate}%</S.GameRate>
            </S.GameInfo>
          </S.RankItem>
        ))}
      </S.RankList>
    </S.RankPageWrapper>
  );
};

export default WorldcupRankPage;

const S = {
  RankPageWrapper: styled.div`
    padding: 2rem;
    text-align: center;
  `,

  Title: styled.h1`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,

  RankList: styled.div`
    width: 640px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
  `,

  RankItem: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  `,

  Poster: styled.img`
    width: 100px;
    height: 140px;
    object-fit: cover;
    border-radius: 0.5rem;
  `,

  GameInfo: styled.div`
    text-align: left;

    h3 {
      margin: 0;
      font-size: 1.2rem;
    }

    p {
      margin: 0.3rem 0;
      font-size: 1rem;
    }
  `,

  GameTitle: styled.h3`
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,
  GameRate: styled.p`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
};
