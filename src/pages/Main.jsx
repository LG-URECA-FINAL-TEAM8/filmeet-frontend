import React from 'react';
import { MainBody } from '../styles/main/main';
import Title from '../components/features/main/title/Title';
import Poster from '../components/features/main/poster/Poster';
import HotFeed from '../components/Features/comments/HotFeed';

function Main() {
  const movieSections = [
    { title: '개인 추천 영화', component: <Poster /> },
    { title: '필밋 TOP 10', component: <Poster /> },
    { title: '공개 예정작', component: <Poster /> },
    { title: '박스오피스 순위', component: <Poster /> },
    { title: '지금 뜨는 코멘트', component: <HotFeed /> },
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
