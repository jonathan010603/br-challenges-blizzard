import styled from "styled-components";
import { bannerGamesData } from "../../data/bannerGamesData";

interface IProps {
  highlightedGame: number;
}

const Banner__TrailerAndLogo = ({ highlightedGame }: IProps) => {
  return (
    <Container>
      <img src={bannerGamesData[highlightedGame].logo} />
      <Trailer>
        <span>ASSISTA O TRAILER</span>
        <img
          src={bannerGamesData[highlightedGame].animationCover}
          onMouseOver={e => e.currentTarget.src = bannerGamesData[highlightedGame].animationGif}
          onMouseOut={e =>e.currentTarget.src = bannerGamesData[highlightedGame].animationCover}
        />
      </Trailer>
    </Container>
  );
};

const Container = styled.div`
  z-index: 10;
  height: 100%;
  display: flex;
  margin-left: auto;
  margin-top: 37vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Trailer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
  }

  img {
    max-width: 280px;
    min-height: 173px;
    margin-top: 16px;
  }
`;

export default Banner__TrailerAndLogo;
