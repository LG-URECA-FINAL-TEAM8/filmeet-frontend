import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { lightTheme } from '../../../styles/themes';

function LikeBadge({ count }) {
  return <S.LikeBadge>{count}</S.LikeBadge>;
}

export default LikeBadge;

const S = {
  LikeBadge: styled(Box) ({
    width: '4rem',
    height: '2rem',
    borderRadius: '0.375rem',
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: lightTheme.color.badgeOrange,
    backgroundColor: lightTheme.color.backgroundOrange,
    fontSize: '1rem',
    fontFamily: lightTheme.font.fontSuitRegular,
    fontWeight: lightTheme.font.fontWeightRegular,
  })
};