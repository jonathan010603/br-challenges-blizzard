import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";
import { BannerContext } from "../../contexts/BannerContext";
import { BannerHeroData, transitionsTime } from "../../data/BannerHeroData";

const Banner__GamesBar = () => {
  const ctx = useContext(BannerContext);

  return (
    <Container>
      <Image
        unoptimized={true}
        width="0"
        height="0"
        alt=""
        className={ctx?.selectedGame === 0 ? "" : "disabled"}
        src={BannerHeroData[0].icon}
        onClick={() => ctx?.setSelectedGame(0)}
      />
      <Image
        unoptimized={true}
        width="0"
        height="0"
        alt=""
        className={ctx?.selectedGame === 1 ? "" : "disabled"}
        src={BannerHeroData[1].icon}
        onClick={() => ctx?.setSelectedGame(1)}
      />
      <Image
        unoptimized={true}
        width="0"
        height="0"
        alt=""
        className={ctx?.selectedGame === 2 ? "" : "disabled"}
        src={BannerHeroData[2].icon}
        onClick={() => ctx?.setSelectedGame(2)}
      />
      <Image
        unoptimized={true}
        width="0"
        height="0"
        alt=""
        className={ctx?.selectedGame === 3 ? "" : "disabled"}
        src={BannerHeroData[3].icon}
        onClick={() => ctx?.setSelectedGame(3)}
      />
      <Image
        unoptimized={true}
        width="0"
        height="0"
        alt=""
        className={ctx?.selectedGame === 4 ? "" : "disabled"}
        src={BannerHeroData[4].icon}
        onClick={() => ctx?.setSelectedGame(4)}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 43.47vh;
  margin-top: 35vh;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  z-index: 10;

  img {
    width: 48px;
    height: 48px;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: row;
    margin-top: 7.2vh;
    width: 41.66vw;
  }

  @media only screen and (max-width: 768px) {
    min-width: 304px;
  }

  @media only screen and (max-width: 720px) {
    flex-direction: row;
    margin-top: 6.52vh;
    width: 81.06vw;
  }

  @media only screen and (max-width: 350px) {
    flex-direction: row;
    margin-top: 6.52vh;
    min-width: 200px;
    width: 240px;
  }

  .disabled {
    cursor: pointer;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    transition: all ${transitionsTime}s ease-out;

    &:hover {
      filter: grayscale(75%);
      -webkit-filter: grayscale(60%);
    }
  }
`;

export default Banner__GamesBar;
