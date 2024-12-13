import SvgDelete from '../../../assets/svg/SvgDelete';
import SvgPencil from '../../../assets/svg/Pencil';
import styled from 'styled-components';
import { ContentText } from '../../../data/movieDetail/text';
function CommentCard({ myCommentData }) {
  return (
    <>
      <S.MyCommentsSection>
        <S.MyCommentsTitle>{ContentText.mycomment}</S.MyCommentsTitle>
        <S.CommentCard>
          {/* <S.ProfileImage bgImage={myCommentData?.myprofileImage} /> */}
          <S.CommentText>{myCommentData?.content}</S.CommentText>
          <S.CommentActions>
            <S.DeleteButton>
              <SvgDelete width="1rem" height="1rem" /> {ContentText.delete}
            </S.DeleteButton>
            <S.EditButton>
              <SvgPencil width="1rem" height="1rem" /> {ContentText.edit}
            </S.EditButton>
          </S.CommentActions>
        </S.CommentCard>
      </S.MyCommentsSection>
    </>
  );
}

export default CommentCard;

const S = {
  MyCommentsSection: styled.div`
    margin: 0 0 0;
    padding: 1rem 0;
    background-color: ${(props) => props.theme.color.commentColor};
    border-radius: 0.5rem;
  `,

  MyCommentsTitle: styled.h4`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
    margin: 0 0 0.6rem;
  `,

  CommentCard: styled.div`
    width: 61rem;
    height: 4.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${(props) => props.theme.color.mainColor};
    border: ${(props) => props.theme.font.borderDefault};
    border-radius: 0.3rem;
  `,

  CommentText: styled.div`
    flex: 1;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    margin: 0 1rem;
  `,

  CommentActions: styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
  `,

  EditButton: styled.button`
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    background: none;
    border: none;
    cursor: pointer;
  `,

  DeleteButton: styled.button`
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    background: none;
    border: none;
    cursor: pointer;
  `,
};
