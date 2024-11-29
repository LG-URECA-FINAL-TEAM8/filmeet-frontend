import styled from "styled-components";
import SvgIcLikeFilled24 from "../../assets/svg/IcLikeFilled24";
import SvgComment from "../../assets/svg/Comment";

const CommentBody = () => {
  return (
    <Body>
      <ActionContainer>
        <Action>
          <SvgIcLikeFilled24 />
          좋아요
        </Action>
      </ActionContainer>
      <Divider />
      <ActionContainer>
        <Action>
          <SvgComment />
          댓글
        </Action>
      </ActionContainer>
    </Body>
  );
};

export const Body = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.mainColor};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ActionContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.mainColor};
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.commentColor};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const Divider = styled.div`
  width: 0.1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.color.commentColor};
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color.fontGray};

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export default CommentBody;
