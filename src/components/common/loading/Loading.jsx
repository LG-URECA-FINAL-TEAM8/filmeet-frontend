import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnimation from '../../../assets/json/Loading.json';

const Loading = () => {
  return (
    <Player
      autoplay
      loop
      src={LoadingAnimation}
      style={{
        height: '10rem',
        width: '10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Loading;
