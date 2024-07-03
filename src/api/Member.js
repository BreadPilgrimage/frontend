import { request } from "./Client";

export const postSignup = async (data) => {
  console.log("회원가입 요청:", data);
  try {
    const res = await request.post({ url: "/members/", data });
    console.log("회원가입완료", res);
    return res;
  } catch (error) {
    console.error("회원가입 오류:", error);
    throw error;
  }
};

export const postLogin = async (data) => {
  console.log("로그인 요청:", data);
  try {
    const res = await request.post({ url: "/members/login", data });
    console.log("로그인 완료", res);
    return res;
  } catch (error) {
    console.error("로그인 오류:", error);
    throw error;
  }
};
