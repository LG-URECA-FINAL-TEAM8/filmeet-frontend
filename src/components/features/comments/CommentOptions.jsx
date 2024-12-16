import styled from 'styled-components';
import { useMenuStore } from '../../store/comment/useMenuStore';

const TEXTS = {
  edit: '댓글 수정',
  delete: '댓글 삭제',
};

const CommentOptions = ({ commentId }) => {
  const { openMenuId, openMenu, closeMenu } = useMenuStore();

  const isOpen = openMenuId === commentId;

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    if (isOpen) {
      closeMenu();
    } else {
      openMenu(commentId);
    }
  };

  return (
    <S.Wrapper>
      <S.MenuButton onClick={handleMenuToggle}></S.MenuButton>
      {isOpen && (
        <S.OptionsMenu>
          <S.MenuItem>{TEXTS.edit}</S.MenuItem>
          <S.MenuItem>{TEXTS.delete}</S.MenuItem>
        </S.OptionsMenu>
      )}
    </S.Wrapper>
  );
};

export default CommentOptions;

const S = {
  Wrapper: styled.div`
    position: relative;
    display: inline-block;
  `,
  MenuButton: styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  `,
  OptionsMenu: styled.div`
    position: absolute;
    top: 1.5rem;
    right: 0;
    background: ${(props) => props.theme.color.mainColor};
    border: 0.06rem solid #ccc;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.37rem rgba(0, 0, 0, 0.1);
    width: 6.25rem;
    z-index: 10;
  `,
  MenuItem: styled.span`
    padding: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    font-family: ${(props) => props.theme.font.fontSuitRegular};

    &:hover {
      background-color: ${(props) => props.theme.color.commentColor};
    }
  `,
};
