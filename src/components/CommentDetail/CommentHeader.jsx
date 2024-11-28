import styled from "styled-components";

const CommentHeader = ({ commentData }) => {
    return (
      <S.Header>
        <S.MainContent>
          <S.LeftContent>
            <S.UserInfo>
              <S.UserProfile src={commentData.userImage} alt={commentData.userName} />
              <S.UserDetails>
                <S.UserName>{commentData.userName}</S.UserName>
                <S.CommentTime>5분 전</S.CommentTime>
              </S.UserDetails>
            </S.UserInfo> 
            <S.MovieDetails>
              <S.MovieTitle>{commentData.title} ({commentData.year})</S.MovieTitle>
              <S.MovieGenre>{commentData.genre}</S.MovieGenre>
            </S.MovieDetails>
            <S.Content>{commentData.comment}</S.Content>
          </S.LeftContent>       
            <S.MoviePoster src={commentData.image} alt={commentData.title} />
        </S.MainContent>
      </S.Header>
    );
  };
    
  const S = {
    Header: styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: ${(props) => props.theme.color.mainColor};
    `,
  
    MainContent: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
    `,
  
    LeftContent: styled.div`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex: 1;
    `,
  
    UserInfo: styled.div`
      display: flex;
      align-items: center;
      gap: 1rem;
    `,
  
    UserProfile: styled.img`
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      object-fit: cover;
    `,
  
    UserDetails: styled.div`
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    `,
  
    UserName: styled.div`
      font: ${(props) => props.theme.font.fontSuitRegular};
      font-size: 0.7rem;
      font-weight: bold;
      line-height: 1; /* 유저 이름과 CommentTime 간 간격 조정 */
    `,
  
    CommentTime: styled.div`
      font-size: 0.7rem;
      color: ${(props) => props.theme.color.fontGray};
    `,
  
    MovieDetails: styled.div`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    `,
  
    MovieTitle: styled.div`
      font-size: 1.4rem;
      font-weight: bold;
    `,
  
    MovieGenre: styled.div`
      font-size: 0.7rem;
      color: ${(props) => props.theme.color.fontGray};
    `,
  
    Content: styled.div`
      font: ${(props) => props.theme.font.fontSuitRegular};
      font-size: 1rem;
    `,
  
    MovieInfo: styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: flex-start; /* UserInfo와 같은 높이로 정렬 */
      margin-top: 0; /* 상단 정렬을 유지하기 위해 마진 제거 */
      margin-left: 1rem;
    `,
  
    MoviePoster: styled.img`
      width: 6rem;
      height: 8rem;
      border-radius: 0.5rem;
      object-fit: cover;
    `,
  };
    
export default CommentHeader;
