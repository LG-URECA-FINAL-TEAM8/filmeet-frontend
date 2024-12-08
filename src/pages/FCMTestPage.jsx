import React, { useState } from "react";
import { registerFCMToken } from "../firebase/registerFCMToken";
import { requestNotificationPermission } from "../firebase/firebase";
import NotificationDisplay from "../components/firebase/NotificationDisplay";

const FCMTestPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegisterToken = async () => {
    setLoading(true);
    setMessage("");

    try {
      await requestNotificationPermission();
      await registerFCMToken();
      setMessage("FCM 토큰이 성공적으로 등록되었습니다!");
    } catch (error) {
      console.error("FCM 등록 중 오류:", error);
      setMessage("FCM 등록 실패. 콘솔에서 오류를 확인하세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>FCM 테스트 앱</h1>
      <button onClick={handleRegisterToken} disabled={loading}>
        {loading ? "등록 중..." : "FCM 토큰 등록"}
      </button>
      {message && <p>{message}</p>}
      <NotificationDisplay />
    </div>
  );
};

export default FCMTestPage;
