import RankButton from '../../components/worldcup/RankButton';
import ResultCard from '../../components/worldcup/ResultCard';
import ResultFooter from '../../components/worldcup/ResultFooter';
import useWorldcupStore from '../../store/worldcup/worldcupStore';
import { CongratsText, WinnerPageWrapper, WinnerTitle } from '../../styles/worldcup/worldcup';

const WorldcupFinishPage = () => {
  const { winnerMovie, gameId } = useWorldcupStore(); // 우승 영화 정보 가져오기

  // 우승 영화가 없을 경우 예외 처리
  if (!winnerMovie) {
    return null;
  }

  return (
    <WinnerPageWrapper>
      {/* <CongratsText>🎉 축하합니다! 최고의 영화가 선정되었습니다 🎉</CongratsText> */}
      <WinnerTitle>{winnerMovie.title}</WinnerTitle>
      <ResultCard
        image={winnerMovie.posterUrl}
        title={winnerMovie.title}
        rating={winnerMovie.ratingCounts || 0}
        likes={winnerMovie.likeCounts || 0}
        comments={winnerMovie.commentCounts || 0}
        movieId={winnerMovie.movieId}
      />
      <ResultFooter gameId={gameId} />
      <RankButton />
    </WinnerPageWrapper>
  );
};

export default WorldcupFinishPage;
