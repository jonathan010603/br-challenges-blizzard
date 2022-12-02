import styled from "styled-components";
import { bannerGamesData } from "../../data/bannerGamesData";

interface IProps {
  highlightedGame: number;
}

const Banner__Text = ({ highlightedGame }: IProps) => {
  return (
    <Container>
      <Banner__MainText>
        {bannerGamesData[highlightedGame].mainText}
      </Banner__MainText>
      <Banner__SubText>
        {bannerGamesData[highlightedGame].subText}
      </Banner__SubText>
      <Banner__button>
        <img src="/assets/ui/login.png" />
        Jogue agora
      </Banner__button>
    </Container>
  );
};

const Container = styled.div`
  z-index: 10;
  display: flex;
  margin-left: 8.33vw;
  margin-top: 28.12vh;
  flex-direction: column;
`;

const Banner__MainText = styled.span`
  font-weight: 700;
  font-size: 64px;
  line-height: 110.2%;
  white-space: pre-line;
`;

const Banner__SubText = styled.span`
  margin-top: 16px;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
`;

const Banner__button = styled.button`
  border-radius: 4px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.41vw;
  height: 52px;
  border: none;
  color: #ffffff;
  min-width: 200px;
  background-color: #00aeff;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

export default Banner__Text;
