import { ReactNode, useState } from "react";
import styled from "styled-components";
import { BannerHeroData, transitionsTime } from "../../data/BannerHeroData";
import BannerHero__GamesBar from "./BannerHero__GamesBar";
import BannerHero__Text from "./BannerHero__Text";
import BannerHero__TrailerAndLogo from "./BannerHero__TrailerAndLogo";

interface IBannerHeroBG__Props {
  selectedIcon: number;
}

const BannerHero = () => {
  const [selectedGame, setSelectedGame] = useState(0);
  return (
    <BannerHero__Container>
      <BannerHero__BG selectedIcon={selectedGame} />
      <BannerHero__Gradient />
      <BannerHero__Content>
        <BannerHero__GamesBar
          highlightedGame={selectedGame}
          setHighlight={setSelectedGame}
        />
        <BannerHero__TextAndTrailer>
          <BannerHero__Text highlightedGame={selectedGame} />
          <BannerHero__TrailerAndLogo highlightedGame={selectedGame} />
        </BannerHero__TextAndTrailer>
      </BannerHero__Content>
    </BannerHero__Container>
  );
};

const BannerHero__Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  padding-bottom: 9.64vh;
`;

const BannerHero__BG = styled.section<IBannerHeroBG__Props>`
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 500px;
  position: absolute;
  background-size: cover;
  background-image: url(${(p) => BannerHeroData[p.selectedIcon].bg});
  transition: all ${transitionsTime}s ease-out;
`;

const BannerHero__Gradient = styled.div`
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

const BannerHero__Content = styled.div`
  width: 100%;
  height: 64.53vh;
  padding: 0 15.52vw;
  display: flex;
  min-height: 350px;
  align-items: center;

  @media only screen and (max-width: 1470px) {
    padding: 0 6.94vw 0 7.77vw;
  }

  @media only screen and (max-width: 1112px) {
    padding: 0;
    padding: 0 4.03vw 0 7.55vw;
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-top: 23vh;
  }
`;

const BannerHero__TextAndTrailer = styled.div`
  z-index: 10;
  display: flex;
  margin-top: 38.04vh;
  margin-left: 9vw;
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

export default BannerHero;
