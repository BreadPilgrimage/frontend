import React, { useState } from "react";
import styled from "styled-components";
import { postSignup } from "../api/Member";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 회원가입 API 연동
  const handleButton = async () => {
    const data = {
      email: email,
      password: password,
      name: name,
      nickname: nickname,
    };

    try {
      const response = await postSignup(data);
      console.log("성공");

      if (response.code === "COMMON200") {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("오류");
    }
  };

  return (
    <Container>
      <TitleSpan>회원 가입</TitleSpan>
      <SubTitle>이메일*</SubTitle>
      <InputBox>
        <Input
          type="id"
          placeholder="아이디를 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputBox>
      <SubTitle>비밀번호*</SubTitle>
      <InputBox>
        <Input2
          type="password"
          placeholder="비밀번호를 입력해주세요. (8~15자,영 대/소문자, 숫자 조합)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InputBox>
      <SubTitle>이름*</SubTitle>
      <InputBox>
        <Input
          type="text"
          placeholder="이름을 입력해주세요. (5자 이하)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </InputBox>
      <SubTitle>닉네임</SubTitle>
      <InputBox>
        <Input2
          type="text"
          placeholder="닉네임을 입력해주세요."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
      </InputBox>
      <NextBtn onClick={handleButton}>가입하기</NextBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const TitleSpan = styled.div`
  font-size: larger;
  font-weight: 600;
  margin: 30px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const SubTitle = styled.span`
  font-size: medium;
  color: #626262;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 220px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: small;
  margin-bottom: 15px;
`;

const Input2 = styled.input`
  width: 358px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: small;
  margin-bottom: 15px;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextBtn = styled.button`
  width: 358px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #f3b340;
  margin: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 700;
  color: #fff;
`;

export default SignUpPage;
