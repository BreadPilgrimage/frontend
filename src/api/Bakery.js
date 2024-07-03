import { request } from "./Client";

export const postBakeriesBookmark = async (breadId) => {
  console.log("빵집 저장하기 요청:", breadId);
  try {
    const res = await request.post({
      url: "/bakeries/" + breadId + "/bookmark",
    });
    console.log("빵집 저장하기 완료", res);
    return res;
  } catch (error) {
    console.error("빵집 저장하기 오류:", error);
    throw error;
  }
};

export const deleteBakeriesBookmark = async (breadId) => {
  try {
    const res = await request.delete({
      url: "/bakeries/" + breadId + "/bookmark",
    });
    console.log("빵집 저장하기 취소 완료", res);
    return res;
  } catch (error) {
    console.error("빵집 저장하기 취소 오류:", error);
    throw error;
  }
};

export const getBakeries = async (bakeryId) => {
  try {
    const response = await request.get({
      url: "/bakeries/" + bakeryId,
      params: {},
    });
    console.log("빵집 상세페이지 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵집 상세페이지 요청 오류:", error);
    throw error;
  }
};

export const getBakeriesBookmarkStatus = async (bakeryId) => {
  try {
    const response = await request.get({
      url: "/bakeries/" + bakeryId + "/bookmarkstatus",
      params: {},
    });
    console.log("빵집 저장 상태 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵집 저장 상태 요청 오류:", error);
    throw error;
  }
};

export const getBakeriesTop3 = async () => {
  try {
    const response = await request.get({
      url: "/bakeries/top3",
      params: {},
    });
    console.log("빵집 top3 빵 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵집 top3 빵 요청 오류:", error);
    throw error;
  }
};

export const getBakeriesSearch = async () => {
  try {
    const response = await request.get({
      url: "/bakeries/search",
      params: {},
    });
    console.log("빵집 검색 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵집 검색 요청 오류:", error);
    throw error;
  }
};

export const getBakeriesMap = async () => {
  try {
    const response = await request.get({
      url: "/bakeries/map",
      params: {},
    });
    console.log("빵집 지도 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵집 지도 요청 오류:", error);
    throw error;
  }
};
