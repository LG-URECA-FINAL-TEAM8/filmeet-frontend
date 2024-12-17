import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { lightTheme } from '../../../styles/themes';

function AvgRatingBadge({ count }) {
  return <S.AvgRatingBadge>{count}</S.AvgRatingBadge>;
}

export default AvgRatingBadge;

const S = {
  AvgRatingBadge: styled(Box) ({
    width: '12rem',
    height: '2rem',
    borderRadius: '0.375rem',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: lightTheme.color.badgePink,
    backgroundColor: lightTheme.color.backgroundPink,
    fontSize: '1rem',
    fontFamily: lightTheme.font.fontSuitRegular,
    fontWeight: lightTheme.font.fontWeightRegular,
    position: 'relative',
    top: '4px',
    left: '-60px',
  })
};