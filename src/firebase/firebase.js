import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// 알림 권한 요청 함수
export const requestNotificationPermission = async () => {
  if (Notification.permission === "default") {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("알림 권한이 허용되었습니다.");
    } else {
      console.error("알림 권한이 거부되었습니다.");
    }
  } else {
    console.log("알림 권한 상태:", Notification.permission);
  }
};

// 포그라운드 메시지 처리
onMessage(messaging, (payload) => {
  console.log("포그라운드 메시지 수신:", payload);
  if (payload.notification) {
    alert(`알림: ${payload.notification.title} - ${payload.notification.body}`);
  }
});

export { firebaseApp, messaging };
