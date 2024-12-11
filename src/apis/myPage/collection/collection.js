import { postRefresh } from "../../users/user";

let accessToken = localStorage.getItem("accessToken");

//컬렉션 목록
export const getUserCollections = async (userId, page = 0, size = 10) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections/list/users/${userId}?page=${page}&size=${size}`;
  console.log(`Fetching collections: ${url}`);
  console.log(`Access Token: ${accessToken}`);

  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    console.warn("AccessToken 만료됨. 갱신 시도 중...");
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    // 갱신된 토큰 다시 가져오기
    accessToken = localStorage.getItem("accessToken");
    console.log(`New Access Token: ${accessToken}`);

    response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    console.error("API 호출 실패:", response.status, await response.text());
    throw new Error("컬렉션 데이터를 불러오지 못했습니다.");
  }

  const collectionsData = await response.json();
  console.log("Fetched Collections Data:", collectionsData);

  return collectionsData;
};

//새 컬렉션
export const createNewCollection = async (collectionData) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections`;
  console.log(`Creating new collection: ${url}`);
  console.log(`Access Token: ${accessToken}`);

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(collectionData),
  });

  if (response.status === 401) {
    console.warn("AccessToken 만료됨. 갱신 시도 중...");
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    // 갱신된 토큰 다시 가져오기
    accessToken = localStorage.getItem("accessToken");
    console.log(`New Access Token: ${accessToken}`);

    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(collectionData),
    });
  }

  if (!response.ok) {
    console.error("API 호출 실패:", response.status, await response.text());
    throw new Error("컬렉션 생성에 실패했습니다.");
  }

  const result = await response.json();
  console.log("Created Collection Data:", result);

  return result;
};
