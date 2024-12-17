import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { lightTheme } from '../../../styles/themes';

function ReviewerBadge({ count }) {
  return <S.ReviewerBadge>{count}</S.ReviewerBadge>;
}

export default ReviewerBadge;

const S = {
  ReviewerBadge: styled(Box) ({
    width: '10rem',
    height: '2rem',
    borderRadius: '0.375rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    //justifyContent: 'center',
    color: lightTheme.color.badgeGreen,
    backgroundColor: lightTheme.color.backgroundGreen,
    fontSize: '1rem',
    fontFamily: lightTheme.font.fontSuitRegular,
    fontWeight: lightTheme.font.fontWeightRegular,
  })
};
