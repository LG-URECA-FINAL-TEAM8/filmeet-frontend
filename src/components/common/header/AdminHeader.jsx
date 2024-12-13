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
    <S.AppBar position="fixed">
      <Toolbar>
      {showButtons && (
          <>
            <S.Button
              className="header-button"
              onClick={(e) => {
                handleClick(e);
                onMovieManagementClick();
              }}
            >
              {headerMovie}
            </S.Button>
            <S.Button
              className="header-button"
              onClick={(e) => {
                handleClick(e);
                onAddNewMovieClick();
              }}
            >
              {headerNewMovie}
            </S.Button>
            <S.Button
              className="header-button"
              onClick={(e) => {
                handleClick(e);
                onLikeManagementClick();
              }}
            >
              {headerLike}
            </S.Button>
          </>
        )}
      </Toolbar>
    </S.AppBar>
  );
}

export default AdminHeaderComponent;

const S = {
  AppBar: styled(AppBar)({
    backgroundColor: lightTheme.color.mainColor,
    boxShadow: lightTheme.box.defaulBoxShadow,
  }),

  Button: styled(Button)({
    color: lightTheme.color.fontDark,
    fontWeight: lightTheme.font.fontWeightRegular,
    fontSize: '1rem',
    fontFamily: lightTheme.font.fontSuitRegular,
    textTransform: 'none',
    padding: '0.5rem 1rem',
    transition: 'color 0.3s, background-color 0.3s',

    '&.active': {
      color: lightTheme.color.fontBlack,
      fontFamily: lightTheme.font.fontSuitBold,
    },

    '&:hover': {
      backgroundColor: lightTheme.color.accentLightColor,
    },
  }),
};