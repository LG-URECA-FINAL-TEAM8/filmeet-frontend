import styled from 'styled-components';
import SvgIcLikeFilled24 from '../../../assets/svg/IcLikeFilled24';
import SvgIcReplyFilled24 from '../../../assets/svg/IcReplyFilled24';
import { useNavigate } from 'react-router-dom';
import { createProfileClickHandler } from '../../../utils/ratings/navigationHandlers';
import { useUserComments } from '../../../apis/myPage/comment/queries';
import { useParams } from 'react-router-dom';
import Loading from '../../common/loading/Loading';

const Comment = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const handleProfileClick = createProfileClickHandler(navigate, userId);
  const { data, isLoading, error } = useUserComments(userId);

  const comments = data?.data?.content || [];

  const handleCommentClick = (commentId) => {
    navigate(`/mypage/comments/detail/${commentId}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>오류가 발생했습니다: {error.message}</div>;
  }

  return (
    <>
      {comments.map((item) => (
        <S.Card key={item.reviewId}>
          <S.ProfileSection onClick={handleProfileClick}>
            <S.ProfileImage src={item.profileImage} alt={`${item.nickname}`} />
            <S.Nickname>{item.nickname}</S.Nickname>
          </S.ProfileSection>
          <S.MainContent>
            <S.ImageWrapper>
              <S.Image src={item.posterUrl} alt={item.movieTitle} />
            </S.ImageWrapper>
            <S.Content>
              <S.Title>{item.movieTitle}</S.Title>
              <S.GenreYear>{item.releaseDate}</S.GenreYear>
              <S.Comments onClick={() => handleCommentClick(item.reviewId)}>
                {item.reviewContent}
              </S.Comments>
            </S.Content>
            <S.Rating>★ {item.ratingScore ? item.ratingScore.toFixed(1) : '0'}</S.Rating>
          </S.MainContent>
          <S.FeedStats>
            <S.Stat>
              <SvgIcLikeFilled24 width={'1rem'} height={'1rem'} /> {item.likeCounts}
            </S.Stat>
            <S.Stat>
              <SvgIcReplyFilled24 width={'1rem'} height={'1rem'} /> {item.commentCounts}
            </S.Stat>
          </S.FeedStats>
          <S.Like>
            <S.LikeButton>좋아요</S.LikeButton>
          </S.Like>
        </S.Card>
      ))}
    </>
  );
};

export default Comment;

const S = {
  Card: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 18rem;
    margin: 0rem 0 1rem 0;
    padding: 1rem;
    border-radius: 0.3rem;
    background-color: ${(props) => props.theme.color.commentColor};
    box-sizing: border-box;
  `,
  ProfileSection: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `,
  ProfileImage: styled.img`
    width: 1.8rem;
    height: 1.8rem;
    margin: 0 0.5rem 0 0;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  `,
  Nickname: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    cursor: pointer;
  `,
  MainContent: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-top: ${(props) => props.theme.font.borderDefault};
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,
  ImageWrapper: styled.div`
    margin-right: 0.7rem;
  `,
  Image: styled.img`
    width: 5.6rem;
    height: 7.5rem;
    border-radius: 0.5rem;
    object-fit: cover;
    margin: 0.5rem 0 0.7rem 0;
  `,
  Content: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  Title: styled.h3`
    margin: 0.5rem 0 0.3rem 0;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1rem;
  `,
  GenreYear: styled.p`
    margin: 0 0 0.5rem 0;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  Comments: styled.p`
    margin-top: 0.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    cursor: pointer;
  `,
  Rating: styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontPink};
    border-radius: 50%;
  `,
  FeedStats: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 11px 0;
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,
  Stat: styled.span`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  Like: styled.div`
    border: none;
    margin: 0 -0.2rem;
    padding: 0.6rem 0;
  `,

  LikeButton: styled.button`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    background-color: ${(props) => (props.liked ? props.theme.color.fontPink : 'transparent')};
    color: ${(props) => (props.liked ? props.theme.color.fontWhite : props.theme.color.fontPink)};
    border: none;
    border-radius: 0.3rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  `,
};
