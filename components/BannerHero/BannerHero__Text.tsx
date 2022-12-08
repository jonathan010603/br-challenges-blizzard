import styled from "styled-components";
import { BannerHeroData, transitionsTime } from "../../data/BannerHeroData";

interface IProps {
  highlightedGame: number;
}

interface IGetGameProps {
  selectedGame: number;
}

const Banner__Text = ({ highlightedGame }: IProps) => {
  return (
    <Container>
      <Banner__MainText selectedGame={highlightedGame}>
        {BannerHeroData[highlightedGame].mainText}
      </Banner__MainText>
      <Banner__SubText>
        {BannerHeroData[highlightedGame].subText}
      </Banner__SubText>
      <Banner__button selectedGame={highlightedGame}>
        {highlightedGame === 1 || highlightedGame === 2
          ? "Reserve agora na pré-venda"
          : "Jogue agora"}
      </Banner__button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 4.6vh;
  flex-direction: column;

  @media only screen and (max-width: 1200px) {
    margin-top: 0;
  }
`;

const Banner__MainText = styled.span<IGetGameProps>`
  font-weight: 700;
  font-size: 64px;
  max-width: 600px;
  line-height: 110.2%;
  white-space: pre-line;
  z-index: 7;

  @media only screen and (max-width: 900px) {
    max-width: 550px;
  }

  @media only screen and (min-width: 750px) and (max-width: 930px) {
    max-width: ${(p) =>
      p.selectedGame === 2
        ? "600px"
        : p.selectedGame === 1
        ? "510px"
        : p.selectedGame === 4
        ? "600px"
        : "550px"};
  }

  @media only screen and (max-width: 690px) {
    font-size: 50px;
    max-width: 350px;
  }

  @media only screen and (max-width: 690px) {
    font-size: 50px;
    max-width: 350px;
  }

  @media only screen and (max-width: 560px) {
    font-size: 40px;
    max-width: 283px;
  }

  @media only screen and (max-width: 340px) {
    font-size: 30px;
    max-width: 250px;
  }

  @media only screen and (max-width: 1200px) and (max-height: 667px) and (orientation: landscape) {
    font-size: 35px;
  }
`;

const Banner__SubText = styled.span`
  margin-top: 16px;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  transition: all ${transitionsTime}s ease-out;

  @media only screen and (max-width: 690px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 559px) {
    max-width: 283px;
  }

  @media only screen and (max-width: 340px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 320px) {
    font-size: 12px;
    max-width: 260px;
  }
`;

const Banner__button = styled.button<IGetGameProps>`
  border-radius: 4px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) =>
    p.selectedGame === 1 || p.selectedGame === 2 ? "21.32vw" : "8.75vw"};
  height: 52px;
  border: none;
  color: #ffffff;
  min-width: ${(p) =>
    p.selectedGame === 1 || p.selectedGame === 2 ? "250px" : "168px"};
  "250px"max-width: 331px;
  background-color: #00aeff;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  transition: all ${transitionsTime}s ease-out;

  &:hover {
    filter: brightness(120%);
  }

  @media only screen and (max-width: 340px) {
    font-size: 12px;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

export default Banner__Text;
