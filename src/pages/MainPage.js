import React from "react";
import styled from "styled-components";
import MapButton from "../components/main/MapButton";
import MainComponent from "../components/main/MainComponent";

const MainPage = () => {
  return (
    <Container>
      <Ad />
      <MapButton />
      <PopularBox>
        <Title>🍞가장 인기있는 빵</Title>
        <MainContainer>
          <MainComponent name="소금빵" shop="성심당" heart="4.5만" />
          <MainComponent name="소금빵" shop="성심당" heart="4.5만" />
          <MainComponent name="소금빵" shop="성심당" heart="4.5만" />
        </MainContainer>
      </PopularBox>
      <RankingBox>
        <Title>🥐실시간 빵집 랭킹</Title>
        <MainContainer>
          <MainComponent name="소금빵" shop="성심당" heart="4.5만" />
          <MainComponent name="소금빵" shop="성심당" heart="4.5만" />
          <MainComponent name="소금빵" shop="성심당" heart="4.5만" />
        </MainContainer>
      </RankingBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Ad = styled.div`
  width: 100vw;
  height: 170px;
  border: 1px solid #111;
  margin: 20px 0;
`;

const PopularBox = styled.div`
  width: 100vw;
  height: 260px;
  margin: 20px 0;
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  text-align: left;
  margin-left: 30px;
  margin-top: 5px;
  margin-botom: 5px;
`;
const MainContainer = styled.div`
  width: 100vw;
  height: 225px;
  display: flex;
  overflow: scroll;
  max-width: 800px;
`;

const RankingBox = styled.div`
  width: 100vw;
  height: 260px;
  margin: 20px 0;
`;

export default MainPage;
