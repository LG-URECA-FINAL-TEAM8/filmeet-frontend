import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";
import { postRefresh } from "../apis/users/user";

const VAPID_KEY = import.meta.env.VITE_VAPID_KEY;
const SERVER_URL = `${import.meta.env.VITE_API_BASE_URL}/notifications/token`;

export const registerFCMToken = async () => {
  let accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("로그인이 필요합니다.");
  }

  try {
    // FCM 토큰 생성
    const token = await getToken(messaging, { vapidKey: VAPID_KEY });

    if (!token) {
      throw new Error("FCM 토큰 생성 실패");
    }

    console.log("FCM Token:", token);

    const payload = { token };

    console.log("Payload:", payload);
    console.log("Headers:", {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    });

    // 서버에 FCM 토큰 등록
    let response = await fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    // Access Token 만료 처리
    if (response.status === 401) {
      console.warn("AccessToken 만료됨. 갱신 시도 중...");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        throw new Error("Refresh Token이 없습니다. 다시 로그인하세요.");
      }

      await postRefresh(refreshToken);

      // 갱신된 Access Token으로 다시 요청
      accessToken = localStorage.getItem("accessToken");

      response = await fetch(SERVER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      });
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => null); // 응답이 JSON 형식이 아니어도 에러 방지
      console.error("서버 응답 상태 코드:", response.status);
      console.error("서버 응답 데이터:", errorData);
      throw new Error(`FCM 토큰 등록 실패: ${errorData?.message || response.statusText}`);
    }

    console.log("FCM 토큰 등록 성공");
    return response.json();
  } catch (error) {
    console.error("FCM 토큰 처리 중 오류:", error);
    throw error;
  }
};
