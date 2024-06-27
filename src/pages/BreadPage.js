import React from "react";
import styled from "styled-components";
import { FaRegThumbsUp } from "react-icons/fa";

const BreadPage = () => {
  return (
    <Container>
      <BreadImage />
      <BreadBox>
        <Title>소금빵</Title>
        <Recommand>
          <FaRegThumbsUp /> 추천 380
        </Recommand>
        <Description>
          소금빵에
          대해서...........................................................
          소금빵에
          대해서...........................................................
          소금빵에
          대해서...........................................................
          소금빵에
          대해서...........................................................
        </Description>
        <Price>6000원</Price>
      </BreadBox>
      <ReviewBox>
        <Title>🥐리뷰</Title>
        <Reviews>50개</Reviews>
        <UserBox>
          <Profile></Profile>
          <Nickname>닉네임</Nickname>
          <Date>2024.01.10</Date>
          <Message>맛있어요</Message>
          <ImageBox>
            <ReviewImage></ReviewImage>
            <ReviewImage></ReviewImage>
            <ReviewImage></ReviewImage>
          </ImageBox>
        </UserBox>
      </ReviewBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const BreadImage = styled.div`
  width: 100vw;
  height: 170px;
  border: 1px solid #111;
  margin: 20px 0;
`;

const BreadBox = styled.div`
  width: 100vw;
  margin: 20px 0;
  position: relative;
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  text-align: left;
  margin: 20px;
`;
const Recommand = styled.div`
  font-size: 17px;
  text-align: left;
  position: absolute;
  top: 5px;
  left: 100px;
`;
const Description = styled.div`
  height: 70px;
  font-size: 17px;
  text-align: left;
  margin: 20px 20px 10px 20px;
  color: #999;
  overflow-y: auto;
`;
const Price = styled.div`
  text-align: left;
  font-size: 20px;
  margin-left: 20px;
  font-weight: bold;
`;

const ReviewBox = styled.div`
  font-size: 23px;
  position: relative;
  //border: 1px solid #111;
`;
const Reviews = styled.div`
  font-size: 17px;
  position: absolute;
  top: 5px;
  left: 110px;
`;
const UserBox = styled.div`
  font-size: 23px;
  position: relative;
  padding: 0px 20px;
`;
const Profile = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ddd;
  border-radius: 50%;
  margin-left: 10px;
`;
const Nickname = styled.div`
  font-size: 20px;
  position: absolute;
  font-weight: bold;
  top: 5px;
  left: 100px;
`;
const Date = styled.div`
  font-size: 17px;
  position: absolute;
  color: #999;
  top: 7px;
  left: 170px;
`;
const Message = styled.div`
  font-size: 17px;
  position: absolute;
  color: #999;
  top: 35px;
  left: 110px;
`;
const ImageBox = styled.div`
  width: 350px;
  font-size: 23px;
  display: flex;
  overflow: scroll;
  max-width: 800px;
`;

const ReviewImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 10px;
  margin: 10px;
`;

export default BreadPage;
