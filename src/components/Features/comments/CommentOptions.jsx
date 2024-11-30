import { useRef, useEffect } from "react";
import styled from "styled-components";
import useMenuStore from "../../store/comment/useMenuStore";

const CommentOptions = ({ commentId }) => {
  const { openMenuId, openMenu, closeMenu, handleDocumentClick } = useMenuStore();
  const menuRef = useRef();

  const isOpen = openMenuId === commentId;

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu(commentId);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => handleDocumentClick(e, menuRef);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleDocumentClick]);

  return (
    <Wrapper ref={menuRef}>
      <MenuButton onClick={toggleMenu}>...</MenuButton>
      {isOpen && (
        <OptionsMenu>
          <MenuItem>댓글 수정</MenuItem>
          <MenuItem>댓글 삭제</MenuItem>
        </OptionsMenu>
      )}
    </Wrapper>
  );
};

export default CommentOptions;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const OptionsMenu = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100px;
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;
