import { request } from "./Client";

export const postInqiry = async (data) => {
  console.log("고객센터 문의 요청:", data);
  try {
    const res = await request.post({
      url: "/mypage/inquiry",
      data,
    });
    console.log("고객센터 문의 완료", res);
    return res;
  } catch (error) {
    console.error("고객센터 문의 오류:", error);
    throw error;
  }
};

export const getMyPage = async () => {
  try {
    const response = await request.get({
      url: "/mypage",
      params: {},
    });
    console.log("마이페이지 조회 요청 완료", response);
    return response;
  } catch (error) {
    console.error("마이페이지 조회 요청 오류:", error);
    throw error;
  }
};

export const getMyReview = async () => {
  try {
    const res = await request.get({
      url: "/mypage/myreview",
      params: {},
    });
    console.log("빵 리뷰 조회 요청 완료", res);
    return res;
  } catch (error) {
    console.error("빵 리뷰 조회 요청 오류:", error);
    throw error;
  }
};

export const getMybakery = async () => {
  try {
    const res = await request.get({
      url: "/mypage/mybakery",
      params: {},
    });
    console.log("찜한 빵집 요청 완료", res);
    return res;
  } catch (error) {
    console.error("찜한 빵집 요청 오류:", error);
    throw error;
  }
};
