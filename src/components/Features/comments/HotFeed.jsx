import styled from 'styled-components';
import { IcLikeFilled24, IcReplyFilled24 } from '../../../assets/svg';

const sampleData = [
  {
    id: 1,
    userName: 'Alice',
    rating: 4.5,
    image: 'https://via.placeholder.com/150',
    title: 'Delicious Burger',
    comment: 'The best burger I’ve ever had! The best burger I’ve ever had!',
    likes: 120,
    comments: 25,
  },
  {
    id: 2,
    userName: 'Bob',
    rating: 3.8,
    image: 'https://via.placeholder.com/150',
    title: 'Refreshing Drinks',
    comment: 'Loved the smoothies, especially the strawberry one.',
    likes: 85,
    comments: 10,
  },
  {
    id: 3,
    userName: 'Charlie',
    rating: 5,
    image: 'https://via.placeholder.com/150',
    title: 'Tasty Fries',
    comment: 'Crispy and perfectly salted fries. A must-try!',
    likes: 200,
    comments: 45,
  },
];

function HotFeed() {
  return (
    <S.FeedContainer>
      {sampleData.map((feed) => (
        <S.FeedItem key={feed.id}>
          <S.FeedUserSection>
            <span className="user__span">{feed.userName}</span>
            <span className="user__span">{feed.rating}</span>
          </S.FeedUserSection>
          <S.FeedMainSection>
            <S.ImageItem>
              <img src={feed.image} alt={feed.title} />
            </S.ImageItem>
            <S.CommentItem>
              <p>{feed.title}</p>
              <p>{feed.comment}</p>
            </S.CommentItem>
          </S.FeedMainSection>
          <S.FeedStats>
            <span>
              <IcLikeFilled24 width={'1rem'} height={'1rem'} /> {feed.likes}
            </span>
            <span>
              <IcReplyFilled24 width={'1rem'} height={'1rem'} /> {feed.comments}
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
    height: auto;
  `,
  ImageItem: styled.div`
    margin-top: 1rem;
    width: 25%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
