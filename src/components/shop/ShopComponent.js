import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const ShopComponent = (props) => {
  const [heart, setHeart] = useState(false);

  const handleFavoriteBtn = () => {
    setHeart(!heart);
  };

  return (
    <Container>
      <Image></Image>
      <TextBox>
        <Name>소금빵{props.name}</Name>
        <Price>6,000원{props.price}</Price>
        <Heart
          onClick={() => {
            handleFavoriteBtn();
          }}
        >
          {heart ? <FaThumbsUp /> : <FaRegThumbsUp />} 추천 380
        </Heart>
        <Review>
          {props.review} <MdOutlineMessage /> 리뷰 54
        </Review>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  position: relative;
`;
const Image = styled.div`
  width: 100px;
  height: 100px;
  background-color: #bbb;
  margin: 10px 30px;
  border-radius: 10px;
`;
const TextBox = styled.div`
  width: 230px;
  position: absolute;
  top: 0px;
  left: 135px;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
`;
const Price = styled.div`
  font-size: 17px;
  text-align: left;
  margin-top: 7px;
  margin-left: 20px;
`;
const Heart = styled.div`
  font-size: 17px;
  text-align: left;
  margin-top: 7px;
  margin-left: 20px;
`;
const Review = styled.div`
  font-size: 17px;
  text-align: left;
  margin-top: 12px;
  margin-right: 18px;
  position: absolute;
  top: 62px;
  left: 120px;
`;

export default ShopComponent;
