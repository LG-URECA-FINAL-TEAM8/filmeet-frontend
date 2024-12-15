import { registerToken } from '../../firebase/registerToken';
import { requestNotificationPermission } from '../../firebase/firebase';
export const handleRegisterToken = async () => {
  try {
    await requestNotificationPermission();
    await registerToken();
  } catch (error) {
    console.error('FCM 등록 중 오류:', error);
  }
};
