import { useState } from 'react';
import { Box, List, ListItem, ListItemText, Checkbox, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { lightTheme } from '../../../styles/themes';
import { useAdminMovieRecommend } from '../../../apis/admin/queries';
import {
  handleToggle,
  moveToRight,
  moveToLeft
} from '../../../utils/admin/rankTransferListUtils';

function RankTransferList({ leftItems, setLeftItems, rightItems, setRightItems }) {
  const [leftChecked, setLeftChecked] = useState([]);
  const [rightChecked, setRightChecked] = useState([]);
  const mutation = useAdminMovieRecommend();
  const buttonText = {
    moveToRight: '추가',
    moveToLeft: '제거',
    update: '저장',
  };

  const handleUpdate = () => {
    const movieIds = rightItems.map((item) => item.id);
    mutation.mutate(movieIds);
  };

  const customList = (title, items, checkedList, setCheckedList) => (
    <S.ListWrapper>
      <S.Title variant="h6">{title}</S.Title>
      <S.ListContainer>
        <List dense>
          {items.map((item) => (
            <ListItem 
              key={item.id} 
              onClick={() => handleToggle(item.id, checkedList, setCheckedList)}
            >
              <Checkbox checked={checkedList.includes(item.id)} />
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </S.ListContainer>
    </S.ListWrapper>
  );

  return (
    <S.Wrapper>
      <S.TransferContainer>
        {customList('후보', leftItems, leftChecked, setLeftChecked)}
      </S.TransferContainer>
      <S.ButtonContainer>
        <S.Button variant="contained" onClick={() => moveToRight(
          leftItems, 
          leftChecked, 
          setRightItems, 
          setLeftItems, 
          setLeftChecked, 
          rightItems
        )}>
          {buttonText.moveToRight}
        </S.Button>
        <S.Button variant="contained" onClick={() => moveToLeft(
          rightItems, 
          rightChecked, 
          setLeftItems, 
          setRightItems, 
          setRightChecked, 
          leftItems
        )}>
          {buttonText.moveToLeft}
        </S.Button>
      </S.ButtonContainer>
      <S.TransferContainer>
        {customList('최종 순위', rightItems, rightChecked, setRightChecked)}
      </S.TransferContainer>
      <S.Button
        variant="contained"
        color="primary"
        onClick={handleUpdate}
        disabled={mutation.isLoading}
        style={{ marginTop: '1rem' }}
      >
        {buttonText.update}
      </S.Button>
    </S.Wrapper>
  );
}

export default RankTransferList;

const S = {
  Wrapper: styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    width: '90%',
    marginTop: '1rem',
  }),
  TransferContainer: styled(Box)({
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  }),
  ButtonContainer: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  }),
  ListWrapper: styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  }),
  ListContainer: styled(Box)({
    width: '100%',
    height: '19rem',
    overflow: 'auto',
    borderRadius: '0.5rem',
    backgroundColor: `${lightTheme.color.mainGray}`,
  }),
  Button: styled(Button)({
    width: '5rem',
    height: '2.5rem',
    backgroundColor: `${lightTheme.color.fontDark}`,
    fontFamily: `${lightTheme.font.fontSuitRegular}`,
    fontWeight: `${lightTheme.font.fontWeightRegular}`,
  }),
  Title: styled(Typography)({
    marginBottom: '0.5rem',
    textAlign: 'center',
    fontFamily: `${lightTheme.font.fontSuitRegular}`,
    fontWeight: `${lightTheme.font.fontWeightRegular}`,
  }),
};