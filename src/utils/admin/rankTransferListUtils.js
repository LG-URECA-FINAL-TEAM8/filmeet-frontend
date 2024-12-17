export const handleToggle = (value, checkedList, setCheckedList) => {
  const currentIndex = checkedList.indexOf(value);
  const newChecked = [...checkedList];
  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  setCheckedList(newChecked);
};

export const moveToRight = (
  leftItems,
  leftChecked,
  setRightItems,
  setLeftItems,
  setLeftChecked,
  rightItems
) => {
  const selected = leftItems.filter((item) => leftChecked.includes(item.id));
  setRightItems([...rightItems, ...selected]);
  setLeftItems(leftItems.filter((item) => !leftChecked.includes(item.id)));
  setLeftChecked([]);
};

export const moveToLeft = (
  rightItems,
  rightChecked,
  setLeftItems,
  setRightItems,
  setRightChecked,
  leftItems
) => {
  const selected = rightItems.filter((item) => rightChecked.includes(item.id));
  setLeftItems([...leftItems, ...selected]);
  setRightItems(rightItems.filter((item) => !rightChecked.includes(item.id)));
  setRightChecked([]);
};
