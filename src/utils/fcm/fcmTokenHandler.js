import { registerFCMToken } from '../../firebase/registerFCMToken';
import { requestNotificationPermission } from '../../firebase/firebase';
export const handleRegisterToken = async () => {
  try {
    await requestNotificationPermission();
    await registerFCMToken();
  } catch (error) {
    console.error('FCM 등록 중 오류:', error);
  }
};
