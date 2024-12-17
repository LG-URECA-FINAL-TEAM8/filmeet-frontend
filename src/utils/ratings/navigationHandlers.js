export const createBackClickHandler = (navigate, userId) => () => {
  navigate(`/mypage/${userId}`);
};

export const createFilterClickHandler = (setFilter) => (filter) => {
  setFilter(filter);
};

export const createProfileClickHandler = (navigate, userId) => () => {
  navigate(`/mypage/${userId}`);
};
