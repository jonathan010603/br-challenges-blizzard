import styled from "styled-components";
import { bannerImages } from "../data/bannerImages";

interface IBanner__Props {
  selectedGame: number;
}

const Banner = ({ selectedGame }: IBanner__Props) => {
  return (
    <Banner__Container>
      <Banner__BG selectedGame={selectedGame}></Banner__BG>
      <Banner__Gradient></Banner__Gradient>
    </Banner__Container>
  );
};

const Banner__Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Banner__BG = styled.section<IBanner__Props>`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-image: url(${(p) => bannerImages[p.selectedGame].bg});
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

export default Banner;
