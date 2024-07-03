import { request } from "./Client";

export const getBreadReview = async (bakeryId) => {
  try {
    const response = await request.get({
      url: "/bread_reviews/" + bakeryId,
      params: {},
    });
    console.log("빵 리뷰 요청 완료", response);
    return response;
  } catch (error) {
    console.error("빵 리뷰 요청 오류:", error);
    throw error;
  }
};

/* *** 폼데이터
export const postBreadReviews = async (breadId) => {
  console.log("빵 리뷰 작성 요청:", breadId);
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
*/
