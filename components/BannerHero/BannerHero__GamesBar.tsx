import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { BannerHeroData, transitionsTime } from "../../data/BannerHeroData";

interface IProps {
  setHighlight: Dispatch<SetStateAction<number>>;
  highlightedGame: number;
}

const Banner__GamesBar = ({ highlightedGame, setHighlight }: IProps) => {
  return (
    <Container>
      <img
        className={highlightedGame === 0 ? "" : "disabled"}
        src={BannerHeroData[0].icon}
        onClick={() => setHighlight(0)}
      />
      <img
        className={highlightedGame === 1 ? "" : "disabled"}
        src={BannerHeroData[1].icon}
        onClick={() => setHighlight(1)}
      />
      <img
        className={highlightedGame === 2 ? "" : "disabled"}
        src={BannerHeroData[2].icon}
        onClick={() => setHighlight(2)}
      />
      <img className="off" src={BannerHeroData[3].icon} />
      <img className="off " src={BannerHeroData[4].icon} />
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

  @media only screen and (max-width: 1112px) {
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

  .disabled,
  .off {
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
