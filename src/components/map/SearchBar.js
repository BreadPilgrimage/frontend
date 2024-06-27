import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <SearchBox
      onClick={() => {
        window.location.href = "/search";
      }}
    >
      <div id="message">빵집을 검색해보세요</div>
      <AiOutlineSearch id="search-icon" />
    </SearchBox>
  );
};
export default SearchBar;

const SearchBox = styled.div`
  width: 95%;
  height: 43px;
  border: 1px solid #929292;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;

  #message {
    text-align: left;
    font-size: 15px;
    color: #666;
    line-height: 43px;
    position: absolute;
    left: 60px;
  }

  #search-icon {
    font-size: 25px;
    color: #666;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    line-height: 43px;
  }
`;
