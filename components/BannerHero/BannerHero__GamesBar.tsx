import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { BannerHeroData } from "../../data/BannerHeroData";

interface IProps {
  setHighlight: Dispatch<SetStateAction<number>>;
}

const Banner__GamesBar = ({ setHighlight }: IProps) => {
  return (
    <Container>
      <img src={BannerHeroData[0].icon} onClick={() => setHighlight(0)} />
      <img src={BannerHeroData[1].icon} onClick={() => setHighlight(1)} />
      <img src={BannerHeroData[2].icon} onClick={() => setHighlight(2)} />
      <img src={BannerHeroData[3].icon} />
      <img src={BannerHeroData[4].icon} />
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
`;

export default Banner__GamesBar;
