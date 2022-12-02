import { ReactNode, useState } from "react";
import styled from "styled-components";
import { bannerGamesData } from "../../data/bannerGamesData";
import Banner__GamesBar from "./Banner__GamesBar";
import Banner__Text from "./Banner__Text";
import Banner__TrailerAndLogo from "./Banner__TrailerAndLogo";

interface IBannerBG__Props {
  selectedIcon: number;
}

const Banner = () => {
  const [selectedGame, setSelectedGame] = useState(0);
  return (
    <Banner__Container>
      <Banner__BG selectedIcon={selectedGame}></Banner__BG>
      <Banner__Gradient></Banner__Gradient>
      <Banner__Content>
        <Banner__GamesBar setHighlight={setSelectedGame} />
        <Banner__TextAndTrailer>
          <Banner__Text highlightedGame={selectedGame} />
          <Banner__TrailerAndLogo highlightedGame={selectedGame} />
        </Banner__TextAndTrailer>
      </Banner__Content>
    </Banner__Container>
  );
};

const Banner__Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  padding-bottom: 9.64vh;
`;

const Banner__BG = styled.section<IBannerBG__Props>`
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 500px;
  position: absolute;
  background-size: cover;
  background-image: url(${(p) => bannerGamesData[p.selectedIcon].bg});
`;

const Banner__Gradient = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  min-height: 500px;
  background: radial-gradient(
    73.1% 73.1% at 52.6% 25.14%,
    rgba(2, 2, 3, 0) 0%,
    #020203 71.1%
  );
  mix-blend-mode: multiply;
  opacity: 0.5;
`;

const Banner__Content = styled.div`
  width: 100%;
  height: 64.53vh;
  padding: 0 15.52vw;
  display: flex;
  min-height: 350px;
  align-items: center;

  @media only screen and (max-width: 1470px) {
      padding: 0 5.83vw;
  }

  @media only screen and (max-width: 1112px) {
    padding: 0;
    padding-left: 7.55vw;
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-top: 23vh;
  }
`;

const Banner__TextAndTrailer = styled.div`
  z-index: 10;
  display: flex;
  margin-top: 38.04vh;
  margin-left: 9vW;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 1112px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-left: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 1112px) and (min-height: 830px) {
    margin-top: 0;
  }
`;

export default Banner;
