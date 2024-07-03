import { request } from "./Client";

export const postBreadsLike = async (breadId) => {
  console.log("빵 좋아요 요청:", breadId);
  try {
    const res = await request.post({
      url: "/breads/" + breadId + "/like",
    });
    console.log("빵 좋아요 완료", res);
    return res;
  } catch (error) {
    console.error("빵 좋아요 오류:", error);
    throw error;
  }
};

export const getBreads = async (bakeryId) => {
  try {
    const response = await request.get({
      url: "/breads/" + bakeryId,
      params: {},
    });
    console.log("빵 전체 리스트 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵 전체 리스트 요청 오류:", error);
    throw error;
  }
};

/* *** 폼데이터 
export const postBreads = async (breadId) => {
  console.log("빵 추가하기 요청:", breadId);
  try {
    const res = await request.post({
      url: "/breads/" + breadId,
    });
    console.log("빵 추가 완료", res);
    return res;
  } catch (error) {
    console.error("빵 추가 오류:", error);
    throw error;
  }
};
*/
export const getBreadsLikeStatus = async (bakeryId) => {
  try {
    const response = await request.get({
      url: "/breads/" + bakeryId + "/likestatus",
      params: {},
    });
    console.log("빵 좋아요 상태 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵 좋아요 상태 요청 오류:", error);
    throw error;
  }
};

export const getBreadsDetail = async (bakeryId) => {
  try {
    const response = await request.get({
      url: "/breads/" + bakeryId + "/detail",
      params: {},
    });
    console.log("빵 상세페이지 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵 상세페이지 요청 오류:", error);
    throw error;
  }
};

export const getBreadsTop3 = async (bakeryId) => {
  try {
    const response = await request.get({
      url: "/breads/" + bakeryId + "/top3",
      params: {},
    });
    console.log("빵집 top3 빵 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵집 top3 빵 요청 오류:", error);
    throw error;
  }
};

export const getBreadsAllTop3 = async () => {
  try {
    const response = await request.get({
      url: "/breads/top3",
      params: {},
    });
    console.log("전체 top3 빵 요청 완료", response);
    return response;
  } catch (error) {
    console.error("전체 top3 빵 요청 오류:", error);
    throw error;
  }
};

export const deleteBreadsLike = async (breadId) => {
  try {
    const res = await request.delete({
      url: "/breads/" + breadId + "/deletelike",
    });
    console.log("빵 좋아요 취소 완료", res);
    return res;
  } catch (error) {
    console.error("빵 좋아요 취소 오류:", error);
    throw error;
  }
};
