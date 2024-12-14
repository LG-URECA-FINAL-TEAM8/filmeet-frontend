import { postRefresh } from "../../users/user";

let accessToken = localStorage.getItem("accessToken");

//컬렉션 목록
export const getUserCollections = async (userId, page = 0, size = 10) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections/list/users/${userId}?page=${page}&size=${size}`;

  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);
    // 갱신된 토큰 다시 가져오기
    accessToken = localStorage.getItem("accessToken");

    response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    throw new Error("컬렉션 데이터를 불러오지 못했습니다.");
  }

  const collectionsData = await response.json();

  return collectionsData;
};

//새 컬렉션
export const createNewCollection = async (collectionData) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections`;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(collectionData),
  });

  if (response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);
    // 갱신된 토큰 다시 가져오기
    accessToken = localStorage.getItem("accessToken");

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
    throw new Error("컬렉션 생성에 실패했습니다.");
  }

  const result = await response.json();

  return result;
};

// 영화 검색 API
export const searchMovies = async (keyword, page = 0, size = 10) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/movies/search/title?keyword=${encodeURIComponent(
    keyword
  )}&page=${page}&size=${size}`;

  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);
    // 갱신된 토큰 다시 가져오기
    accessToken = localStorage.getItem("accessToken");
 
    response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    throw new Error("영화 검색에 실패했습니다.");
  }

  const searchData = await response.json();

  return searchData;
};