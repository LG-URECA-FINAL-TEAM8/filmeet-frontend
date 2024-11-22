export const groupMovies = (movies, size) => {
  const groups = [];
  for (let i = 0; i < movies.length; i += size) {
    groups.push(movies.slice(i, i + size));
  }
  return groups;
};
