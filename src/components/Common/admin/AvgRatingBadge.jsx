import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { lightTheme } from '../../../styles/themes';

function AvgRatingBadge({ count }) {
  return <StyledAvgRatingBadge>{count}</StyledAvgRatingBadge>;
}

export default AvgRatingBadge;

const StyledAvgRatingBadge = styled(Box) ({
  width: '4rem',
  height: '2rem',
  borderRadius: '0.375rem',
  textAlign: 'center',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: lightTheme.color.badgePink,
  backgroundColor: lightTheme.color.backgroundPink,
  fontSize: '1rem',
  fontFamily: lightTheme.font.fontSuitRegular,
  fontWeight: lightTheme.font.fontWeightRegular,
});