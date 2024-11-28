import styled from "styled-components";
import SvgIcLikeFilled24 from "../../assets/svg/IcLikeFilled24";
import SvgComment from "../../assets/svg/Comment";

const CommentBody = () => {
  return (
    <S.Body>
      <S.Actions>
        <S.Action>
          <SvgIcLikeFilled24 /> 좋아요
        </S.Action>
        <S.Divider /> 
        <S.Action>
          <SvgComment /> 댓글
        </S.Action>
      </S.Actions>
    </S.Body>
  );
};

const S = {
    Body: styled.div`
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.color.mainColor};
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    `,
    Actions: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20rem; /* 버튼 간 간격 */
      font-size: 1rem;
      color: ${(props) => props.theme.color.fontGray};
    `,
    Action: styled.button`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      color: ${(props) => props.theme.color.fontGray};
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: color 0.3s ease;
  
      &:hover {
        color: ${(props) => props.theme.color.fontGray};
      }
  
      svg {
        width: 1rem;
        height: 1rem;
      }
    `,
    Divider: styled.div`
        width: 1px;
        height: 1.5rem;
        background-color: ${(props) => props.theme.color.commentColor};
  `,
  };
  
export default CommentBody;
