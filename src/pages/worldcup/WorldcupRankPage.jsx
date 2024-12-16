import styled from "styled-components";
import { useGameRankings } from "../../apis/worldcup/queries";
import { useNavigate } from "react-router-dom";
import TopHeader from "../../components/common/back/TopHeader";

const WorldcupRankPage = () => {
  const { data, isLoading, error } = useGameRankings();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  const rankings = data?.data || [];

  const handleGameClick = (gameId) => {
    navigate(`/moviedetail/${gameId}`);
  };

  return (
    <S.RankPageWrapper>
      <TopHeader title="게임 랭킹" />
      <S.RankList>
        {rankings.map((game) => (
          <S.RankItem key={game.id} onClick={() => handleGameClick(game.id)}>
            <S.Poster src={game.posterUrl} alt={game.title} />
            <S.GameInfo>
              <S.GameTitle>
                {game.rank}위: {game.title}
              </S.GameTitle>
              <ProgressBar
                percent={game.victoryRatio}
                color="#FF6B81"
                label={`승률: ${game.victoryRatio}%`}
              />
              <ProgressBar
                percent={game.winRate}
                color="#A4A4A4"
                label={`승리 비율: ${game.winRate}%`}
              />
            </S.GameInfo>
          </S.RankItem>
        ))}
      </S.RankList>
    </S.RankPageWrapper>
  );
};

export default WorldcupRankPage;

const ProgressBar = ({ percent, color, label }) => (
  <S.ProgressBarWrapper>
    <S.ProgressBarFill percent={percent} color={color} />
    <S.ProgressText>{label}</S.ProgressText>
  </S.ProgressBarWrapper>
);

const S = {
  RankPageWrapper: styled.div`
    background-color: ${(props) => props.theme.color.fontWhite};
  `,

  Title: styled.h1`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontPink};
  `,

  RankList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 1rem auto;
    max-width: 800px;
  `,

  RankItem: styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: ${(props) => props.theme.color.fontWhite};
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  `,

  Poster: styled.img`
    width: 120px;
    height: 160px;
    object-fit: cover;
    border-radius: 0.75rem;
  `,

  GameInfo: styled.div`
    flex: 1;
    text-align: left;
  `,

  GameTitle: styled.h3`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontGray};
    margin-bottom: 1rem;
  `,

  ProgressBarWrapper: styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.color.fontWhite};
    border: 1px solid ${(props) => props.theme.color.fontGray};
    border-radius: 0.75rem;
    position: relative;
    overflow: hidden;
    height: 1.5rem;
    margin-bottom: 0.5rem;
  `,

  ProgressBarFill: styled.div.attrs((props) => ({
    style: {
      width: `${props.percent}%`,
      backgroundColor: props.color,
    },
  }))`
    height: 100%;
    transition: width 0.5s ease-in-out;
  `,

  ProgressText: styled.span`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontWhite};
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,
};
