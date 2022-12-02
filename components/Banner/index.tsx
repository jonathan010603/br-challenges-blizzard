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
        <Banner__Text highlightedGame={selectedGame} />
        <Banner__TrailerAndLogo highlightedGame={selectedGame} />
      </Banner__Content>
    </Banner__Container>
  );
};

const Banner__Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Banner__BG = styled.section<IBannerBG__Props>`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-image: url(${(p) => bannerGamesData[p.selectedIcon].bg});
`;

const Banner__Gradient = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
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
  align-items: center;
`;

export default Banner;
