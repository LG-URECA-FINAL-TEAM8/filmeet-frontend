import { postRefresh } from "../../users/user";

// Access Token 관리 함수
const accessToken = () => localStorage.getItem("accessToken");

// 댓글 목록 조회
export const getCommentsFromApi = async (collectionId, page = 0, size = 20) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections/${collectionId}/comments?page=${page}&size=${size}`;
  console.log(`Fetching comments: ${url}`);

  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
    });

    if (response.status === 401) {
      console.warn("AccessToken 만료됨. 갱신 시도 중...");
      const refreshToken = localStorage.getItem("refreshToken");
      await postRefresh(refreshToken);
      response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken()}`,
        },
      });
    }

    if (!response.ok) {
      console.error("댓글 조회 실패:", response.status, await response.text());
      throw new Error("댓글 데이터를 불러오지 못했습니다.");
    }

    const responseData = await response.json();
    console.log("Fetched Comments Data:", responseData);
    return responseData.data.content; // 댓글 목록 반환
  } catch (error) {
    console.error("API 호출 오류:", error);
    throw error;
  }
};

// 댓글 추가
export const postComment = async (collectionId, commentContent) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections/comments`;
  console.log(`Posting comment to: ${url}`);

  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken()}`,
      },
      body: JSON.stringify({ collectionId, commentContent }),
    });

    if (response.status === 401) {
      console.warn("AccessToken 만료됨. 갱신 시도 중...");
      const refreshToken = localStorage.getItem("refreshToken");
      await postRefresh(refreshToken);
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken()}`,
        },
        body: JSON.stringify({ collectionId, commentContent }),
      });
    }

    if (!response.ok) {
      console.error("댓글 작성 실패:", response.status, await response.text());
      throw new Error("댓글 작성 중 문제가 발생했습니다.");
    }

    const responseData = await response.json();
    console.log("댓글 작성 성공:", responseData);
    return responseData.data; // 새로 추가된 댓글 ID 반환
  } catch (error) {
    console.error("댓글 작성 API 호출 오류:", error);
    throw error;
  }
};

// 댓글 삭제 (선택 사항)
export const deleteComment = async ({ collectionId, collectionCommentId }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections/comments`;

  console.log("댓글 삭제 요청 데이터:", { collectionId, collectionCommentId });

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken()}`,
      },
      body: JSON.stringify({ collectionId, collectionCommentId }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error("댓글 삭제 실패:", response.status, errorMessage);
      throw new Error(errorMessage); // 서버에서 반환된 에러 메시지 사용
    }

    console.log("댓글 삭제 성공");
    return true;
  } catch (error) {
    console.error("댓글 삭제 API 호출 오류:", error);
    throw error;
  }
};

export const updateComment = async ({ collectionCommentId, commentContent }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/collections/comments`;

  console.log("API 요청 URL:", url);
  console.log("API 요청 데이터:", { collectionCommentId, commentContent });

  try {
    const response = await fetch(url, {
      method: "PATCH", // 수정 메서드
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken()}`,
      },
      body: JSON.stringify({ collectionCommentId, commentContent }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error("댓글 수정 실패:", response.status, errorMessage);
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    console.log("댓글 수정 성공:", responseData);
    return responseData.data; // 수정된 댓글 ID 반환
  } catch (error) {
    console.error("댓글 수정 API 호출 오류:", error);
    throw error;
  }
};


