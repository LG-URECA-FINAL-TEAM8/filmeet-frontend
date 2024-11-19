import React from 'react';
import { MainBody } from '../styles/main/main';
import Title from '../components/Common/main/Title/Title';
import Poster from '../components/Common/main/poster/Poster';

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
    </MainBody>
  );
}

export default Main;
