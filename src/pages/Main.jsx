import React, { useEffect } from 'react';
import { MainBody } from '../styles/main/main';
import Title from '../components/features/main/title/Title';
import Poster from '../components/Common/poster/Poster';
import HotFeed from '../components/features/comments/HotFeed';
import { movies } from '../data/movies';
// import { useUpcoming } from '../apis/getMovies/queries';
import { useUserInfo } from '../apis/users/queries';
import useLoginStore from '../store/auth/loginStore';
import useUserStore from '../store/user/userStore';
let accessToken = localStorage.getItem('accessToken');
function Main() {
  // const { data } = useUpcoming();
  // const UpcomingData = data?.data?.content || [];
  const { data } = useUserInfo();
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  useEffect(() => {
    if (accessToken) {
      console.log(data?.data);
      setUserInfo({
        id: data?.data.id,
        nickname: data?.data.nickname,
        role: data?.data.role,
        username: data?.data.username,
      });
    }
  }, [accessToken, data, isLoggedIn]);

  const movieSections = [
    {
      title: '개인 추천 영화',
      component: <Poster caseType={1} movies={movies} />,
    },
    {
      title: '필밋 TOP 10',
      component: <Poster caseType={1} movies={movies} />,
    },
    {
      title: '공개 예정작',
      component: <Poster caseType={2} movies={movies} />,
    },
    {
      title: '박스오피스 순위',
      component: <Poster caseType={3} movies={movies} />,
    },
    {
      title: '지금 뜨는 코멘트',
      component: <HotFeed />,
    },
  ];

  return (
    <MainBody>
      {movieSections.map(({ title, component }, index) => (
        <React.Fragment key={index}>
          <Title>{title}</Title>
          {component}
        </React.Fragment>
      ))}
    </MainBody>
  );
}

export default Main;
