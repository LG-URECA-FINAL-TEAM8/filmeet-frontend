import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

function AdminHeaderComponent({ 
  text = '관리자 페이지', 
  onMovieManagementClick, 
  onAddNewMovieClick, 
  onLikeManagementClick,
  showButtons = true,
}) {
  const clickManagement = '전체 영화 목록';
  const clickAdd = '새로운 영화 추가';
  const clickLike = '좋아요 관리';
  return (
    <S.AdminHeader>
      <S.HeaderContent>
        <S.AdminHeaderText>{text}</S.AdminHeaderText>
      </S.HeaderContent>
      {showButtons && (
        <S.ButtonGroup>
          <S.StyledButton onClick={onMovieManagementClick}>{clickManagement}</S.StyledButton>
          <S.StyledButton onClick={onAddNewMovieClick}>{clickAdd}</S.StyledButton>
          <S.StyledButton onClick={onLikeManagementClick}>{clickLike}</S.StyledButton>
        </S.ButtonGroup>
      )}
    </S.AdminHeader>
  );
}

const S = {
  AdminHeader: styled.header`
  max-width : 120rem;
  width: 1920px;
  height: 94px;
  background-color: ${lightTheme.fontWhite};
  color: ${lightTheme.fontWhite};
  font-size: 1.5rem;
  font-weight: ${lightTheme.fontWeightBold};
  font-family: ${lightTheme.fontSuitBold};
  box-shadow: ${lightTheme.defaulBoxShadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  `,
  
  HeaderContent: styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
  `,
  
  AdminHeaderText: styled.h1`
  top: ${(props) => props.top || '50%'}; 
  left: ${(props) => props.left || '20%'}; 
  
  font-weight: ${lightTheme.fontWeightBold};
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-family: ${lightTheme.fontSuitBold};
  color: ${lightTheme.fontBlack};
  margin: 0;
  `,
  
  ButtonGroup: styled.div`
  display: flex;
  gap: 2rem;
  `,
  
  StyledButton: styled.button`
  background: none;
  color: ${lightTheme.fontBlack};
  font-size: 1rem;
  border: none;
  cursor: pointer;
  font-family: ${lightTheme.fontSuitBold};
  
  &:hover {
    text-decoration: underline;
    }
    `,
};

export default AdminHeaderComponent;