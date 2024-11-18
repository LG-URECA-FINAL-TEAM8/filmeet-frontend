import React from 'react';
import { MainBody } from '../styles/main/main';
import Title from '../components/Common/main/Title/Title';
import Poster from '../components/Common/main/poster/Poster';
function Main() {
  return (
    <>
      <MainBody>
        <Title>필밋 TOP 10</Title>
        <Poster />
      </MainBody>
    </>
  );
}

export default Main;
