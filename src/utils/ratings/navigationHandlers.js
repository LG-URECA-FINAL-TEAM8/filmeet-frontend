export const createBackClickHandler = (navigate, path) => () => {
  navigate(path);
};

export const createFilterClickHandler = (setFilter) => (filter) => {
  setFilter(filter);
};

export const createProfileClickHandler = (navigate) => () => {
  navigate(`/mypage`);
};
