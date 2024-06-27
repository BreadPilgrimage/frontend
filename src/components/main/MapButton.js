import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const MapButton = () => {
  return (
    <Button
      onClick={() => {
        window.location.href = "/map";
      }}
    >
      빵지순례 지도 보기
      <IoIosArrowForward id="forward" />
    </Button>
  );
};

const Button = styled.button`
  width: 180px;
  height: 40px;
  color: #ffffff;
  background-color: #f3b340;
  border-radius: 20px;
  border: none;
  line-height: 40px;

  #forward {
    font-size: 25px;
  }
`;

export default MapButton;
