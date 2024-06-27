import React from "react";
import styled from "styled-components";
import { MdOutlineMessage } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import ShopComponent from "../components/shop/ShopComponent";
const ShopPage = () => {
  return (
    <Container>
      <ShopBox>
        <ShopName>성심당 본점</ShopName>
        <Review>
          <MdOutlineMessage /> 리뷰 354
        </Review>
        <Heart>
          <CiBookmark /> 찜 57,214
        </Heart>
        <Address>대전광역시 중구 대종로480번길 15</Address>
        <Number>매장번호 : 010-0000-0000</Number>
      </ShopBox>
      <BreadBox>
        <PopularBox>
          <Title>🍞매장에서 가장 인기있는 빵 TOP 3</Title>
          <ShopComponent />
          <ShopComponent />
          <ShopComponent />
        </PopularBox>
        <NewBox>
          <Title>🥐신제품</Title>
          <ShopComponent />
          <ShopComponent />
          <ShopComponent />
        </NewBox>
      </BreadBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const ShopBox = styled.div`
  width: 100vw;
  height: 170px;
  border: 1px solid #111;
  margin: 20px 0;

  position: relative;
`;
const ShopName = styled.div`
  font-size: 29px;
  font-weight: bold;
  text-align: left;
  margin: 20px;
`;
const Review = styled.div`
  font-size: 17px;
  text-align: left;
  position: absolute;
  top: 35px;
  left: 180px;
`;
const Heart = styled.div`
  font-size: 17px;
  text-align: left;
  position: absolute;
  top: 35px;
  left: 275px;
`;
const Address = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-left: 20px;
`;
const Number = styled.div`
  font-size: 17px;
  text-align: left;
  margin-left: 20px;
  margin-top: 10px;
`;
const BreadBox = styled.div``;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-left: 20px;
  margin-top: 30px;
  margin-botom: 5px;
`;
const PopularBox = styled.div``;

const NewBox = styled.div``;
export default ShopPage;
