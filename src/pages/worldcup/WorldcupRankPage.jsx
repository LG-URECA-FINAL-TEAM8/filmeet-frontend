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
              <h3>{game.rank}위: {game.title}</h3>
              <p>승률: {game.victoryRatio}%</p>
              <p>승리 비율: {game.winRate}%</p>
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
  `,

  RankList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
};
