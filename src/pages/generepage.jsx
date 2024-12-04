import { GenrePageWrapper } from '../styles/genere/genere';
import GenreSection from '../components/Genere/GenereSection';
import MbtiSection from '../components/Genere/MbtiSection';
import AgeSection from '../components/Genere/AgeSection';
import ProceedButtonComponent from '../components/Genere/ProceedButton';

const GenrePage = () => {
  return (
    <GenrePageWrapper>
      <GenreSection />
      <MbtiSection />
      <AgeSection  />
      <ProceedButtonComponent/>
    </GenrePageWrapper>
  );
};

export default GenrePage;


