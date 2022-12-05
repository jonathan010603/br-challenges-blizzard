import styled from "styled-components";
import { BannerHeroData, transitionsTime } from "../../data/BannerHeroData";

interface IProps {
  highlightedGame: number;
}

const Banner__Text = ({ highlightedGame }: IProps) => {
  return (
    <Container>
      <Banner__MainText>
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

const Banner__MainText = styled.span`
  font-weight: 700;
  font-size: 64px;
  max-width: 550px;
  line-height: 110.2%;
  white-space: pre-line;
  z-index: 11;

  @media only screen and (max-width: 900px) {
    max-width: 560px;
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
    font-size: 50px;
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

interface IButtonProps {
  selectedGame: number;
}

const Banner__button = styled.button<IButtonProps>`
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

  &:hover {
    filter: brightness(75%);
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
