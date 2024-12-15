import { postRefresh } from "../../users/user";

let accessToken = localStorage.getItem("accessToken");
// 컬렉션 상세 정보
export const getCollectionDetail = async (collectionId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/collections/${collectionId}`;
 
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    // AccessToken 만료 시 갱신 로직
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
  
    // 응답 상태 확인
    if (!response.ok) {
      throw new Error("컬렉션 상세 정보를 불러오지 못했습니다.");
    }
  
    // JSON 파싱 및 결과 반환
    const collectionDetailData = await response.json();
  
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
      throw new Error("컬렉션 수정 중 문제가 발생했습니다.");
    }
  
    const result = await response.json();
    return result;
  };

  // 컬렉션에 포함된 영화 목록 조회
export const getCollectionMovies = async (collectionId, page = 0, size = 20) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections/${collectionId}/movies?page=${page}&size=${size}`;

  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // AccessToken 만료 시 갱신 로직
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

  // 응답 상태 확인
  if (!response.ok) {
    throw new Error("컬렉션의 영화 데이터를 불러오지 못했습니다.");
  }

  // JSON 파싱 및 결과 반환
  const collectionMoviesData = await response.json();

  return collectionMoviesData;
};
  
// 좋아요 기능
export const likeCollection = async (collectionId) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/likes/collections/${collectionId}`;
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // AccessToken 만료 시 갱신 로직
    if (response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      await postRefresh(refreshToken);

      // 갱신된 토큰 다시 가져오기
      accessToken = localStorage.getItem("accessToken");

      response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    if (!response.ok) {
      throw new Error("좋아요 추가 중 문제가 발생했습니다.");
    }
  } catch (error) {
    console.error("좋아요 API 에러:", error);
    throw error;
  }
};

//좋아요 취소 
export const cancelLikeCollection = async (collectionId) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/likes/cancel/collections/${collectionId}`;
  try {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      await postRefresh(refreshToken);

      response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    }

    if (!response.ok) {
      throw new Error("좋아요 취소 요청에 실패했습니다.");
    }
  } catch (error) {
    console.error("좋아요 취소 API 에러:", error);
    throw error;
  }
};



