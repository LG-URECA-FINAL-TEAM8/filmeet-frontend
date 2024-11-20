import React from 'react';
import { MainBody } from '../styles/main/main';
import Title from '../components/features/main/title/Title';
import Poster from '../components/features/main/poster/Poster';
import HotFeed from '../components/Features/comments/HotFeed';

function Main() {
  const movieTitle = [
    '개인 추천 영화',
    '필밋 TOP 10',
    '공개 예정작',
    '박스오피스 순위',
    '지금 뜨는 코멘트',
  ];

  return (
    <MainBody>
      <Title>{movieTitle[0]}</Title>
      <Poster />
      <Title>{movieTitle[1]}</Title>
      <Poster />
      <Title>{movieTitle[2]}</Title>
      <Poster />
      <Title>{movieTitle[3]}</Title>
      <Poster />
      <Title>{movieTitle[4]}</Title>
      <HotFeed />
    </MainBody>
  );
}

export default Main;
