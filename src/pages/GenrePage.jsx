import { GenrePageWrapper } from '../styles/genere/genere';
import GenreSection from '../components/genere/GenereSection';
import MbtiSection from '../components/genere/MbtiSection';
import AgeSection from '../components/genere/AgeSection';
import ProceedButtonComponent from '../components/genere/ProceedButton';
import { useLocation } from 'react-router-dom';
import { paraMeterHandler } from '../utils/auth/paraMeterHandler';

const GenrePage = () => {
  const location = useLocation();
  paraMeterHandler(location.search);

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
