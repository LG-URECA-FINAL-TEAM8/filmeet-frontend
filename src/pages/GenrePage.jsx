import { GenrePageWrapper } from '../styles/genere/genere';
import GenreSection from '../components/genere/GenereSection';
import MbtiSection from '../components/genere/MbtiSection';
import AgeSection from '../components/genere/AgeSection';
import ProceedButtonComponent from '../components/genere/ProceedButton';

const GenrePage = () => {
  return (
    <GenrePageWrapper>
      <GenreSection />
      <MbtiSection />
      <AgeSection />
      <ProceedButtonComponent />
    </GenrePageWrapper>
  );
};

export default GenrePage;
