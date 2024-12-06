import styled from 'styled-components';
import { IcLikeFilled24, IcReplyFilled24 } from '../../../assets/svg';

function HotFeed({ reviews }) {
  console.log(reviews);
  return (
    <S.FeedContainer>
      {reviews.slice(0, 3).map((review) => (
        <S.FeedItem key={review.id}>
          <S.FeedUserSection>
            <span className="user__span">{review.nickname}</span>
            <span className="user__span">{review.popularityScore}</span>
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
            <span>
              <IcLikeFilled24 width={'1rem'} height={'1rem'} /> {review.likeCounts}
            </span>
            <span>
              <IcReplyFilled24 width={'1rem'} height={'1rem'} /> {review.commentCounts}
            </span>
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
      color: ${({ theme }) => theme.color.fontGray};
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
    font-family: ${({ theme }) => theme.font.fontSuitRegular};
    color: ${({ theme }) => theme.color.fontBlack};
  `,

  FeedStats: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 1rem;
    gap: 1rem;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.fontSuitRegular};
    color: ${({ theme }) => theme.color.fontBlack};
  `,
};

export default HotFeed;
