import styled from 'styled-components';
import SvgIcLikeFilled24 from '../../../assets/svg/IcLikeFilled24';
import SvgIcReplyFilled24 from '../../../assets/svg/IcReplyFilled24';
import { useNavigate } from 'react-router-dom';

function HotFeed({ reviews }) {
  const navigate = useNavigate();
  const handleNavigate = (reviewId) => {
    navigate(`/mypage/comments/detail/${reviewId}`);
  };
  return (
    <S.FeedContainer>
      {reviews.slice(0, 3).map((review) => (
        <S.FeedItem key={review.id} onClick={() => handleNavigate(review?.reviewId)}>
          <S.FeedUserSection>
            <span className="user__span">{review.nickname}</span>
            <span className="user__score">★ {review.ratingScore || '0'}</span>
          </S.FeedUserSection>
          <S.FeedMainSection>
            <S.ImageItem
              style={{
                backgroundImage: `url(${review.posterUrl})`,
              }}
            />
            <S.CommentItem>
              <p>{review.title}</p>
              <p>{review.content}</p>
            </S.CommentItem>
          </S.FeedMainSection>
          <S.FeedStats>
            <SvgIcLikeFilled24 width={'1rem'} height={'1rem'} /> {review.likeCounts}
            <SvgIcReplyFilled24 width={'1rem'} height={'1rem'} /> {review.commentCounts}
          </S.FeedStats>
        </S.FeedItem>
      ))}
    </S.FeedContainer>
  );
}

const S = {
  FeedContainer: styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  `,

  FeedItem: styled.div`
    width: 100%;
    height: auto;
    padding: 1rem;
    max-height: 12rem;
    gap: 1rem;
    border: ${({ theme }) => theme.box.defaultBorder};
    cursor: pointer;
  `,

  FeedUserSection: styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    max-height: 1.25rem;
    .user__span {
      font-size: 1rem;
      font-family: ${({ theme }) => theme.font.fontSuitRegular};
      color: ${({ theme }) => theme.color.fontBlack};
    }
    .user__score {
      font-size: 1rem;
      font-family: ${({ theme }) => theme.font.fontSuitRegular};
      color: ${({ theme }) => theme.color.fontPink};
    }
  `,

  FeedMainSection: styled.section`
    display: flex;
    flex-direction: row;
    height: 6rem;
  `,
  ImageItem: styled.div`
    margin-top: 1rem;
    width: 4rem;
    height: 5rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
  `,

  CommentItem: styled.div`
    margin-left: 1rem;
    margin-bottom: 1rem;
    width: 75%;
    height: auto;
    max-height: 5.5rem;
    font-size: 0.8rem;
    font-family: ${({ theme }) => theme.font.fontSuitRegular};
    color: ${({ theme }) => theme.color.fontGray};
  `,

  FeedStats: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    gap: 0.3rem;
    font-size: 0.8rem;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.fontSuitRegular};
    color: ${({ theme }) => theme.color.fontBlack};
  `,
};

export default HotFeed;
