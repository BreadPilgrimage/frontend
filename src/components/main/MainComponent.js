import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

const MainComponent = (props) => {
  const [heart, setHeart] = useState(false);

  const handleFavoriteBtn = () => {
    setHeart(!heart);
    /*
    if (!star) {
      createFavorite();
    } else {
      deleteFavorite();
    }
      */
  };

  return (
    <Box>
      <Image></Image>
      <TextBox>
        <Name>{props.name}</Name>
        <Shop>{props.shop}</Shop>
        <Heart1
          onClick={() => {
            handleFavoriteBtn();
          }}
        >
          {heart ? <FaHeart /> : <FaRegHeart />}
        </Heart1>
        <Heart2>{props.heart}</Heart2>
      </TextBox>
    </Box>
  );
};

const Box = styled.div`
  width: 170px;
  height: 200px;
  border: 2px #bbb solid;
  margin: 20px 0;
  border-radius: 20px;
  margin: 10px;
  position: relative;
`;
const Image = styled.div`
  width: 170px;
  height: 130px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  top: 0px;
`;
const TextBox = styled.div`
  width: 170px;
  height: 70px;
  border: none;
  background-color: #eee;
  top: -3px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top: 3px;
  position: relative;
`;
const Name = styled.div`
  font-size: 17px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
`;
const Shop = styled.div`
  font-size: 15px;
  text-align: left;
  margin-top: 7px;
  margin-left: 20px;
`;
const Heart1 = styled.div`
  font-size: 25px;
  text-align: left;
  color: #ff0000;
  margin-top: 10px;
  margin-right: 25px;

  position: absolute;
  right: 0px;
  top: 0px;
`;
const Heart2 = styled.div`
  font-size: 17px;
  text-align: left;
  margin-top: 12px;
  margin-right: 18px;

  position: absolute;
  right: 0px;
  top: 27px;
`;

export default MainComponent;
