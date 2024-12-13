import { postRefresh } from "../users/user";

export const uploadPoster = async (imageFile) => {
  let accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("로그인이 필요합니다.");
  }

  const formData = new FormData();
  formData.append("file", imageFile);

  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/s3/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  });

  if (response.status === 401) {
    console.warn("AccessToken 만료됨. 갱신 시도 중...");
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    accessToken = localStorage.getItem("accessToken");
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/s3/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });
  }

  if (!response.ok) {
    const errorText = await response.text();
    console.error("서버 응답 오류:", errorText);
    throw new Error("포스터 업로드 실패");
  }

  const jsonResponse = await response.json();
  return jsonResponse;
};