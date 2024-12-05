import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { lightTheme } from '../../../styles/themes';

function CommentBadge({ count }) {
  return <S.CommentBadge>{count}</S.CommentBadge>;
}

export default CommentBadge;

const S = {
  CommentBadge: styled(Box)({
    width: '4rem',
    height: '2rem',
    borderRadius: '0.375rem',
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: lightTheme.color.badgeGreen,
    backgroundColor: lightTheme.color.backgroundGreen,
    fontSize: '1rem',
    fontFamily: lightTheme.font.fontSuitRegular,
    fontWeight: lightTheme.font.fontWeightRegular,
  })
};