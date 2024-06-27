import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Container>
        <Logo
          onClick={() => {
            window.location.href = "/";
          }}
        >
          빵지순례
        </Logo>
      </Container>
    </>
  );
};

const Logo = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #f3b340;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const Container = styled.header`
  //position: fixed;
  //top: 0;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Header;
