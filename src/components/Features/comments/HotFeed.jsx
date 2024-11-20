import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

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
    <FeedContainer>
      {sampleData.map((feed) => (
        <FeedItem key={feed.id}>
          <FeedUserSection>
            <span className="user__span">{feed.userName}</span>
            <span className="user__span">{feed.rating}</span>
          </FeedUserSection>
          <FeedMainSection>
            <ImageItem>
              <img src={feed.image} alt={feed.title} />
            </ImageItem>
            <CommentItem>
              <p>{feed.title}</p>
              <p>{feed.comment}</p>
            </CommentItem>
          </FeedMainSection>
          <FeedStats>
            <span>❤️ {feed.likes}</span>
            <span>💬 {feed.comments}</span>
          </FeedStats>
        </FeedItem>
      ))}
    </FeedContainer>
  );
}

const FeedContainer = styled.div` 
  height: auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

const FeedItem = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  max-height: 12rem;
  gap: 1rem;
  border: ${lightTheme.defaultBorder};
`;

const FeedUserSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  max-height: 1.25rem;
  .user__span {
    font-size: 1rem;
    font-family: ${lightTheme.fontSuitRegular};
    color: ${lightTheme.fontGray};
  }
`;

const FeedMainSection = styled.section`
  
  display: flex;
  flex-direction: row;
  height: auto;
`;
const ImageItem = styled.div`
  margin-top: 1rem;
  width: 25%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;    
    object-fit: cover;
  }
`;

const CommentItem = styled.div`
  margin-left: 1rem;
  margin-bottom : 1rem;
  width: 75%;
  height: auto;
  max-height: 5.5rem;
`;

const FeedStats = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 1rem;
`;

export default HotFeed;
