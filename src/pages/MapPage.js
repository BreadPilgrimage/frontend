import React, { useEffect } from "react";
import styled from "styled-components";
import SearchBar from "../components/map/SearchBar";
const { kakao } = window;

const MapPage = () => {
  useEffect(() => {
    // 지도 불러오기
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <Map id="map">
      <SearchBar />
    </Map>
  );
};

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default MapPage;
