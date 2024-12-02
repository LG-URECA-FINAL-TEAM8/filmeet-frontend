import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { lightTheme } from '../../../styles/themes';


function AdminHeaderComponent({
  onMovieManagementClick,
  onAddNewMovieClick,
  onLikeManagementClick,
  showButtons = true,
}) {
  const handleClick = (e) => {
    const buttons = document.querySelectorAll('.header-button');
    buttons.forEach((button) => button.classList.remove('active'));
    e.currentTarget.classList.add('active');
  };

  const headerMovie = '영화 관리';
  const headerNewMovie = '새로운 영화 추가';
  const headerLike = '리뷰 관리';
  
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
      {showButtons && (
          <>
            <StyledButton
              className="header-button"
              onClick={(e) => {
                handleClick(e);
                onMovieManagementClick();
              }}
            >
              {headerMovie}
            </StyledButton>
            <StyledButton
              className="header-button"
              onClick={(e) => {
                handleClick(e);
                onAddNewMovieClick();
              }}
            >
              {headerNewMovie}
            </StyledButton>
            <StyledButton
              className="header-button"
              onClick={(e) => {
                handleClick(e);
                onLikeManagementClick();
              }}
            >
              {headerLike}
            </StyledButton>
          </>
        )}
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
  padding: '0.5rem 1rem',
  transition: 'color 0.3s, background-color 0.3s',

  '&.active': {
    color: lightTheme.color.fontGray,
    backgroundColor: lightTheme.color.backgroundOrange,
  },

  '&:hover': {
    backgroundColor: lightTheme.color.accentLightColor,
  },
});