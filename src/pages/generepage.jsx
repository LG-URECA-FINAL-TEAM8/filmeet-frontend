import React from 'react';

import { GenrePageWrapper } from '../styles/genere/genere';
import GenreSection from '../components/Genere/GenereSection';
import MbtiSection from '../components/Genere/MbtiSection';
import AgeSection from '../components/Genere/AgeSection';

const GenrePage = () => {
  return (
    <GenrePageWrapper>
      <GenreSection />
      <MbtiSection />
      <AgeSection  />
    </GenrePageWrapper>
  );
};

export default GenrePage;


