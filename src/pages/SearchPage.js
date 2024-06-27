import React, { useState } from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";

const SearchPage = () => {
  // 검색 리스트 API 연동
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleInputChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };

  const clearInput = () => {
    setSearchKeyword("");
  };
  return (
    <Container>
      <SearchBox>
        <SearchInput
          id="input"
          type="text"
          autoFocus
          value={searchKeyword}
          onChange={handleInputChange}
        />
        <div id="delete-icon" onClick={clearInput}>
          <TiDelete size="35" />
        </div>
      </SearchBox>
      <ListBox></ListBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ListBox = styled.div`
  width: 100hw;
  position: relative;
`;

const SearchBox = styled.div`
  width: 95%;
  height: 43px;
  border: 1px solid #929292;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  position: relative;
  margin: 0 auto;
  margin-top: 15px;

  #delete-icon {
    color: #888;
    position: absolute;
    top: 5px;
    right: 5%;
    cursor: pointer;
  }
`;
const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  border: none;
  margin-left: 20px;
  font-size: 20px;
  color: #333;
  &:focus {
    outline: none;
  }
`;

export default SearchPage;
