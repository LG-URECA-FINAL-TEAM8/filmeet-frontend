import { postRefresh } from "../../users/user";

let accessToken = localStorage.getItem("accessToken");
// 컬렉션 상세 정보
export const getCollectionDetail = async (collectionId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/collections/${collectionId}`;
    console.log(`Fetching collection detail: ${url}`);
    console.log(`Access Token: ${accessToken}`);
  
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    // AccessToken 만료 시 갱신 로직
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
  
    // 응답 상태 확인
    if (!response.ok) {
      console.error("API 호출 실패:", response.status, await response.text());
      throw new Error("컬렉션 상세 정보를 불러오지 못했습니다.");
    }
  
    // JSON 파싱 및 결과 반환
    const collectionDetailData = await response.json();
    console.log("Fetched Collection Detail Data:", collectionDetailData);
  
    return collectionDetailData;
  };

  //컬렉션 삭제
  export const deleteCollection = async (collectionId, movieIds) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/collections`;
  
    const accessToken = localStorage.getItem("accessToken");
  
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ collectionId, movieIds }),
    });
  
    if (!response.ok) {
      const error = await response.text();
      console.error("컬렉션 삭제 실패:", error);
      throw new Error("컬렉션 삭제 중 문제가 발생했습니다.");
    }
  
    return response.status; // 성공 시 상태 코드 반환
  };

  export const updateCollection = async (collectionData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/collections`;
  
    const accessToken = localStorage.getItem("accessToken");
  
    const response = await fetch(url, {
      method: "PATCH", // PATCH 메서드 사용
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(collectionData), // 요청 데이터
    });
  
    if (!response.ok) {
      const error = await response.json();
      console.error("컬렉션 수정 실패:", error);
      throw new Error("컬렉션 수정 중 문제가 발생했습니다.");
    }
  
    const result = await response.json();
    return result;
  };

  // 컬렉션에 포함된 영화 목록 조회
export const getCollectionMovies = async (collectionId, page = 0, size = 20) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections/${collectionId}/movies?page=${page}&size=${size}`;
  console.log(`Fetching collection movies: ${url}`);
  console.log(`Access Token: ${accessToken}`);

  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // AccessToken 만료 시 갱신 로직
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

  // 응답 상태 확인
  if (!response.ok) {
    const error = await response.text();
    console.error("API 호출 실패:", error);
    throw new Error("컬렉션의 영화 데이터를 불러오지 못했습니다.");
  }

  // JSON 파싱 및 결과 반환
  const collectionMoviesData = await response.json();
  console.log("Fetched Collection Movies Data:", collectionMoviesData);

  return collectionMoviesData;
};
  