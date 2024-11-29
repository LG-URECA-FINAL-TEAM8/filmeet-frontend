import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { lightTheme } from '../../../styles/themes';


function AdminHeaderComponent({
  onMovieManagementClick,
  onAddNewMovieClick,
  onLikeManagementClick,
}) {
  const headerMovie = '영화 관리';
  const headerNewMovie = '새로운 영화 추가';
  const headerLike = '리뷰 관리';
  
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <StyledButton onClick={onMovieManagementClick}>{headerMovie}</StyledButton>
        <StyledButton onClick={onAddNewMovieClick}>{headerNewMovie}</StyledButton>
        <StyledButton onClick={onLikeManagementClick}>{headerLike}</StyledButton>
      </Toolbar>
    </StyledAppBar>
  );
}

export default AdminHeaderComponent;

const StyledAppBar = styled(AppBar)({
  backgroundColor: lightTheme.color.mainColor,
  boxShadow: lightTheme.box.defaulBoxShadow,
});

const StyledButton = styled(Button)({
  color: lightTheme.color.fontDark,
  fontWeight: lightTheme.font.fontWeightBold,
  fontSize: '1rem',
  fontFamily: lightTheme.font.fontSuitBold,
  textTransform: 'none',
});