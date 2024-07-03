import React, { useEffect } from "react";
import styled from "styled-components";
const { kakao } = window;

const MyPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <Container>
      <LogoutBtn onClick={() => handleLogout()}>로그아웃</LogoutBtn>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const LogoutBtn = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 15px;
  border: none;
  background-color: #f3b340;
  margin: 0px auto;
  align-items: center;
  font-size: larger;
  font-weight: 700;
  color: #fff;
`;

export default MyPage;
