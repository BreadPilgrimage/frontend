import React from "react";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FiCheckSquare } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <Container>
        <NavBox>
          <Home
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <HiOutlineHome />
          </Home>
          <Search
            onClick={() => {
              window.location.href = "/search";
            }}
          >
            <IoSearch />
          </Search>
          <Check
            onClick={() => {
              window.location.href = "/check";
            }}
          >
            <FiCheckSquare />
          </Check>
          <My
            onClick={() => {
              window.location.href = "/mypage";
            }}
          >
            <BsPersonCircle />
          </My>
        </NavBox>
      </Container>
    </>
  );
};

const Container = styled.header`
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
`;
const NavBox = styled.div`
  color: #f3b340;
  display: flex;
  justify-content: space-evenly;
`;
const Home = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 70px;
  color: #f3b340;
  cursor: pointer;
`;
const Search = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 70px;
  color: #f3b340;
  cursor: pointer;
`;
const Check = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 70px;
  color: #f3b340;
  cursor: pointer;
`;
const My = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 70px;
  color: #f3b340;
  cursor: pointer;
`;

export default Navbar;
