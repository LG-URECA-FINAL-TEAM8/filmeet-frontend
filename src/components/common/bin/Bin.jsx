import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { paraMeterHandler } from '../../../utils/auth/paraMeterHandler';
import { useUserInfo } from '../../../apis/users/queries';
import { handleRegisterToken } from '../../../utils/fcm/fcmTokenHandler';
function Bin() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: userInfo } = useUserInfo();
  useEffect(() => {
    paraMeterHandler(location.search);
  }, [location.search]);

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length > 0) {
      handleRegisterToken();
      navigate('/');
    }
  }, [userInfo, navigate]);

  return <></>;
}

export default Bin;
