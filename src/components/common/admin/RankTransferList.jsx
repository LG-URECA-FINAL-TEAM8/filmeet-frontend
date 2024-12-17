import { useState } from 'react';
import { Box, List, ListItem, ListItemText, Checkbox, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { lightTheme } from '../../../styles/themes';
import { useAdminMovieRecommend } from '../../../apis/admin/queries';

function RankTransferList({ leftItems, setLeftItems, rightItems, setRightItems }) {
  const [leftChecked, setLeftChecked] = useState([]);
  const [rightChecked, setRightChecked] = useState([]);
  const mutation = useAdminMovieRecommend();
  const buttonText = {
    moveToRight: '추가',
    moveToLeft: '제거',
    update: '저장',
  };

  const handleToggle = (value, checkedList, setCheckedList) => {
    const currentIndex = checkedList.indexOf(value);
    const newChecked = [...checkedList];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedList(newChecked);
  };

  const moveToRight = () => {
    const selected = leftItems.filter((item) => leftChecked.includes(item.id));
    setRightItems([...rightItems, ...selected]);
    setLeftItems(leftItems.filter((item) => !leftChecked.includes(item.id)));
    setLeftChecked([]);
  };

  const moveToLeft = () => {
    const selected = rightItems.filter((item) => rightChecked.includes(item.id));
    setLeftItems([...leftItems, ...selected]);
    setRightItems(rightItems.filter((item) => !rightChecked.includes(item.id)));
    setRightChecked([]);
  };

  const handleUpdate = () => {
    const movieIds = rightItems.map((item) => item.id);
    mutation.mutate(movieIds);
  };

  const customList = (title, items, checkedList, setCheckedList) => (
    <S.ListWrapper>
      <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
        {title}
      </Typography>
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
        <S.Button variant="contained" onClick={moveToRight}>
          {buttonText.moveToRight}
        </S.Button>
        <S.Button variant="contained" onClick={moveToLeft}>
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
  }),
};

