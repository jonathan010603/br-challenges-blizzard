import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { bannerGamesData } from "../../data/bannerGamesData";

interface IProps {
  setHighlight: Dispatch<SetStateAction<number>>;
}

const Banner__GamesBar = ({ setHighlight }: IProps) => {
  return (
    <Container>
      <img src={bannerGamesData[0].icon} onClick={() => setHighlight(0)} />
      <img src={bannerGamesData[1].icon} onClick={() => setHighlight(1)} />
      <img src={bannerGamesData[2].icon} onClick={() => setHighlight(2)} />
      <img src={bannerGamesData[3].icon} />
      <img src={bannerGamesData[4].icon} />
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
`;

export default Banner__GamesBar;
