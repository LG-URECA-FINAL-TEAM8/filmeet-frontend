import styled from "styled-components";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import SvgIcReplyFilled24 from "../../../assets/svg/IcReplyFilled24";
import { comments } from "../../../data/comments";
import { useNavigate } from "react-router-dom";
import { createProfileClickHandler } from "../../../utils/ratings/navigationHandlers";

const Comment = () => {
  const navigate = useNavigate();
  
  const handleProfileClick = createProfileClickHandler(navigate, "/mypage");

  const handleCommentClick = (commentId) => {
    navigate(`/mypage/comments/${commentId}`);
  };

  return (
    <>
      {comments.map((item) => (
        <Card key={item.id}>
          <ProfileSection onClick={handleProfileClick}> {/* item.userId */}
            <ProfileImage src={item.userImage} alt={`${item.userName}`} />
            <Nickname>{item.userName}</Nickname>
          </ProfileSection>
          <MainContent>
            <ImageWrapper>
              <Image src={item.image} alt={item.title} />
            </ImageWrapper>
            <Content>
              <Title>{item.title}</Title>
              <GenreYear>
                {item.genre} • {item.year}
              </GenreYear>
              <Comments onClick={() => handleCommentClick(item.id)}>{item.comment}</Comments>
            </Content>
              <Rating>★ {item.rating.toFixed(1)}</Rating>
          </MainContent>
          <FeedStats>
            <Stat>
              <SvgIcLikeFilled24 width={"1rem"} height={"1rem"} /> {item.likes}
            </Stat>
            <Stat>
              <SvgIcReplyFilled24 width={"1rem"} height={"1rem"} /> {item.comments}
            </Stat>
          </FeedStats>
        </Card>
      ))}
    </>
  );
};


export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 16rem;
    margin: 0rem 0 1rem 0;
    padding: 1rem;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
    background-color: ${(props) => props.theme.color.commentColor};
    box-sizing: border-box;
  `;

export const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `;

export const ProfileImage = styled.img`
    width: 1.8rem;
    height: 1.8rem;
    margin: 0 0.5rem 0 0;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  `;

export const Nickname = styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    cursor: pointer;
  `;

export const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-top: ${(props) => props.theme.font.borderDefault};
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `;

export const ImageWrapper = styled.div`
    margin-right: 0.7rem;
  `;

export const Image = styled.img`
    width: 5.6rem;
    height: 7.5rem;
    border-radius: 0.5rem;
    object-fit: cover;
    margin: 0.5rem 0 0.7rem 0;
  `;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

export const Title = styled.h3`
    margin: 0.5rem 0 0.3rem 0;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1rem;
    
  `;

export const GenreYear = styled.p`
    margin: 0 0 0.5rem 0;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `;

export const Comments = styled.p`
    margin-top: 0.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    cursor: pointer;
  `;

export const Rating = styled.div`
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
  `;

export const FeedStats = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin: 1rem 0 0 0;
  `;

export const Stat = styled.span`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `;

export default Comment;
