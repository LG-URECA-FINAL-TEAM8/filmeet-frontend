import TopHeader from '../../components/Common/back/TopHeader';
import MovieMoreComment from '../../components/features/movieDetail/MovieMoreComment';

import { movieDetailData } from '../../data/moviedetail';
import { CardContainer, CommentPageContainer } from '../../styles/comment/comment';

const MovieCommentDetail = () => {
  const comments = movieDetailData.movieReviewsResponses.content;

  return (
    <CommentPageContainer>
      <TopHeader title="코멘트" />
      <CardContainer>
        <MovieMoreComment comments={comments} />
      </CardContainer>
    </CommentPageContainer>
  );
};

export default MovieCommentDetail;
